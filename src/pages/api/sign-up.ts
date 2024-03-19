import type { APIRoute } from "astro";

export const POST: APIRoute = ({ request }) => {
  console.log(request.text())

  return new Response(
    JSON.stringify(`<div class="response">thanks</div>`)
  )
}
