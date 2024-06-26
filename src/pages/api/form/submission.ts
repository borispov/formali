import type { APIRoute } from "astro";

import PocketBase from "pocketbase";
const PB_URL = import.meta.env.PUBLIC_PB_URL || "http://localhost:8090/";
const pb = new PocketBase(PB_URL);

export const POST: APIRoute = async ({ locals, request }) => {
  console.log(`PARSING POST REQUEST on /api/form/submission`);
  const resp = await request.json();
  // TODO: Eliminate Credentials!
  await pb.admins.authWithPassword(
    import.meta.env.PB_EMAIL,
    import.meta.env.PB_PASSWORD,
  );

  try {
    console.log(`POST: /api/form/submission.ts, request details: `);
    console.log(`form id: ${resp.formId}`);

    await pb.collection("submissions").create({
      form: resp.formId,
      submissionData: JSON.stringify(resp.submissionData),
    });

    return new Response(
      JSON.stringify({
        status: 200,
        msg: "form submitted successfully",
      }),
    );
  } catch (e) {
    console.log(e.response);
    await pb.collection("submissions_logs").create({
      form: resp.formId,
      code: e.response.code,
      message: e.response.message,
      data: JSON.stringify(e.response.data),
    });

    return new Response(
      JSON.stringify({
        status: 400,
        msg: "Could not submit FORM",
      }),
    );
  }
};

// export const GET: APIRoute = async ({ params, request }) => {}
