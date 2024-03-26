/* empty css                            */
/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_BTsgjje_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const partial = true;
const prerender = false;
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${maybeRenderHead()}<div class="content opacity-100 relative w-full max-w-md px-4 h-full md:h-auto mx-auto" dir="rtl"> <!-- Modal content --> <div class="bg-white rounded-lg relative dark:bg-gray-700"> <div class="flex justify-end p-2"> <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal"></button> </div> <form name="sign-up" action="/thanks" netlify data-netlify="true" class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"> <h3 class="text-xl font-medium text-gray-900 dark:text-white">הרשם להיות בטא-טסטר שלנו</h3> <div> <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">כתובת דוא״ל</label> <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""> </div> <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">קבל עדכון ראשון!</button> <div class="response"></div> </form> </div> </div> `;
}, "/Users/rispov/Developer/formali/src/pages/partials/info.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/partials/info.astro";
const $$url = "/partials/info";

export { $$Info as default, $$file as file, partial, prerender, $$url as url };
