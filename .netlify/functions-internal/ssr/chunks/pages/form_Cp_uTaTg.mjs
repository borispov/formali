import 'esm-env';
/* empty css                         */
import 'imask/esm/imask';
import 'imask/esm';
import 'imask';
import 'signature_pad';
/* empty css                              */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CXacuk56.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './builder_qGvk2hMd.mjs';
import { p as push, a as pop } from './dashboard_BD4s8nkm.mjs';
import { atom, computed } from 'nanostores';
import PocketBase from 'pocketbase';

const PB_URL = "https://formali-pb.fly.dev/";
const pb = new PocketBase(PB_URL);
const authorizePB = async () => {
  if (!pb.authStore.isValid) {
    await pb.admins.authWithPassword("boristofu@gmail.com", "MayaBoris2206");
  }
  return pb;
};

const formStore = atom({});

atom({});
computed(formStore, (form) => {
  if (form && form["getDesignObject"]) {
    return form.getDesignObject();
  } else {
    return "";
  }
});

function Form($$payload, $$props) {
	push();

	$$payload.out += `<!--[-->`;

	{
		$$payload.out += "<!--]!-->";
	}

	pop();
}

const $$Astro = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Form;
  let f;
  const pb = await authorizePB();
  const formId = Astro2.url.searchParams.get("formId") || "";
  try {
    f = await pb.collection("forms").getOne(formId);
    console.log("found ID: ", formId);
  } catch (error) {
    f = null;
  }
  const title = f ? `Formali - \u05DE\u05D9\u05DC\u05D5\u05D9 \u05D8\u05D5\u05E4\u05E1` : "Formali 404 Not Found";
  console.log(title);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`${f && renderTemplate`${renderComponent($$result2, "Form", Form, { "formFromParams": f, "client:load": true, "client:component-hydration": "load", "client:component-path": "$components/SvelteForm/Form.svelte", "client:component-export": "default" })}` || renderTemplate`${maybeRenderHead()}<div> <h1 class="text-3xl text-center">${title}</h1> <section class="bg-white dark:bg-gray-900 min-h-screen flex-col justify-center items-center flex"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <div class="mx-auto max-w-screen-sm text-center"> <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1> <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">מה שאתה מחפש לא נמצא כאן.</p> <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">אנא ודא כי הקישור שהזנת תקין. במידה וזהו טופס שקיבלת לשם מילוי, ודא כי לא מחקת בטעות אף תו מהקישור.</p> <a href="#" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a> </div> </div> </section> </div>`}` })}`;
}, "/Users/rispov/Developer/formali/src/pages/form.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/form.astro";
const $$url = "/form";

const form = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Form,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { authorizePB as a, form as f };
