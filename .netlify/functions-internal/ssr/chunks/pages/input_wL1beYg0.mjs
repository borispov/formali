/* empty css                          */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, l as defineScriptVars, e as addAttribute, m as maybeRenderHead } from '../astro_DLZz2DHT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const partial = true;
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Input;
  const { field } = Astro2.props;
  const { error, question, description, type, placeholder, required } = field;
  return renderTemplate(_a || (_a = __template(["", '<fieldset hx-swap="none" x-data="data" hx-target="this" data-astro-cid-4uarwzcw> <label class="text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal" data-astro-cid-4uarwzcw> ', ' <sup x-show="field.required" class="text-red-600" data-astro-cid-4uarwzcw> * </sup> </label> <template x-if="field.description" data-astro-cid-4uarwzcw> <p x-text="field.description" class="text-lg font-normal leading-relaxed text-neutral-600" data-astro-cid-4uarwzcw></p> </template> <input', "", ' hx-post="/form" :type="field.type" :placeholder="field.placeholder"', "", ' data-astro-cid-4uarwzcw> <div id="input-error" class="error hidden mt-2 p-1 text-red-600 bg-yellow-200" data-astro-cid-4uarwzcw></div> </fieldset>  <script>(function(){', "\n  console.log(field)\n  document.addEventListener('alpine:init', () => {\n    Alpine.data('data', () => ({\n      field: field,\n    }))\n  })\n})();<\/script>"])), maybeRenderHead(), question, addAttribute(field.id, "name"), addAttribute(field.id, "id"), addAttribute(required, "required"), addAttribute(`
    [ question-input__text transition-all bg-transparent text-gray-800 ]
    [ border-b-2 border-b-neutral-600 mt-8 pb-2 ] 
    [ placeholder:italic placeholder:text-neutral-500 placeholder:text-xl lg:placeholder:text-3xl focus:border-b-neutral-100 outline-0 ]`, "class"), defineScriptVars({ field }));
}, "/Users/rispov/Developer/formali/src/pages/partials/input.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/partials/input.astro";
const $$url = "/partials/input";

export { $$Input as default, $$file as file, partial, $$url as url };
