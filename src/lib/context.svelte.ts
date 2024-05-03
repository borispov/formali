import { setContext, getContext } from "svelte";

import { type FormDesign } from "$lib/components/SvelteForm/store.svelte";

export function setFormDesign( formDesignObject: FormDesign ) {
  setContext("theme", formDesignObject)
}

export function getFormDesign() {
  return getContext<FormDesign>("theme")
}
