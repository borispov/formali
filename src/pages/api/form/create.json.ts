import type { APIRoute } from "astro";
import type { Form } from "$lib/components/SvelteForm/store.svelte";
import { formsCollection } from "$lib/db";

const createForm = async (url:string, form:Form) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(form)
  })
  return response.json()
}


export const POST: APIRoute = async ({ request }) => {
  console.log(`PARSING POST REQUEST on /api/form/create.json`)

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
    // const col = await formsCollection()
    // const f = await col.insertOne(form)
    // console.log(f)
  } catch(e) {
    return new Response(JSON.stringify({
        status: 400, 
        msg: "Could not save FORM to DB"
      })
    )
  }

  return new Response(JSON.stringify({
      msg: 'saved form to DB',
    })
  )

}

// export const GET: APIRoute = async ({ params, request }) => {}
