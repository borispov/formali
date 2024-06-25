/* empty css                              */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_CXacuk56.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const partial = true;
const $$ErrorMsg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ErrorMsg;
  let { msg } = Astro2.props;
  if (!msg) {
    let s = Astro2.url.searchParams.get("msg");
    msg = s && decodeURI(s);
  }
  return renderTemplate`${maybeRenderHead()}<div hx-swap-oob="true" id="input-error" class="error flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert"> <svg class="flex-shrink-0 inline w-4 h-4 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path> </svg> <span class="sr-only">מידע</span> <div> <span class="font-medium">שגיאה! </span> ${msg} </div> </div>`;
}, "/Users/rispov/Developer/formali/src/pages/api/form/error-msg.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/api/form/error-msg.astro";
const $$url = "/api/form/error-msg";

export { $$ErrorMsg as default, $$file as file, partial, $$url as url };
