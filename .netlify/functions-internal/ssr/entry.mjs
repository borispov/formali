import { renderers } from './renderers.mjs';
import { manifest } from './manifest_De_v5e0e.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DHWPgpmU.mjs');
const _page1 = () => import('./chunks/sign-up_C69fmwqJ.mjs');
const _page2 = () => import('./chunks/builder_CJKai6Mh.mjs');
const _page3 = () => import('./chunks/demo_BLnIEqBF.mjs');
const _page4 = () => import('./chunks/info_DuW2pjaA.mjs');
const _page5 = () => import('./chunks/sign-up_CaQF2Gqv.mjs');
const _page6 = () => import('./chunks/test_BEjSbe5B.mjs');
const _page7 = () => import('./chunks/thanks_ClTxdAg6.mjs');
const _page8 = () => import('./chunks/index_B3fblLxp.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/sign-up.ts", _page1],
    ["src/pages/builder.astro", _page2],
    ["src/pages/demo.astro", _page3],
    ["src/pages/partials/info.astro", _page4],
    ["src/pages/sign-up.astro", _page5],
    ["src/pages/test.astro", _page6],
    ["src/pages/thanks.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "8f62722f-e286-466b-b383-44b3aab7cbde"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
