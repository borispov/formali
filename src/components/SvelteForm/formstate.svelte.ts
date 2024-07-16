import type { FormDesign } from "$src/types";
import type { Form, FormStep } from "./store.svelte";

import { setDesignStore } from "$lib/store/design";

export interface FormStateProps {
  formSteps: FormStep[];
  store?: any;
  currentStep: number;
  errorMsg: string;
  isError: boolean;
  currentValue: string | number;
  form: Form;
  design: FormDesign;
  decStep: () => void;
  incStep: () => void;
  resetError: () => void;
  setError: () => void;
  addStep: (step: FormStep) => void;
  addWelcomeStep: (step: FormStep) => void;
  addEnding: (ending: FormStep) => void;
  isLastStep: () => boolean;
  editDesignSetting: (field: string, val: string) => void;
}

export class FormState implements FormStateProps {
  form = $state() as Form;
  currentStep = $state(0);
  errorMsg = $state("");
  isError = $state(false);
  currentValue = $derived(this.getCurrentValue());
  design = $derived(this.getDesignObject());

  constructor(form: Form) {
    this.form = {
      ...form,
      formSteps: form.formSteps.map(this.mapStepsWithId),
      endings: form?.endings?.map(this.mapStepsWithId) || [], // Old forms did not include endings[] prop, so add it on construction when entering a Builder/Form component
      welcomeSteps: form?.welcomeSteps?.map(this.mapStepsWithId) || [],
    };
    setDesignStore(this.form.design);
  }

  get welcomeSteps() { return this.form.welcomeSteps }
  set welcomeSteps(v) { this.form.welcomeSteps = v }

  get endings() { return this.form.endings }
  set endings(v) { this.form.endings = v }

  get formSteps() {
    return this.form.formSteps;
  }
  set formSteps(v: FormStep[]) {
    this.form.formSteps = v;
  }

  get id() {
    return this.form.id;
  }
  get name() {
    return this.form.name;
  }

  set name(v) {
    this.form.name = v
  }

  private getCurrentValue() {
    return this.form.formSteps[this.currentStep].value;
  }

  public getDesignObject() {
    return this.form.design;
  }

  private mapStepsWithId(block: FormStep, i: number) {
    return {
      ...block,
      id: block.type + "-" + i,
    };
  }

  setTheme(newTheme: FormDesign) {
    this.form = {
      ...this.form,
      design: newTheme,
    };
    setDesignStore(this.form.design);
    console.log(this.form.design.answer);
  }

  // maybe save the old val? for undo changes...
  editDesignSetting(designField: string, val: string) {
    this.form.design[designField] = val;
  }

  resetError() {
    this.isError = false;
    this.errorMsg = "";
  }

  decStep() {
    this.currentStep -= 1;
  }

  incStep() {
    this.currentStep += 1;
  }

  isLastStep() {
    const len = this.formSteps.length;

    console.log(`we are in step ${this.currentStep + 1} out of ${len}`);

    return this.currentStep === len - 1;
  }

  setError(b: boolean, msg: string) {
    this.isError = b;
    this.errorMsg = msg;
    $inspect(this.currentStep, this.isError, this.errorMsg);
  }

  addStep(step: FormStep) {
    this.form.formSteps.push(step);
  }

  addWelcomeStep(step: FormStep) {
    this.form.welcomeSteps.push(step);
  }

  addEnding(ending: FormStep) {
    this.form.endings.push(ending);
  }

}

export default function createFormState(formData: Form) {
  let currentStep = $state(0);
  let currentValue = $state("");
  let isError = $state(false);
  let errorMsg = $state("");

  const mapStepsWithId = (block: FormStep, i: number) => ({
    ...block,
    id: block.type + "-" + i,
  });

  let form = $state<Form>({
    ...formData,
    formSteps: formData.formSteps.map(mapStepsWithId),
  });

  return {
    resetError: () => {
      isError = false;
      errorMsg = "";
    },

    decStep: () => {
      currentStep -= 1;
    },

    incStep: () => {
      currentStep += 1;
    },

    get design() {
      return form.design;
    },
    get formSteps() {
      return form.formSteps;
    },
    get form() {
      return form;
    },
    get currentStep() {
      return currentStep;
    },
    get isError() {
      return isError;
    },
    get errorMsg() {
      return errorMsg;
    },
    get value() {
      return currentValue;
    },

    set formSteps(val) {
      form.formSteps = val;
    },
    set currentStep(val) {
      currentStep = val;
    },
    set isError(val) {
      isError = val;
    },
    set errorMsg(val) {
      errorMsg = val;
    },
    setError: (b: boolean, msg: string) => {
      console.log(`(${b}, ${msg})`);
      isError = b;
      errorMsg = msg;
      console.log(`(${currentStep}, ${isError}, ${errorMsg})`);
    },

    addStep: (step: FormStep) => {
      form.formSteps.push(step);
    },
  };
}
