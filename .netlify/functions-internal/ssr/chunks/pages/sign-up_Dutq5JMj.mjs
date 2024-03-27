const POST = ({ request }) => {
  console.log(request.text());
  return new Response(
    JSON.stringify(`<div class="response">thanks</div>`)
  );
};

export { POST };
