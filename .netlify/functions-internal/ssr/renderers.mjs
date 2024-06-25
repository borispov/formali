import { b as add_snippet_symbol, r as render } from './chunks/pages/dashboard_BD4s8nkm.mjs';

const tagSlotAsSnippet = process.env.DEV ? add_snippet_symbol : (s) => s;
function check(Component) {
  const str = Component.toString();
  return str.includes("$$payload") && str.includes("$$props");
}
function needsHydration(metadata) {
  return metadata.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup(Component, props, slotted, metadata) {
  const tagName = needsHydration(metadata) ? "astro-slot" : "astro-static-slot";
  let children = void 0;
  let $$slots = void 0;
  for (const [key, value] of Object.entries(slotted)) {
    if (key === "default") {
      children = tagSlotAsSnippet(() => `<${tagName}>${value}</${tagName}>`);
    } else {
      $$slots ??= {};
      $$slots[key] = tagSlotAsSnippet(() => `<${tagName} name="${key}">${value}</${tagName}>`);
    }
  }
  const { html } = render(Component, {
    props: {
      ...props,
      children,
      $$slots
    }
  });
  return { html };
}
const _renderer0 = {
  check,
  renderToStaticMarkup,
  supportsAstroStaticSlot: true
};

const renderers = [Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client-v5.js","serverEntrypoint":"@astrojs/svelte/server-v5.js"}, { ssr: _renderer0 }),];

export { renderers };
