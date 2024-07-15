import { defineConfig } from 'astro/config';

import unocss from 'unocss/astro'
import { presetUno } from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';
import { presetDaisy } from '@unscatty/unocss-preset-daisy'
import presetMini from '@unocss/preset-mini';
import presetIcons from '@unocss/preset-icons';

// import UnoCSS from 'unocss/astro';
import svelte from "@astrojs/svelte";
import alpine from '@astrojs/alpinejs';
import netlify from "@astrojs/netlify";


// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: "server",
  base: "/",
  integrations: [
    unocss({
      presets: [
        presetUno(), 
        presetDaisy(),
        presetMini(), 
        presetIcons(), 
        presetForms(),
      ],
      injectReset: true
    }), 
    svelte(), alpine()]
});