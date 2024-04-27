/* empty css                          */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_DLZz2DHT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  const answer = Astro2.url.searchParams.get("answer");
  const isInterested = !(answer && answer == "no" || false);
  const welcomeMessage = "\u05D0\u05D9\u05D6\u05D4 \u05DB\u05D9\u05E3 \u05E9\u05D1\u05D0\u05EA\u05DD!";
  const notInterestedWelcomeMessage = "\u05D7\u05D1\u05DC, \u05D0\u05D1\u05DC...";
  const welcomeTitle = isInterested ? welcomeMessage : notInterestedWelcomeMessage;
  const welcomeText = "\u05DE\u05E2\u05E8\u05DB\u05EA formali \u05E0\u05DE\u05E6\u05D0\u05EA \u05D1\u05E9\u05DC\u05D1\u05D9 \u05E4\u05D9\u05EA\u05D5\u05D7 \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD, \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E0\u05E9\u05DE\u05D7 \u05DC\u05E2\u05D3\u05DB\u05DF \u05D0\u05EA\u05DB\u05DD \u05D1\u05DB\u05DC \u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D5\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05E2\u05D3 \u05DC\u05E8\u05D2\u05E2 \u05D4\u05D6\u05D9\u05E0\u05D5\u05E7. \u05D0\u05E0\u05D0, \u05D4\u05E9\u05D0\u05D9\u05E8\u05D5 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC, \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05D1\u05D8\u05D9\u05D7\u05D9\u05DD \u05DC\u05E2\u05D3\u05DB\u05DF \u05D0\u05EA\u05DB\u05DD \u05E8\u05E7 \u05D1\u05DE\u05D9\u05D3\u05E2 \u05E9\u05E7\u05E9\u05D5\u05E8 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05E9\u05DC\u05E0\u05D5.";
  const nonWelcomeText = "\u05D7\u05E9\u05D5\u05D1 \u05DC\u05E0\u05D5 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05E9\u05DE\u05D5\u05E2 \u05D0\u05EA \u05D3\u05E2\u05EA\u05DB\u05DD, \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E9 \u05DC\u05DB\u05DD \u05D4\u05D0\u05E8\u05D4 \u05D0\u05D5 \u05D4\u05E2\u05E8\u05D4 \u05DB\u05D3\u05D9 \u05E9\u05E0\u05D5\u05DB\u05DC \u05DC\u05E9\u05E4\u05E8 \u05D0\u05EA \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E9\u05DC\u05E0\u05D5, \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E0\u05E9\u05DE\u05D7 \u05DC\u05D3\u05E2\u05EA \u05E2\u05DC \u05DB\u05DA \u05D1\u05DB\u05D3\u05D9 \u05E9\u05E0\u05D5\u05DB\u05DC \u05DC\u05D9\u05D9\u05E2\u05DC \u05D5\u05DC\u05E9\u05E4\u05E8 \u05D0\u05EA \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DB\u05D3\u05D9 \u05E9\u05EA\u05EA\u05D0\u05D9\u05DD \u05DC\u05E6\u05E8\u05DB\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD. \u05E9\u05DC\u05D7\u05D5 \u05DE\u05D9\u05D9\u05DC \u05DC\u05DB\u05D0\u05DF: boristofu@gmail.com";
  const paraText = isInterested ? welcomeText : nonWelcomeText;
  return renderTemplate`${maybeRenderHead()}<div class="content opacity-100 relative w-full max-w-md px-4 h-full md:h-auto mx-auto" dir="rtl"> <!-- Modal content --> <div class="flex items-center justify-center flex-col bg-white rounded-lg relative dark:bg-gray-700"> <div class="flex justify-end p-2"> <button id="cta-submit" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal"></button> </div> <form name="sign-up" method="POST" action="/thanks?source=registration" data-netlify="true" class="form space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"> <h3 class="text-xl font-medium text-gray-900 dark:text-white"> ${welcomeTitle} </h3> <p class="text-gray-600 text-sm"> ${paraText} </p> ${isInterested && renderTemplate`<div> <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">כתובת דוא״ל</label> <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required> </div>
                <button type="submit" class="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">קבל עדכון ראשון!</button>`} <div class="response"></div> </form> </div> </div>`;
}, "/Users/rispov/Developer/formali/src/pages/sign-up.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/sign-up.astro";
const $$url = "/sign-up";

export { $$SignUp as default, $$file as file, $$url as url };
