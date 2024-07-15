import { Readable } from 'stream'

import { authorizePB } from '$lib/utils/pb'
import type { APIRoute } from "astro"


export const POST: APIRoute = async ({ request }) => {
  const json = await request.json();
  const { data } = json
  
  const eventType = json.event_type

  console.log('---------------------')
  console.log('Paddle::Event', eventType)
  console.log('---------------------')
  console.log('Paddle::Data', data)
  console.log('---------------------')

  const pb = await authorizePB()

  switch (true) {
    case eventType.split('.')[0] === 'transaction':
      try {
        await pb.collection('transaction_logs').create({ data: {
          id: json.event_id,
          customerId: data.customer_id,
          eventType: eventType,
          date: json.occured_at,
          data: data
        }})
      } catch (error) {
        console.error('DB::Error - Error writing to PocketBase: ', error)
      }
      break;
    case eventType.split('.')[0] === 'subscription':
      // adminNotifier() ... use Resend here...
      try {
          await pb.collection('subscription_logs').create({ data: {
            id: json.event_id,
            customerId: data.customer_id,
            eventType: eventType,
            date: json.occured_at,
            data: data
          }})
      } catch (error) {
        console.error('DB::Error - Error writing to PocketBase: ', error)
      }
      break;
    default:
      try {

      await pb.collection('paddle_logs').create({ data: {
        id: json.event_id,
        customerId: data.customer_id,
        eventType: eventType,
        date: json.occured_at,
        data: data
    }})
    } catch(err){
        console.error('DB::Error - Error writing to PocketBase: ', err)
    }
      break;
  }

  return new Response(JSON.stringify({
    msg: 'test webhooks...'
  }), {
      status: 200,
      statusText: 'ok',
    }
  )
}
