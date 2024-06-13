import { setContext, getContext } from "svelte";

export function setFormDesign( formDesignObject ) {
  const storedObject = $state(formDesignObject)
  setContext("theme", storedObject)
}

export function getFormDesign() {
  return getContext("theme")
}
