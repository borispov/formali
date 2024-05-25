import type { APIRoute } from "astro";

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090/')

export const POST: APIRoute = async ({ locals, request }) => {
  console.log(`PARSING POST REQUEST on /api/form/submission`)
  const resp = await request.json()
  await pb.admins.authWithPassword('boristofu@gmail.com', 'MayaBoris2206')
  try {
    await pb.collection('submissions').create({
      form: resp.formId,
      submissionData: JSON.stringify(resp.submissionData)
    })

    return new Response(JSON.stringify({
        status: 200,
        msg: 'form submitted successfully',
      })
    )

  } catch(e) {
    console.log(e.response)
    await pb.collection('submissions_logs').create({
      form: resp.formId,
      code: e.response.code,
      message: e.response.message,
      data: JSON.stringify(e.response.data)
    })

    return new Response(JSON.stringify({
        status: 400, 
        msg: "Could not submit FORM"
      })
    )
  }


}

// export const GET: APIRoute = async ({ params, request }) => {}
