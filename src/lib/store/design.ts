import { computed } from "nanostores";

import { atom } from "nanostores";

import { formStore } from "./form";

export const designStore2 = atom({});

export const setDesignStore = (d) => {
  designStore2.set(d);
};

export const designStore = computed(formStore, (form) => {
  if (form && form["getDesignObject"]) {
    return form.getDesignObject();
  } else {
    return "";
  }
});
