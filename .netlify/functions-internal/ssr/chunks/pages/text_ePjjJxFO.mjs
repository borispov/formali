/* empty css                          */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, e as addAttribute } from '../astro_DLZz2DHT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$FormBtnContainer } from './test_3g8UO5_4.mjs';
import 'clsx';
import './feedback_Ds3165pf.mjs';
/* empty css                         */
import * as z from 'zod';

const $$Astro$1 = createAstro();
const $$ErrorNotification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorNotification;
  const { msg = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="error flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert"> <svg class="flex-shrink-0 inline w-4 h-4 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path> </svg> <span class="sr-only">מידע</span> <div> <span class="font-medium">שגיאה! </span> ${msg} </div> </div>`;
}, "/Users/rispov/Developer/formali/src/components/alpine/ErrorNotification.astro", void 0);

const $$Astro = createAstro();
const $$Text = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Text;
  let renderError = false;
  const emailSchema = z.string().email();
  if (Astro2.request.method === "POST") {
    if (Astro2.request.headers.has("x-up-validate")) {
      const fd = await Astro2.request.formData();
      const emailInput = fd.get("email");
      try {
        emailSchema.parse(emailInput);
        return new Response(`
        <div class="error hidden"></div>
      `);
      } catch (err) {
        renderError = true;
      }
    }
  }
  return renderTemplate`${renderError && renderTemplate`${renderComponent($$result, "ErrorNotification", $$ErrorNotification, { "msg": `\u05D0\u05E0\u05D0 \u05D4\u05D6\u05DF/\u05D9 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05EA\u05E7\u05D9\u05DF`, "data-astro-cid-nkzilxmd": true })}` || renderTemplate`${maybeRenderHead()}<fieldset data-astro-cid-nkzilxmd><label x-text="field.question" class="text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal" data-astro-cid-nkzilxmd><sup x-show="{field.required}" class="text-red-600" data-astro-cid-nkzilxmd> * </sup></label><p x-text="field.description" class="text-lg font-normal leading-relaxed text-neutral-600" data-astro-cid-nkzilxmd></p><input :id="$id('input')" :name="$id('input')" :type="field.type" @keyup="handleErr" @submit.prevent="" :placeholder="field.placeholder" :required="field.required"${addAttribute(`transition-all bg-transparent border-b-2 border-b-neutral-600 text-gray-800 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 placeholder:text-xl lg:placeholder:text-3xl focus:border-b-neutral-100 outline-0`, "class")} data-astro-cid-nkzilxmd><div class="error hidden mt-2 p-1 text-red-600 bg-yellow-200" data-astro-cid-nkzilxmd></div>${renderComponent($$result, "FormBtnContainer", $$FormBtnContainer, { "text": "\u05D4\u05DE\u05E9\u05DA", "data-astro-cid-nkzilxmd": true })}</fieldset>`}`;
}, "/Users/rispov/Developer/formali/src/pages/api/form/text.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/api/form/text.astro";
const $$url = "/api/form/text";

export { $$Text as default, $$file as file, $$url as url };
