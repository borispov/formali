import { atom } from "nanostores";

import type { Form } from "$components/SvelteForm/store.svelte";

export const formStore = atom<Form | {}>({})

export function setForm(form: Form){
  formStore.set(form)
}