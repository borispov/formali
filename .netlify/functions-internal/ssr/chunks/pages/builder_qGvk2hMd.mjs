/* empty css                              */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderSlot, g as renderHead, h as renderComponent } from '../astro_CXacuk56.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/rispov/Developer/formali/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Formali | \u05D8\u05E4\u05E1\u05D9\u05DD \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD", topbar, unpoly, transition } = Astro2.props;
  return renderTemplate(_b || (_b = __template(['<html lang="en" dir="rtl"> <head><meta charset="UTF-8">', '<meta name="description" content="\u05D1\u05DE\u05E6\u05E2\u05D5\u05EA \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA formali \u05E0\u05D9\u05EA\u05DF \u05DC\u05D9\u05E6\u05D5\u05E8 \u05D8\u05E4\u05E1\u05D9\u05DD \u05D0\u05D8\u05E8\u05E7\u05D8\u05D9\u05D1\u05D9\u05D9\u05DD \u05D5\u05E7\u05DC\u05D9\u05DD \u05DC\u05DE\u05D9\u05DC\u05D5\u05D9 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05E7\u05D4\u05DC\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.png"><meta name="generator"', '><!-- TOASTIFY --><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"><!-- GOOG --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@400;700&family=Road+Rage&display=swap" rel="stylesheet"><!-- Google Tag Manager --><!-- End Google Tag Manager --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Suez+One&display=swap" rel="stylesheet"><script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"><\/script>', "<title>", "</title>", '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ND28Q7MD" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', " ", ' <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"><\/script> </body> </html>'])), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(Astro2.generator, "content"), unpoly !== false && renderTemplate(_a || (_a = __template(['<script src="https://cdn.jsdelivr.net/npm/unpoly@3.7.3/unpoly.min.js"><\/script>\n			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/unpoly@3.7.3/unpoly.min.css">\n			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/unpoly@3.7.3/unpoly-bootstrap5.min.css">']))), title, renderHead(), topbar && renderTemplate`<div dir="rtl" class="sticky hidden inset-0 text-sm shadow-md z-50 py-4 text-center md:text-start bg-gradient-to-r from-pink-hot to-purple-new text-white"> <div class="max-w-6xl mx-auto"> <p class="font-[Miriam Libre] tracking-[1.2px] font-bold prose mx-auto px-10 md:px-20">
🚀
				מערכת <span class="font-semibold italic underline underline-offset-4">${`</ formali>`}</span> נמצאת בשלבי פיתוח. הפידבק שלכם חשוב לנו!
</p> </div> </div>`, renderSlot($$result, $$slots["default"]));
}, "/Users/rispov/Developer/formali/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Builder = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Builder;
  let formId = Astro2.url.searchParams.get("form");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "builder" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Builder", null, { "formId": formId, "formData": null, "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "$components/SvelteForm/Builder.svelte", "client:component-export": "default" })} ` })}`;
}, "/Users/rispov/Developer/formali/src/pages/builder.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/builder.astro";
const $$url = "/builder";

const builder = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Builder,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, builder as b };
