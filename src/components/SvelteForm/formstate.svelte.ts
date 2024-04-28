import type { Form, FormStep } from "./store.svelte"

export default function createFormState(formData: Form) {
  let currentStep = $state(0)
  let currentValue = $state('')
  let isError = $state(false)
  let errorMsg = $state('')

  const mapStepsWithId = (block:FormStep, i:number) => ({
    id: block.type + '-' + i,
    ...block
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

    incStep: () => {
      currentStep += 1
    },

    get form() { return form},
    get formSteps() { return form.formSteps},
    get form() { return form},
    get currentStep() { return currentStep},
    get isError() { return isError},
    get errorMsg() { return errorMsg},

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

