/* empty css                              */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_CXacuk56.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$FormBtnContainer } from './test_D119iRmw.mjs';
/* empty css                               */

const $$Astro = createAstro();
const $$TextInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextInput;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-o7jbdonm> <label x-text="field.question" class="text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal" data-astro-cid-o7jbdonm> <sup x-show="{field.required}" class="text-red-600" data-astro-cid-o7jbdonm> * </sup> </label> <p x-text="field.description" class="text-lg font-normal leading-relaxed text-neutral-600" data-astro-cid-o7jbdonm></p> <input :id="$id('input')" :name="$id('input')" :type="field.type" @keyup="handleErr" @submit.prevent="" :placeholder="field.placeholder" :required="field.required"${addAttribute(`transition-all bg-transparent border-b-2 border-b-neutral-600 text-gray-800 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 placeholder:text-xl lg:placeholder:text-3xl focus:border-b-neutral-100 outline-0`, "class")} data-astro-cid-o7jbdonm> <div x-data="{
       id: $id('input'),
       show: false,
       defaultMessage: 'שדה זה הינו חובה למילוי',
       handleErr(e){ 
         if (e && e.target && e.target.value.length == 0) {
            this.show = true
         }
         if (e && e.detail && e.detail.id && e.detail.id === this.id){
          this.show = true
         }
       }
     }" x-show="show" data-astro-cid-o7jbdonm> <span x-text="defaultMessage" class="block mt-2 p-1 text-red-600 bg-yellow-200" data-astro-cid-o7jbdonm></span> </div> ${renderComponent($$result, "FormBtnContainer", $$FormBtnContainer, { "text": "\u05D4\u05DE\u05E9\u05DA", "data-astro-cid-o7jbdonm": true })} </div> `;
}, "/Users/rispov/Developer/formali/src/pages/api/form/text-input.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/api/form/text-input.astro";
const $$url = "/api/form/text-input";

export { $$TextInput as default, $$file as file, $$url as url };
