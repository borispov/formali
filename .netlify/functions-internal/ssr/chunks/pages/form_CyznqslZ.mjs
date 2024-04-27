/* empty css                          */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DLZz2DHT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './builder_BTNHgNh4.mjs';
import $$Input from './input_wL1beYg0.mjs';
import $$Select from './select_CGnuXnzp.mjs';
import './feedback_Ds3165pf.mjs';
import * as z from 'zod';

const defaultDesign = {
  bg: "#543636",
  textColor: "#e80e0e",
  btnBg: "#0445af",
  btnTextColor: "#fff"
};
const formData = {
  id: "",
  name: "formTest",
  formSteps: [
    {
      id: "text-adc02",
      question: "אנא ציינו את כתובת הדוא״ל שלכם",
      type: "email",
      value: "",
      required: true,
      description: "זוהי שורת תיאור",
      placeholder: "tenCEO@gmail.com",
      design: {
        ...defaultDesign
      }
    },
    {
      id: "select-adc001",
      question: "מה משקף את עיסוקכם הכי טוב",
      type: "select",
      value: "",
      required: true,
      description: "",
      placeholder: "",
      options: [
        "שיווק ופרסום דיגיטלי",
        "ייעוץ",
        "פרילאנסר בתחום ה web"
      ],
      design: {
        ...defaultDesign
      }
    },
    {
      id: "text-adc03",
      question: "מה שמכם הפרטי?",
      type: "text",
      value: "",
      required: true,
      description: "שם מלא",
      placeholder: "בוריס פובולוצקי",
      design: {
        ...defaultDesign
      }
    },
    {
      id: "text-adc04",
      question: "Favorite Band",
      type: "text",
      value: "",
      required: false,
      description: "",
      placeholder: "Led Zeppelinkkkkkkkkkkkk",
      design: {
        ...defaultDesign
      }
    }
  ]
};

const $$Astro = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Form;
  const emailSchema = z.string().email();
  let currenStep = 0;
  let formStep = formData.formSteps[currenStep];
  if (Astro2.request.method === "POST") {
    const fd = await Astro2.request.formData();
    const inputFieldName = Astro2.request.headers.get("hx-trigger");
    const email = fd.get(inputFieldName);
    try {
      emailSchema.parse(email);
      currenStep++;
    } catch (err) {
      currenStep++;
      console.log(err.message);
      const errorMsg = encodeURI("\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4, \u05D0\u05E0\u05D0 \u05EA\u05E7\u05E0\u05D5 \u05D5\u05E0\u05E1\u05D5 \u05E9\u05E0\u05D9\u05EA.");
      return Astro2.redirect(`/api/form/error-msg?msg=${errorMsg}`, 302);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "builder" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="full-screen" class="relative max-h-screen overflow-y-scroll snap snap-y snap-mandatory"> <form action="/form" dir="rtl" method="POST" hx-target="this" hx-trigger="submit"> <section class="flex items-center justify-center h-lvh snap-start w-full p-16 border-box bg-orange-100 text-center"> ${(formStep.type === "text" || formStep.type === "email") && renderTemplate`${renderComponent($$result2, "Input", $$Input, { "field": formStep })}` || formStep.type === "select" && renderTemplate`${renderComponent($$result2, "SelectInput", $$Select, { "field": formStep })}`} <button type="submit" hx-post="/form">
המשך
</button> </section> </form> </div> ` })}`;
}, "/Users/rispov/Developer/formali/src/pages/form.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/form.astro";
const $$url = "/form";

export { $$Form as default, $$file as file, $$url as url };
