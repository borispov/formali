/* empty css                              */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, n as defineScriptVars, m as maybeRenderHead } from '../astro_CXacuk56.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const partial = true;
const $$Select = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Select;
  const { field } = Astro2.props;
  const { error, question, description, type, placeholder, required, options } = field;
  return renderTemplate(_a || (_a = __template(["", '<fieldset> <div x-text="field.question" class="text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal"> ', ` <sup x-show="{field.required}" class="text-red-600"> * </sup> </div> <p x-text="field.description" class="text-lg font-normal leading-relaxed text-neutral-600"></p> <div x-data="{ checked: ''}" class="flex flex-col gap-2"> <template class="mt-6" x-for="option in field.options"> <div class="mt-6 inline-block"> <label x-data="{
          isChecked: false,
          value: option,
          id: $id('input'),
          init() {
            console.log('initialized')
            this.$watch('checked', v => {
              console.log('checked', v);
              this.isChecked = v === this.value
            })
          }
        }" :for="id" class="relative flex cursor-pointer rounded-lg border bg-white p-2 shadow-sm focus:outline-none border-indigo-200 ring-2 border-transparent transition duration-75 ease-in-out" x-transition :class="isChecked ? 'border-neutral-600 ring-indigo-500' : ''"> <input x-model="checked" :text="option" :id="id" :name="id" required="field.required" type="radio" class="sr-only" @click="checked = option"> <span class="flex flex-1" x-text="option"></span> <svg :class="isChecked ? '' : 'invisible'" class="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </label> </div> </template> <div class="error hidden"></div> </div> <button type="submit" hx-post="/form">
\u05D4\u05DE\u05E9\u05DA
</button> </fieldset> <script>(function(){`, "\n  document.addEventListener('alpine:init', () => {\n    Alpine.data('data', () => ({\n      form: field,\n    }))\n  })\n})();<\/script>"])), maybeRenderHead(), question, defineScriptVars({ field }));
}, "/Users/rispov/Developer/formali/src/pages/partials/select.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/partials/select.astro";
const $$url = "/partials/select";

export { $$Select as default, $$file as file, partial, $$url as url };
