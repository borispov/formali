import 'esm-env';
/* empty css                              */
/* empty css                              */
/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_CXacuk56.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './builder_qGvk2hMd.mjs';

const HYDRATION_START = '[';
const HYDRATION_END = ']';

/** @type {import('#server').Component | null} */
var current_component = null;

function push() {
	current_component = { p: current_component, c: null, d: null };
}

function pop() {
	var component = /** @type {import('#server').Component} */ (current_component);

	var ondestroy = component.d;

	if (ondestroy) {
		on_destroy.push(...ondestroy);
	}

	current_component = component.p;
}

const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;

const snippet_symbol = Symbol.for('svelte.snippet');

/**
 * @param {any} fn
 */
function add_snippet_symbol(fn) {
	fn[snippet_symbol] = true;
	return fn;
}

/** @returns {Payload} */
function create_payload() {
	return { out: '', head: { title: '', out: '', anchor: 0 }, anchor: 0 };
}

/**
 * Array of `onDestroy` callbacks that should be called at the end of the server render function
 * @type {Function[]}
 */
let on_destroy = [];

/**
 * @param {typeof import('svelte').SvelteComponent} component
 * @param {{ props: Record<string, any>; context?: Map<any, any> }} options
 * @returns {RenderOutput}
 */
function render(component, options) {
	const payload = create_payload();

	const prev_on_destroy = on_destroy;
	on_destroy = [];
	payload.out += BLOCK_OPEN;

	if (options.context) {
		push();
		/** @type {import('#server').Component} */ (current_component).c = options.context;
	}

	// @ts-expect-error
	component(payload, options.props, {}, {});

	if (options.context) {
		pop();
	}

	payload.out += BLOCK_CLOSE;
	for (const cleanup of on_destroy) cleanup();
	on_destroy = prev_on_destroy;

	return {
		head: payload.head.out || payload.head.title ? payload.head.out + payload.head.title : '',
		html: payload.out
	};
}

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderTemplate`${renderComponent($$result2, "Dash", null, { "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "$components/Dashboard/Dash.svelte", "client:component-export": "default" })}` }` })}`;
}, "/Users/rispov/Developer/formali/src/pages/dashboard.astro", void 0);

const $$file = "/Users/rispov/Developer/formali/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dashboard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { pop as a, add_snippet_symbol as b, dashboard as d, push as p, render as r };
