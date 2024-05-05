import type { FormDesign } from "$lib/types";
import type { Form, FormStep } from "./store.svelte"

export interface FormStateProps {
  formSteps: FormStep[];
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
  addStep: () => void;
}

export class FormState implements FormStateProps {
  form = $state() as Form;
  currentStep = $state(0);
  errorMsg = $state('');
  isError = $state(false);
  currentValue = $derived(this.getCurrentValue());
  design = $derived(this.getDesignObject());

  constructor(form: Form){
    this.form = {
      ...form,
      formSteps: form.formSteps.map(this.mapStepsWithId)
    };
  }

  get formSteps() { return this.form.formSteps }
  set formSteps(v: FormStep[]) {
    this.form.formSteps = v
  }

  private getCurrentValue() {
    return this.form.formSteps[this.currentStep].value
  }

  public getDesignObject() {
    return this.form.design
  }

  private mapStepsWithId(block:FormStep, i:number) {
    return {
      ...block,
      id: block.type + '-' + i,
    }
  }

  resetError() {
    this.isError = false;
    this.errorMsg = "";
  }

  decStep() {
    this.currentStep -= 1
  }

  incStep() {
    this.currentStep += 1
  }

  setError(b: boolean, msg: string) {
    this.isError = b;
    this.errorMsg = msg;
    $inspect(this.currentStep, this.isError, this.errorMsg)
  }

  addStep(step: FormStep) {
    this.form.formSteps.push(step)
  }


}


export default function createFormState(formData: Form) {
  let currentStep = $state(0)
  let currentValue = $state('')
  let isError = $state(false)
  let errorMsg = $state('')

  const mapStepsWithId = (block:FormStep, i:number) => ({
    ...block,
    id: block.type + '-' + i,
  })

  let form = $state<Form>({
    ...formData,
    formSteps: formData.formSteps.map(mapStepsWithId)
  });

  return {
    resetError: () => {
      isError = false;
      errorMsg = "";
    },

    decStep: () => {
      currentStep -= 1
    },

    incStep: () => {
      currentStep += 1
    },

    get design() { return form.design },
    get formSteps() { return form.formSteps},
    get form() { return form},
    get currentStep() { return currentStep},
    get isError() { return isError},
    get errorMsg() { return errorMsg},
    get value() { return currentValue},

    set formSteps(val) { form.formSteps = val},
    set currentStep(val) { currentStep = val },
    set isError(val) { isError = val },
    set errorMsg(val) { errorMsg = val },
    setError: (b: boolean, msg: string) => {
      console.log(`(${b}, ${msg})`)
      isError = b;
      errorMsg = msg;
      console.log(`(${currentStep}, ${isError}, ${errorMsg})`)
    },

    addStep: (step: FormStep) => {
      form.formSteps.push(step)
    },

  }
}

