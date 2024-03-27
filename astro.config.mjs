import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { presetUno } from 'unocss';
import svelte from "@astrojs/svelte";
import alpine from '@astrojs/alpinejs'

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: "server",
  base: "/",
  integrations: [
    UnoCSS({
      presets: [presetUno()],
      injectReset: true
    }), 
    svelte(),
    alpine(),
  ],
});