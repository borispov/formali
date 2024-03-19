import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { presetUno } from 'unocss';
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [UnoCSS({
    presets: [presetUno()],
    injectReset: true
  }), svelte()],
  adapter: netlify()
});