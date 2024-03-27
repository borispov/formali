/* empty css                            */
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_D5rWRlKh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Builder = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Builder;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> <nav class="flex"> <li><a>דף</a></li> <li><a>עיצוב</a></li> <li><a>הגדרות</a></li> </nav> <div class="container flex"> <aside class="max-w-3xl bg-neutral-200 max-h-screen"> <div class="px-4 py-2"> <label for="txt-1">
כותרת
</label> <input class="input w-32 rounded-sm p-2" name="txt-1" id="txt-1" type="text"> </div> </aside> <main id="main">
Everything will go inside here.
      Svelte Component Probably
</main> <div class="second-panel max-w-3xl bg-neutral-200 max-h-screen">
לוח בקרה מס 2
</div> </div> </div>`;
}, "/Users/rispov/Developer/formali/src/pages/builder.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/builder.astro";
const $$url = "/builder";

export { $$Builder as default, $$file as file, $$url as url };
