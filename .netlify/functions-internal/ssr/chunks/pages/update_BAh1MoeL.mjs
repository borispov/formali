import { a as authorizePB } from './form_Cp_uTaTg.mjs';

const POST = async ({ request }) => {
  console.log(`POST: /api/form/update.json`);
  const pb = await authorizePB();
  const form = await request.json();
  console.log("received form: ", form);
  if (!form) {
    return new Response(JSON.stringify({ msg: "Must provide form data" }), { status: 404 });
  }
  try {
    await pb.collection("forms").update(form.id, form);
    return new Response(JSON.stringify({
      msg: "Success"
    }));
  } catch (e) {
    return new Response(
      JSON.stringify({
        msg: "Could not save FORM to DB"
      }),
      { status: 500 }
    );
  }
};

export { POST };
