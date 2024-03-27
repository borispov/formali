import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D_snXoMN.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BS8gPwXh.mjs');
const _page1 = () => import('./chunks/sign-up_C271MeZR.mjs');
const _page2 = () => import('./chunks/builder_Ck6BjWhg.mjs');
const _page3 = () => import('./chunks/info_BuOTC6dH.mjs');
const _page4 = () => import('./chunks/sign-up_DRD-2QxE.mjs');
const _page5 = () => import('./chunks/test_NX4lEUdn.mjs');
const _page6 = () => import('./chunks/thanks_BhoxpIJr.mjs');
const _page7 = () => import('./chunks/index_DmFnlK86.mjs');
const pageMap = new Map([
    ["../../../../opt/homebrew/lib/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/sign-up.ts", _page1],
    ["src/pages/builder.astro", _page2],
    ["src/pages/partials/info.astro", _page3],
    ["src/pages/sign-up.astro", _page4],
    ["src/pages/test.astro", _page5],
    ["src/pages/thanks.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "de63e2ef-89ad-4c1b-a4ea-5c47b2777c94"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
