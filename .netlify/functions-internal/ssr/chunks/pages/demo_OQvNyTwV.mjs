/* empty css                          */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_DLZz2DHT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './builder_BTNHgNh4.mjs';

const $$Astro = createAstro();
const $$Demo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Demo;
  const title = "Formali Demo";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Form", null, { "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "/Users/rispov/Developer/formali/src/components/SvelteForm/Form.svelte", "client:component-export": "default" })} ` })}`;
}, "/Users/rispov/Developer/formali/src/pages/demo.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/demo.astro";
const $$url = "/demo";

export { $$Demo as default, $$file as file, $$url as url };
