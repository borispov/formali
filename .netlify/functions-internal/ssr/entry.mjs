import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Dsx-jnAt.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./chunks/generic_CH_aQWwM.mjs');
const _page1 = () => import('./chunks/feedback_Ca4G4Jpe.mjs');
const _page2 = () => import('./chunks/error-msg_DHKpGbuh.mjs');
const _page3 = () => import('./chunks/submission_DZQPVXcB.mjs');
const _page4 = () => import('./chunks/text_BzFXQCqR.mjs');
const _page5 = () => import('./chunks/text-input_vpv5F6g6.mjs');
const _page6 = () => import('./chunks/update_DqLObf8a.mjs');
const _page7 = () => import('./chunks/sign-up_5iH0kL4h.mjs');
const _page8 = () => import('./chunks/builder_BD4EEo9A.mjs');
const _page9 = () => import('./chunks/dashboard_C-r5ZddD.mjs');
const _page10 = () => import('./chunks/demo_DHhvgixv.mjs');
const _page11 = () => import('./chunks/form_CeCLWBE4.mjs');
const _page12 = () => import('./chunks/index_DWnAooyo.mjs');
const _page13 = () => import('./chunks/index_DKC6LKfJ.mjs');
const _page14 = () => import('./chunks/create-form_BGCelCWp.mjs');
const _page15 = () => import('./chunks/info_DDoqWgVn.mjs');
const _page16 = () => import('./chunks/input_Br1EB3fW.mjs');
const _page17 = () => import('./chunks/select_UgcVq1Sj.mjs');
const _page18 = () => import('./chunks/sign-up_DWtLReUH.mjs');
const _page19 = () => import('./chunks/test_OGcjCh9l.mjs');
const _page20 = () => import('./chunks/thanks_D47QhDz2.mjs');
const _page21 = () => import('./chunks/index_CEy65Qya.mjs');
const pageMap = new Map([
    ["../../../../opt/homebrew/lib/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/feedback.ts", _page1],
    ["src/pages/api/form/error-msg.astro", _page2],
    ["src/pages/api/form/submission.ts", _page3],
    ["src/pages/api/form/text.astro", _page4],
    ["src/pages/api/form/text-input.astro", _page5],
    ["src/pages/api/form/update.ts", _page6],
    ["src/pages/api/sign-up.js", _page7],
    ["src/pages/builder.astro", _page8],
    ["src/pages/dashboard.astro", _page9],
    ["src/pages/demo.astro", _page10],
    ["src/pages/form.astro", _page11],
    ["src/pages/login/index.astro", _page12],
    ["src/pages/logout/index.astro", _page13],
    ["src/pages/partials/create-form.astro", _page14],
    ["src/pages/partials/info.astro", _page15],
    ["src/pages/partials/input.astro", _page16],
    ["src/pages/partials/select.astro", _page17],
    ["src/pages/sign-up.astro", _page18],
    ["src/pages/test.astro", _page19],
    ["src/pages/thanks.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a0c6a0ed-f42f-4b81-9486-bf9ae26095c2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
