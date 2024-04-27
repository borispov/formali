/* empty css                          */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent, l as defineScriptVars } from '../astro_DLZz2DHT.mjs';
import 'kleur/colors';
import 'html-escaper';
import './feedback_Ds3165pf.mjs';
import { $ as $$Layout } from './builder_BTNHgNh4.mjs';
import 'clsx';
/* empty css                         */
/* empty css                         */
import * as z from 'zod';

const $$Astro$3 = createAstro();
const $$FormBtnContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FormBtnContainer;
  const { text, showPressEnter, className } = Astro2.props;
  const buttonClass = "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500 custom-button-background-color custom-button-text-color";
  return renderTemplate`${maybeRenderHead()}<div class="btn-container" data-astro-cid-umcvuxka> <button @click="nextStep"${addAttribute(buttonClass, "class")} data-astro-cid-umcvuxka> ${text} </button> <span x-data="isMobile = navigator?.userAgent.toLowerCase().includes('mobile') || false" :class="{ 'hidden': true }" data-astro-cid-umcvuxka>
press <strong data-astro-cid-umcvuxka>Enter ↵</strong> </span> </div> `;
}, "/Users/rispov/Developer/formali/src/components/FormBtnContainer.astro", void 0);

const $$Astro$2 = createAstro();
const $$TextInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextInput;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<fieldset hx-swap="none" x-data="{init() {this.$data.currentBlock = field.id }}" data-astro-cid-cqm2yehn> <label x-text="field.question" class="text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal" data-astro-cid-cqm2yehn> <sup x-show="{field.required}" class="text-red-600" data-astro-cid-cqm2yehn> * </sup> </label> <template x-if="field.description" data-astro-cid-cqm2yehn> <p x-text="field.description" class="text-lg font-normal leading-relaxed text-neutral-600" data-astro-cid-cqm2yehn></p> </template> <input hx-post="/test" :id="$id('input')" :name="$id('input')" :type="field.type" :placeholder="field.placeholder" :required="field.required"${addAttribute(`
    [ question-input__text transition-all bg-transparent text-gray-800 ]
    [ border-b-2 border-b-neutral-600 mt-8 pb-2 ] 
    [ placeholder:italic placeholder:text-neutral-500 placeholder:text-xl lg:placeholder:text-3xl focus:border-b-neutral-100 outline-0 ]`, "class")} data-astro-cid-cqm2yehn> <div id="input-error" class="error hidden mt-2 p-1 text-red-600 bg-yellow-200" data-astro-cid-cqm2yehn></div> ${renderComponent($$result, "FormBtnContainer", $$FormBtnContainer, { "text": "\u05D4\u05DE\u05E9\u05DA", "data-astro-cid-cqm2yehn": true })} </fieldset> `;
}, "/Users/rispov/Developer/formali/src/components/alpine/TextInput.astro", void 0);

const $$Astro$1 = createAstro();
const $$Select = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Select;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-tpghliqu> <div x-text="field.question"${addAttribute("text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal " + className, "class")} data-astro-cid-tpghliqu> <sup class="text-red-600" data-astro-cid-tpghliqu> * </sup> </div> <p x-text="field.description" class="text-lg font-normal leading-relaxed text-neutral-600" data-astro-cid-tpghliqu></p> <fieldset x-data="{ checked: ''}" class="flex flex-col gap-2" data-astro-cid-tpghliqu> <template class="mt-6" x-for="option in field.options" data-astro-cid-tpghliqu> <div class="mt-6 inline-block" data-astro-cid-tpghliqu> <label x-data="{
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
        }" :for="id" class="relative flex cursor-pointer rounded-lg border bg-white p-2 shadow-sm focus:outline-none border-indigo-200 ring-2 border-transparent transition duration-75 ease-in-out" x-transition :class="isChecked ? 'border-neutral-600 ring-indigo-500' : ''" data-astro-cid-tpghliqu> <input x-model="checked" :text="option" :id="id" :name="id" required="field.required" type="radio" class="sr-only" @click="checked = option; currentStepValue = option" data-astro-cid-tpghliqu> <span class="flex flex-1" x-text="option" data-astro-cid-tpghliqu></span> <svg :class="isChecked ? '' : 'invisible'" class="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-tpghliqu> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" data-astro-cid-tpghliqu></path> </svg> </label> </div> </template> <div x-data="{
         id: $id('input'),
         show: false,
         defaultMessage: 'שדה זה הינו חובה למילוי',
         handleErr(e){
         if (e && e.detail && e.detail.id && e.detail.id === this.id){
          this.show = true
         }
         }
         }" x-show="show" " data-astro-cid-tpghliqu> <span x-text="defaultMessage" data-astro-cid-tpghliqu></span> </div> </fieldset> ${renderComponent($$result, "FormBtnContainer", $$FormBtnContainer, { "text": "\u05D4\u05DE\u05E9\u05DA", "data-astro-cid-tpghliqu": true })} </div> `;
}, "/Users/rispov/Developer/formali/src/components/alpine/Select.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  const sampleForm = [
    {
      type: "descriptor",
      question: "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD, \u05EA\u05D5\u05D3\u05D4 \u05E2\u05DC \u05D6\u05DE\u05E0\u05DB\u05DD.",
      description: "\u05DE\u05D9\u05DC\u05D5\u05D9 \u05D4\u05D8\u05D5\u05E4\u05E1 \u05D9\u05E7\u05D7 \u05E8\u05E7 5 \u05D3\u05E7\u05D5\u05EA \u05DE\u05D6\u05DE\u05E0\u05DB\u05DD \u05D5\u05D9\u05E2\u05D6\u05D5\u05E8 \u05DC\u05E0\u05D5 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05D1\u05E7\u05D9\u05D3\u05D5\u05DD \u05D5\u05D3\u05D9\u05D5\u05E7 \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E9\u05DC\u05E0\u05D5.",
      buttonText: "\u05D4\u05EA\u05D7\u05DC"
    },
    {
      type: "select",
      question: "\u05EA\u05D7\u05D5\u05DD \u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD",
      required: true,
      options: [
        "\u05E9\u05D9\u05D5\u05D5\u05E7 \u05D5\u05E4\u05E8\u05E1\u05D5\u05DD \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC",
        "\u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA",
        "\u05D9\u05D9\u05E2\u05D5\u05E5 \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05D9\u05DD",
        "\u05D0\u05D7\u05E8"
      ]
    },
    {
      type: "email",
      question: "\u05DC\u05D0\u05D9\u05D6\u05D4 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05EA\u05E8\u05E6\u05D5 \u05E9\u05E0\u05E9\u05DC\u05D7 \u05DC\u05DB\u05DD \u05D4\u05D5\u05D3\u05E2\u05D4?",
      description: "\u05E9\u05D5\u05E8\u05EA \u05EA\u05D9\u05D0\u05D5\u05E8 \u05E0\u05D5\u05E1\u05E4\u05EA, \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05D0\u05D9\u05E8\u05D4 \u05E8\u05D9\u05E7\u05D4.",
      placeholder: "name@example.com",
      required: true
    },
    {
      type: "text",
      question: "\u05E8\u05E9\u05DE\u05D5 \u05D0\u05EA \u05E9\u05DE\u05DB\u05DD \u05D4\u05E4\u05E8\u05D8\u05D9",
      description: "",
      placeholder: "\u05D2\u05D3\u05E2\u05D5\u05DF \u05D1\u05DF \u05D9\u05D5\u05D0\u05E9",
      required: true
    },
    {
      type: "select",
      question: "\u05D0\u05DC\u05D5 \u05DE\u05D1\u05D9\u05DF \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DB\u05D9 \u05EA\u05D5\u05D0\u05DD \u05D0\u05EA\u05DB\u05DD?",
      description: "\u05D1\u05D7\u05E8\u05D5 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D0\u05D7\u05EA \u05D1\u05DC\u05D1\u05D3",
      required: false,
      options: [
        "\u05D7\u05D9\u05E4\u05E9\u05EA\u05D9 \u05D1\u05D5\u05DC \u05DE\u05E2\u05E8\u05DB\u05EA \u05DB\u05D6\u05D5! \u05E4\u05E9\u05D5\u05D8 \u05EA\u05E7\u05D7\u05D5 \u05D0\u05EA \u05D4\u05DB\u05E1\u05E3 \u05E9\u05DC\u05D9.",
        "\u05E0\u05E8\u05D0\u05D4 \u05D7\u05DE\u05D5\u05D3, \u05DC\u05D0 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D9\u05E9 \u05DC\u05D9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DB\u05E8\u05D2\u05E2",
        "\u05E4\u05D7\u05D5\u05EA \u05DE\u05EA\u05D7\u05D1\u05E8 \u05DC\u05D9 \u05DB\u05DC \u05D4\u05E2\u05E0\u05D9\u05D9\u05DF",
        "\u05DC\u05D0!"
      ]
    },
    {
      type: "descriptor",
      question: "\u05D4\u05D2\u05E2\u05EA\u05DD \u05DC\u05E1\u05D5\u05E3 :-)",
      description: "\u05DB\u05E2\u05EA, \u05E0\u05E1\u05D5 \u05DC\u05E9\u05D2\u05E8 \u05D0\u05EA \u05D4\u05D8\u05D5\u05E4\u05E1... \u05E7\u05D3\u05D9\u05DE\u05D4!",
      buttonText: "\u05E9\u05DC\u05D7 \u05D8\u05D5\u05E4\u05E1"
    }
  ];
  const emailSchema = z.string().email();
  if (Astro2.request.method === "POST") {
    const fd = await Astro2.request.formData();
    const inputFieldName = Astro2.request.headers.get("hx-trigger");
    const email = fd.get(inputFieldName);
    try {
      emailSchema.parse(email);
    } catch (err) {
      const errorMsg = encodeURI("\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4, \u05D0\u05E0\u05D0 \u05EA\u05E7\u05E0\u05D5 \u05D5\u05E0\u05E1\u05D5 \u05E9\u05E0\u05D9\u05EA.");
      return Astro2.redirect(`/api/form/error-msg?msg=${errorMsg}`, 302);
    }
  }
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n\n  document.addEventListener('alpine:init', () => {\n\n    let parsedForm = null\n    const jsonPreviewFormData = localStorage.getItem('latest_form')\n    if (jsonPreviewFormData) {\n      parsedForm = JSON.parse(jsonPreviewFormData)\n    } \n\n    Alpine.data('data', () => ({\n      form: parsedForm.formSteps ?? form,\n      currentStep: 0,\n      currentBlock: '',\n      currentStepValue: '',\n\n      getValue() {\n        const block = this.form[this.currentStep]\n        let value \n        switch (true) {\n          case 'select':\n            value = document.getElementsByName('text-' + block.id);\n            break;\n          default:\n            value = document.getElementsByName('text-' + block.id);\n            break;\n        }\n        return value\n      },\n\n      prevStep() {\n       if (this.currentStep > 0) {\n            this.currentStep--;\n        }\n      },\n      nextStep() {\n        // let v = document.getElementsByName(this.currentBlock)\n        // console.log(v)\n        if (this.currentStep < this.form.length - 1) {\n          this.currentStep++\n        }\n      },\n    }))\n  })\n\n})();<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": "demo formali" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="full-screen" class="relative max-h-screen overflow-y-scroll snap snap-y snap-mandatory"> <form x-data="data" dir="rtl" method="POST"> <!-- Introduction Note --> <template x-for="(field, index) in form" :key="index"> <section x-init="this.$data.currentBlock = field.id" x-transition x-show="index == currentStep" class="flex items-center justify-center h-lvh snap-start w-full p-16 border-box bg-orange-100 text-center"> <template x-if="field.type=='descriptor'"> <div class="flex flex-col gap-8 items-center"> <h2 x-text="field.question" class="text-60px max-w-xl font-bold leading-tight"></h2> <p x-text="field.description"></p> <template x-if="currentStep == (form.length - 1)"> <a href="/thanks" x-text="field.buttonText" class="w-36 bg-purple-700 font-bold px-6 py-2 rounded-lg text-white"></a> </template> <template x-if="currentStep < form.length - 1"> <button @click.prevent="nextStep" x-text="field.buttonText" class="w-36 bg-purple-700 font-bold px-6 py-2 rounded-lg text-white"></button> </template> </div> </template> <template x-if="field.type == 'text' || field.type == 'email'"> ${renderComponent($$result2, "TextInput", $$TextInput, {})} </template> <template x-if="field.type == 'select'"> ${renderComponent($$result2, "Select", $$Select, { "className": "transition-all bg-transparent border-b-2 border-b-neutral-600 text-gray-800 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 focus:border-b-neutral-100 outline-0" })} </template> </section> </template> <!-- Thank You Note --> <div class="absolute sticky flex gap-4 bottom-[5%] right-[5%] w-60 p-4 rounded-md"> <button @click.prevent="nextStep" class="bg-teal-600 py-2 px-2"> <span class="i-mdi-arrow-down bg-white text-2xl z-10 block"></span> </button> <button @click.prevent="prevStep" class="bg-teal-600 py-2 px-2"> <span class="i-mdi-arrow-up bg-white text-2xl z-10 block"></span> </button> </div> </form> </div> ` }), defineScriptVars({ form: sampleForm }));
}, "/Users/rispov/Developer/formali/src/pages/test.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/test.astro";
const $$url = "/test";

const test = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormBtnContainer as $, test as t };
