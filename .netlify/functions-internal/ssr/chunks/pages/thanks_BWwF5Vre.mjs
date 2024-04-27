/* empty css                          */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DLZz2DHT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './builder_BTNHgNh4.mjs';
import { Resend } from 'resend';
/* empty css                           */

const $$Astro = createAstro();
const $$Thanks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thanks;
  if (Astro2.request.method === "POST") {
    try {
      const resend = new Resend(process.env.RESEND);
      const data = await Astro2.request.formData();
      const email = data.get("email");
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: "boristofu@gmail.com",
        subject: "New Signup For Formali!",
        html: `<h1>New Signup For Formali</h1><p>${email} - has signed up.</p>`
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  const source = Astro2.url.searchParams.get("source");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "תודה על הרשמתכם", "data-astro-cid-pxt24rmx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-lvh bg-neutral-900 text-white flex flex-col align-center items-center justify-center" dir="rtl" data-astro-cid-pxt24rmx> <div class="shadow-md max-w-lg px-8 text-center" data-astro-cid-pxt24rmx> ${source && source === "registration" && renderTemplate`<div data-astro-cid-pxt24rmx> <h1 x-transition.delay.500ms class="font-black text-4xl block leading-none tracking-tight" data-astro-cid-pxt24rmx>
תודה רבה שנרשמתם למערכת <span class="text-6xl font-brush font-normal antialiased text-transparent leading-none py-1 bg-clip-text bg-gradient-to-r from-pink-hot to-purple-new" data-astro-cid-pxt24rmx>formali</span> </h1> <p class="mt-2 text-base font-thin" data-astro-cid-pxt24rmx>
למען השקיפות, אנחנו עוד לא ממש אוספים מיילים,
            כל כולנו מושקעים בפיתוח המערכת עצמה, שלמעשה, לא הקדשנו מספיק זמן כדי 
            לרשום את הפרטים שלכם בשום מקום.
</p> <p class="mt-2 text-base font-thin" data-astro-cid-pxt24rmx>
מה שחשוב לנו לדעת זה שהינכם מעוניינים במה שאנחנו מפתחים.
            תודה שהבעתם עניין במוצר שלנו!
</p> <p class="mt-4 text-red font-thin italic text-sm" data-astro-cid-pxt24rmx>
ואם תרצו לכתוב: boristofu@gmail.com
</p> <hr class="divider mt-4" data-astro-cid-pxt24rmx> <a href="/" class="button mt-4 button-primary w-2/3" data-astro-cid-pxt24rmx>
חזרה
</a> </div>` || renderTemplate`<h1 class="font-black text-4xl block leading-none tracking-tight" data-astro-cid-pxt24rmx>
האם אהבתם את <span class="text-6xl font-brush font-normal antialiased text-transparent leading-none py-1 bg-clip-text bg-gradient-to-r from-pink-hot to-purple-new" data-astro-cid-pxt24rmx>formali</span>?
</h1>
        
        <p class="mt-2 text-base font-thin" data-astro-cid-pxt24rmx>
האם תהיו מוכנים להשתמש באפליקציה בעבור תשלום סמלי קבוע?
</p>
        <div class="flex justify-center mt-8 gap-10" data-astro-cid-pxt24rmx> <a id="pay-button" href="/sign-up" up-layer="new" up-target=".content" up-position="bottom" up-align="right" size="grow" class="button-xl button-primary text-base block pt-4" data-astro-cid-pxt24rmx>בטח!</a> <a id="free-button" href="/sign-up" up-layer="new" up-target=".content" up-position="bottom" up-align="right" size="grow" class="button-xl button-secondary border-2 border-neutral-600 text-base block pt-4" data-astro-cid-pxt24rmx>רק בחינם</a> <a id="no-button" href="/sign-up?answer=no" up-layer="new" up-target=".content" up-position="bottom" up-align="right" size="grow" class="button-xl button-secondary text-base block pt-4" data-astro-cid-pxt24rmx>לא</a> </div>
        <div class="content" data-astro-cid-pxt24rmx></div>`} </div> </div> ` })} `;
}, "/Users/rispov/Developer/formali/src/pages/thanks.astro", void 0);
const $$file = "/Users/rispov/Developer/formali/src/pages/thanks.astro";
const $$url = "/thanks";

export { $$Thanks as default, $$file as file, $$url as url };
