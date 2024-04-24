import type { Form } from "./store.svelte"

export default function createFormState(form: Form) {
  let currentStep = $state(0)
  let value = $state('')
  let isError = $state(false)
  let errorMsg = $state('')

  let formData = $state({
    ...form,
    formSteps: form.formSteps.map((block, blockIndex) => {
      return {
        id: 'input-' + blockIndex,
        ...block,
      }
    })
  });

  return {
    resetError: () => {
      isError = false;
      errorMsg = "";
    },

    incStep: () => {
      currentStep += 1
    },

    get formData() { return formData},
    get currentStep() { return currentStep},
    get isError() { return isError},
    get errorMsg() { return errorMsg},

    set currentStep(val) { currentStep = val },
    set isError(val) { isError = val },
    set errorMsg(val) { errorMsg = val },
    setError: (b: boolean, msg: string) => {
      console.log(`(${b}, ${msg})`)
      isError = b;
      errorMsg = msg;
      console.log(`(${currentStep}, ${isError}, ${errorMsg})`)
    }
  }
}

