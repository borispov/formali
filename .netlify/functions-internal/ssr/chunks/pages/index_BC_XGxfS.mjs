/* empty css                            */
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_D5rWRlKh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, topbar, unpoly } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${unpoly !== false && renderTemplate(_a || (_a = __template(['<script src="https://cdn.jsdelivr.net/npm/unpoly@3.7.3/unpoly.min.js"><\/script>\n			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/unpoly@3.7.3/unpoly.min.css">\n			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/unpoly@3.7.3/unpoly-bootstrap5.min.css">'])))}<title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${topbar && renderTemplate`<div dir="rtl" class="sticky inset-0 text-xl shadow-md z-50 py-4 text-center bg-indigo-400" data-astro-cid-sckkx6r4> <p class="prose mx-auto px-10 md:px-20" data-astro-cid-sckkx6r4>
🚀
				מערכת <span class="font-semibold italic" data-astro-cid-sckkx6r4>formali</span> נמצאת בשלבי פיתוח. הפידבק שלכם חשוב לנו!
</p> </div>`} ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "/Users/rispov/Developer/formali/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "topbar": true, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#F7D046] bg-orange-200 bg-local bg-cover bg-no-repeat bg-center" data-astro-cid-j7pv25f6> <!-- Navbar --> <nav class="max-w-6xl mx-auto" data-astro-cid-j7pv25f6> <div class="relative overflow-hidden" data-astro-cid-j7pv25f6> <div class="flex justify-between items-center px-10 py-4 md:py-8 md:px-20" data-astro-cid-j7pv25f6> <!-- Logo --> <div class="logo" data-astro-cid-j7pv25f6> <a href="/" data-astro-cid-j7pv25f6> <img src="/logo.png" alt="logo" width="186px" data-astro-cid-j7pv25f6> </a> </div> <!-- Menu --> <div class="flex space-x-4" data-astro-cid-j7pv25f6> <a href="/" class="bg-yellow-500 px-6 py-2 text-black rounded-sm border-2 border-black drop-shadow-plain hover:drop-shadow-4xl hover:bg-yellow-300 transition-all" data-astro-cid-j7pv25f6>
הרשמה
</a> </div> </div> </div> </nav> <main dir="rtl" data-astro-cid-j7pv25f6> <div class="relative max-w-7xl mx-auto mt-20 pb-20" data-astro-cid-j7pv25f6> <div class="flex flex-col justify-center lg:grid grid-cols-5 items-center px-10 md:px-20" data-astro-cid-j7pv25f6> <div class=" flex flex-col items-center lg:items-start col-span-3 lg:pl-16 xl:pl-20" data-astro-cid-j7pv25f6> <p class="text-center lg:text-right text-3xl  sm:text-5xl xl:text-6xl font-bold" data-astro-cid-j7pv25f6>
כל אחד יכול לבנות טופס בכלום זמן
</p> <p class="text-center lg:text-right text-base sm:text-lg xl:text-xl font-regular mt-10" data-astro-cid-j7pv25f6>
עם <span class="italic font-semibold" data-astro-cid-j7pv25f6>formali</span> אפשר לבנות טפסים <span class="underline underline-offset-4" data-astro-cid-j7pv25f6>ללא הגבלה</span> ולחסוך זמן יקר.
</p> <div class="lg:flex lg:items-center gap-6 mt-10 text-center" data-astro-cid-j7pv25f6> <a href="/sign-up" class="inline-block mx-auto text-2xl bg-yellow-400 border-2 border-black drop-shadow-3xl hover:drop-shadow-[4px_4px_0_#000000] px-10 py-2 text-black rounded-md" up-layer="new" up-target=".content" up-position="bottom" up-align="right" size="grow" data-astro-cid-j7pv25f6>
הצטרף לרשימה
</a> <div class="content" data-astro-cid-j7pv25f6></div> <a href="/test" target="_blank" class="underline group transition-all hover:no-underline inline-block mx-auto mt-4 lg:mt-0 text-sm" data-astro-cid-j7pv25f6>
לבינתיים, תראו דוגמא, (עדיין בפיתוח) <span class="hidden group-hover:inline" data-astro-cid-j7pv25f6>👀</span> </a> </div> <div class="text-sm pt-6 pr-4 font-semibold rotate-1" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
✅ תוצאות ללא הגבלה
</p> <p class="pt-2" data-astro-cid-j7pv25f6>
✅ חבילה חינמית נדיבה
</p> </div> </div> <div class="pt-12 lg:pt-0 col-span-2 hidden lg:block" data-astro-cid-j7pv25f6> <img class="w-full m-auto" src="/riff.png" alt="" data-astro-cid-j7pv25f6> </div> </div> <div class="pt-10" data-astro-cid-j7pv25f6> <img src="/builder.png" alt="" data-astro-cid-j7pv25f6> </div> </div> </main> </div> ` })} `;
}, "/Users/rispov/Developer/formali/src/pages/index.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
