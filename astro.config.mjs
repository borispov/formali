import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import presetIcons from '@unocss/preset-icons';
import { presetUno } from 'unocss';
import svelte from "@astrojs/svelte";
import { presetForms } from '@julr/unocss-preset-forms';
import presetMini from '@unocss/preset-mini';
import alpine from '@astrojs/alpinejs';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: "server",
  base: "/",
  integrations: [UnoCSS({
    presets: [presetUno(), presetMini(), presetIcons(), presetForms()],
    injectReset: true
  }), svelte(), alpine()]
});