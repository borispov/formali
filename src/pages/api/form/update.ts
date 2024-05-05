import type { APIRoute } from "astro";

import { formsCollection } from "$lib/db";
import { ObjectId } from "mongodb";


export const POST: APIRoute = async ({ request }) => {
  console.log(`POST: /api/form/update.json`)

  const form = await request.json()

  if (!form) {
    return new Response(JSON.stringify({ msg: "Must provide form data" }), { status: 404 })
  }

  try {
    const col = await formsCollection()
    const f = await col.findOne({ _id: new ObjectId(form.id) })
    if (f) {
      console.log(`found corresponding form with ID: ${form.id}`)
      await col.replaceOne({ _id: form.id }, form)
        .then(() => console.log("Replaced successfully"))
        .catch(e => console.log('Stumbled Upon An ERROR replacing/updating content of form', e))
      return new Response(JSON.stringify({
        msg: "Success"
      }))
    } else {
      return new Response(JSON.stringify({
        msg: "Could not update form because it's not found in the database"
      }), { status: 422})
    }
  } catch(e) {
    return new Response(JSON.stringify({
        msg: "Could not save FORM to DB"
      }), { status: 500 }
    )
  }
}
