import type { APIRoute } from "astro";
import type { Form } from "$lib/components/SvelteForm/store.svelte";
import { formsCollection } from "$lib/db";
import { formThemeDefaults } from "$lib/lib/utils/formDefaults";

const createForm = async (form:Form, template:string) => {

  // find the user who's creating the form and append the form onto his
  // record.

  if (template == 'default') {
    let f = await formsCollection();
  }

  if (template === 'default') {
    let f = await formsCollection()
    let response = await f.insertOne({
      name: form,
      design: formThemeDefaults,
      formSteps: [],
    })
    return response
  }
  return null
}


export const POST: APIRoute = async ({ request }) => {
  console.log(`PARSING POST REQUEST on /api/form/create`)
  const resp = await request.formData()
  const newFormName = resp.get('formName')
  if (newFormName && newFormName.length < 1) {
    return `<div class="errors">הזן שם תקני</div>`
  }
  console.log('post body: ', resp)

  if (!newFormName) {
    return new Response(`<span class="errors p-2">הזן שם תקני</span>`, {
      status: 422,
    })
  }

  try {
    createForm(newFormName, 'default')
    console.log(resp)
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
