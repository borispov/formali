import 'esm-env';

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
