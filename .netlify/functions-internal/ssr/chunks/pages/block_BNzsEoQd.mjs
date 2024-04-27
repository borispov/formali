/* empty css                          */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_DLZz2DHT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Block = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Block;
  if (Astro2.request.method === "GET") {
    console.log("HELLLLOOOOOOOOOOOOOOOOOO");
    return new Response(
      JSON.stringify({ message: "HELLO" }),
      { status: 200 }
    );
  }
  return renderTemplate`${maybeRenderHead()}<div>
HELLO GET /api/builder/block
</div>`;
}, "/Users/rispov/Developer/formali/src/pages/api/builder/block.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/api/builder/block.astro";
const $$url = "/api/builder/block";

export { $$Block as default, $$file as file, $$url as url };
