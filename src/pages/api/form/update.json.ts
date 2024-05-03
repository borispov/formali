import type { APIRoute } from "astro";

import { formsCollection } from "$lib/db";

export const POST: APIRoute = async ({ request }) => {
  console.log(`POST: /api/form/update.json`)

  const { form } = await request.json()
  console.log('post body: ', form)

  if (!form) {
    return new Response(JSON.stringify({
        status: 400, 
        msg: "Must provide form data"
      })
    )
  }

  try {
    const col = await formsCollection()
    const f = await col.findOne({ id: form.id })
    console.log(f)
  } catch(e) {
    return new Response(JSON.stringify({
        status: 400, 
        msg: "Could not save FORM to DB"
      })
    )
  }

  return new Response(JSON.stringify({
      msg: 'udpating form...',
    })
  )

}

// export const GET: APIRoute = async ({ params, request }) => {}
