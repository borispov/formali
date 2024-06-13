import { computed } from "nanostores";

import { atom } from "nanostores";

import { formStore } from "./form";

export const designStore2 = atom({})

export const setDesignStore = (d) => {
  console.log('new state object: ', d)
  designStore2.set(d)
}

export const designStore = computed(formStore, form => {
  console.log("WE ARE COMPUTING....")
  if ( form && form['getDesignObject']) {
    return form.getDesignObject()
  } else {
    return ''
  }
})