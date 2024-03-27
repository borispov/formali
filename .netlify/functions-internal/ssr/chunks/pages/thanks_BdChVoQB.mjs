/* empty css                            */
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, l as defineScriptVars, k as renderComponent, m as maybeRenderHead } from '../astro_D5rWRlKh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './index_BC_XGxfS.mjs';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Thanks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thanks;
  const someData = {
    msg: "hello world"
  };
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => ({
      data,
    }))
  })

  up.on('click', 'button', async function() {
    await fetch('/thanks', {
      method: 'POST',
      content: "application/json",
      body: {
        messsage: "No"
      }
    })
    alert("Great! I am thrilled that you like Formali's MVP version!")
  })

})();<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "title": "\u05EA\u05D5\u05D3\u05D4 \u05E2\u05DC \u05D4\u05E8\u05E9\u05DE\u05EA\u05DB\u05DD", "data-astro-cid-pxt24rmx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-lvh bg-orange-300 flex flex-col align-center items-center justify-center" dir="rtl" data-astro-cid-pxt24rmx> <div x-transition:enter.duration.400ms x-data="data" class="shadow-md max-2-xl w-[400px] py-10 px-8 text-center" data-astro-cid-pxt24rmx> <span class="font-semibold text-xl block" data-astro-cid-pxt24rmx>
האם אהבתם את formali?
</span> <p class="mt-2" data-astro-cid-pxt24rmx>
האם תהיו מוכנים להשתמש באפליקציה בעבור תשלום סמלי קבוע?
</p> <div class="flex justify-center mt-8 gap-10" data-astro-cid-pxt24rmx> <a href="/sign-up" up-layer="new" up-target=".content" up-position="bottom" up-align="right" size="grow" class="text-base block pt-4" data-astro-cid-pxt24rmx>בטח!</a> <a href="/sign-up" up-layer="new" up-target=".content" up-position="bottom" up-align="right" size="grow" class="text-base block pt-4" data-astro-cid-pxt24rmx>רק בחינם</a> <a href="/sign-up?answer=no" up-layer="new" up-target=".content" up-position="bottom" up-align="right" size="grow" class="text-base block pt-4" data-astro-cid-pxt24rmx>לא</a> </div> <div class="content" data-astro-cid-pxt24rmx></div> </div> </div> ` }), defineScriptVars({ data: someData }));
}, "/Users/rispov/Developer/formali/src/pages/thanks.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/thanks.astro";
const $$url = "/thanks";

export { $$Thanks as default, $$file as file, $$url as url };
