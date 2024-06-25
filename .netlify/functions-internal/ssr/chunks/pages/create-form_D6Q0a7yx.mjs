/* empty css                              */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_CXacuk56.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const partial = true;
const $$CreateForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CreateForm;
  const welcomeTitle = `\u05D9\u05E6\u05D9\u05E8\u05EA \u05D8\u05D5\u05E4\u05E1 \u05D7\u05D3\u05E9`;
  const paraText = ``;
  const submitText = "\u05E6\u05D5\u05E8 \u05D8\u05D5\u05E4\u05E1";
  return renderTemplate`${maybeRenderHead()}<div class="content opacity-100 relative w-full max-w-md px-4 h-full md:h-auto mx-auto" dir="rtl"> <!-- Modal content --> <div class="flex items-center justify-center flex-col bg-white rounded-lg relative dark:bg-gray-700"> <div class="flex justify-end p-2"> <button id="cta-submit" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="form-create-modal"></button> </div> <form up-target=".content" up-fail-target=".errors" name="form-create" method="POST" action="/api/form/create" class="form space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" up-submit> <h3 class="text-xl font-medium text-gray-900 dark:text-white"> ${welcomeTitle} </h3> <p class="text-gray-600 text-sm"> ${paraText} </p> <div> <label for="formName" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">שם הטופס</label> <input up-validate type="text" name="formName" id="formName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="שם הטופס" required> </div> <button type="submit" class="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> ${submitText} </button> </form> <div class="errorwrapper text-red-600 mt-2 bg-yellow-300 text-base font-bold"> <div class="errors"></div> </div> </div> </div> `;
}, "/Users/rispov/Developer/formali/src/pages/partials/create-form.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/partials/create-form.astro";
const $$url = "/partials/create-form";

export { $$CreateForm as default, $$file as file, partial, $$url as url };
