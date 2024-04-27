import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Czx-HBPY.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_8Br1ik9g.mjs');
const _page1 = () => import('./chunks/block_CZQUfYDN.mjs');
const _page2 = () => import('./chunks/feedback_Jx7AiUda.mjs');
const _page3 = () => import('./chunks/error-msg_CaHJzoZc.mjs');
const _page4 = () => import('./chunks/text_CXp1-x4s.mjs');
const _page5 = () => import('./chunks/text-input_5ESlxtau.mjs');
const _page6 = () => import('./chunks/hello_UE7Uyeq-.mjs');
const _page7 = () => import('./chunks/sign-up_5iH0kL4h.mjs');
const _page8 = () => import('./chunks/builder_DbePmlvP.mjs');
const _page9 = () => import('./chunks/demo_B8Z5EleH.mjs');
const _page10 = () => import('./chunks/form_Dldez4Se.mjs');
const _page11 = () => import('./chunks/info_BtzS_XgS.mjs');
const _page12 = () => import('./chunks/input_DAEPBFl3.mjs');
const _page13 = () => import('./chunks/select_Isw1cXq1.mjs');
const _page14 = () => import('./chunks/sign-up_hGjjosQk.mjs');
const _page15 = () => import('./chunks/test_zoo-hV0j.mjs');
const _page16 = () => import('./chunks/thanks_B85TgNWe.mjs');
const _page17 = () => import('./chunks/index_QLoQkjT2.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/builder/block.astro", _page1],
    ["src/pages/api/feedback.ts", _page2],
    ["src/pages/api/form/error-msg.astro", _page3],
    ["src/pages/api/form/text.astro", _page4],
    ["src/pages/api/form/text-input.astro", _page5],
    ["src/pages/api/hello.ts", _page6],
    ["src/pages/api/sign-up.js", _page7],
    ["src/pages/builder.astro", _page8],
    ["src/pages/demo.astro", _page9],
    ["src/pages/form.astro", _page10],
    ["src/pages/partials/info.astro", _page11],
    ["src/pages/partials/input.astro", _page12],
    ["src/pages/partials/select.astro", _page13],
    ["src/pages/sign-up.astro", _page14],
    ["src/pages/test.astro", _page15],
    ["src/pages/thanks.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "d8753c12-1f0a-4e09-8967-db69dae1ef40"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
