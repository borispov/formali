<script lang="ts">
  import { onMount, setContext } from "svelte";
  import { fade } from "svelte/transition";

  import type { FormStep } from "./store.svelte";
  import { sampleFormData } from "$lib/lib/dummyData.ts";

  import ErrorNotif from "./ErrorNotif.svelte";
  import { FormState } from "./formstate.svelte.ts";
  import Select from "./Select.svelte";
  import NextButton from "./NextButton.svelte";
  import Phone from "./Phone.svelte";
  import Signature from "./Field/Signature.svelte";
  import Rating from "./Rating.svelte";
  import { emailValidation } from "$lib/utils/validators.ts";
  import FieldLabel from "./FieldLabel.svelte";
  import FieldDescription from "./FieldDescription.svelte";

  let form = $state() as FormState;

  onMount(async () => {
    const jsonPreviewFormData = localStorage.getItem("latest_form");

    if (jsonPreviewFormData) {
      var tmp: any = JSON.parse(jsonPreviewFormData);

      if (form) {
        form = new FormState(tmp);
        console.log("we r here");
      } else {
        form = new FormState(sampleFormData);
      }
    }
    setContext("theme", form.getDesignObject());
  });

  // make svelte stop complaining for mutating the form state from within the components
  function setVal(fs: FormStep, v: string|number) {
    fs.value = v
    console.log('setting form type of ', fs.type, ' to: ', v)
  }

  function prevStep() {
    form.currentStep > 0 && form.currentStep--;
  }

  // Can pass the whole function to the class Component
  // Need to get rid of DOM dependency in email validation...
  function nextStep() {
    console.log(form);

    const currentBlock = form.formSteps[form.currentStep];
    const currentBlockType = currentBlock.type;

    switch (true) {
      case currentBlockType === "text":
        currentBlock.required && currentBlock.value.length < 1
          ? form.setError(true, `שדה חובה`)
          : form.incStep();
        break;
      case currentBlockType === "signature":
        currentBlock.required && currentBlock.value.length < 1
          ? form.setError(true, `שדה חובה`)
          : form.incStep();
        break;
      case currentBlockType === "email":
        let stepWrapper = document.querySelector(
          `[data-step-index="${form.currentStep}"] input`,
        ) as HTMLInputElement;
        if (stepWrapper && emailValidation(stepWrapper)) {
          form.resetError();
          form.currentStep < form.formSteps.length - 1 && form.incStep();
        } else {
          form.setError(true, "הזינו כתובת מייל תקנית");
        }
      case currentBlockType === "tel":
        currentBlock.isValid &&
          form.currentStep < form.formSteps.length - 1 &&
          form.incStep();
        break;
      default:
        form.currentStep < form.formSteps.length - 1 && form.incStep();
        break;
    }
  }

  function onSubmit(e) {
    e?.preventDefault();
    const f = form.formSteps
    console.log(f)
  }
</script>

{#if form}
  <div
    style={form?.design &&
      `
      --theme-question: ${form.design.colors.question};
      --theme-answer: ${form.design.colors.answer};
      --theme-background: ${form.design.colors.backgroundColor};
      --theme-button: ${form.design.colors.button};
      --theme-button-text: ${form.design.colors.buttonText};
    `}
    id="full-screen"
    class="relative max-h-screen overflow-y-scroll snap snap-y snap-mandatory"
  >
    <form dir="rtl" onsubmit={onSubmit}>
      <!-- Introduction Note -->
      {#each form.formSteps as field, stepIndex}
        {#if form.currentStep === stepIndex}
          <section
            id="form-page"
            in:fade
            class={`flex flex-col items-center justify-center h-lvh snap-start bg-orange-100}`}
          >
            <div class="w-screen max-w-2xl px-10">
              {#if field.type === "descriptor"}
                <div class="flex flex-col gap-8 items-center text-center">
                  <h2 class="text-60px max-w-xl font-bold leading-tight">
                    {field.question}
                  </h2>
                  <p>
                    {@html field.description}
                  </p>
                  {#if form.currentStep == form.formSteps.length - 1}
                    <a
                      href="/thanks"
                      class="w-36 bg-purple-700 font-bold px-6 py-2 rounded-lg text-white"
                    >
                      {field.buttonText}
                    </a>
                  {/if}
                  {#if form.currentStep < form.formSteps.length - 1}
                    <button
                      onclick={nextStep}
                      class="w-36 bg-purple-700 font-bold px-6 py-2 rounded-lg text-white"
                    >
                      {field.buttonText}
                    </button>
                  {/if}
                </div>
              {/if}
              {#if field.type === "text" || field.type === "email"}
                <div data-step={field.type} data-step-index={stepIndex}>
                  <FieldLabel {...field}>
                    {field.question}
                  </FieldLabel>

                  {#if field.description}
                    <FieldDescription>
                      {@html field.description}
                    </FieldDescription>
                  {/if}

                  <input
                    bind:value={field.value}
                    name={field.id}
                    id={field.id}
                    type={field.type}
                    onkeydown={(e) => e.key == "Enter" && nextStep()}
                    placeholder={field.placeholder}
                    required={field.required}
                    class={`
                      [ w-full text-lg md:text-base mt-8 pb-2 transition-all bg-transparent ] 
                      [ placeholder:italic placeholder:text-neutral-500 placeholder:text-xl lg:placeholder:text-3xl ]
                      [ border-0 border-b-2 border-neutral-600 ]
                      [ outline-none focus:outline-none text-gray-800 focus:border-0 focus:ring-none focus:border-b-2 !focus:border-blue-700 ] 
                    `}
                  />
                  {#if form.isError}
                    <ErrorNotif msg={form.errorMsg} />
                  {/if}
                </div>
              {/if}
              {#if field.type === "select"}
                <Select {field} setVal={setVal} />
              {/if}
              {#if field.type === "signature"}
                <Signature {field} />
                {#if form.isError}
                  <ErrorNotif msg={form.errorMsg} />
                {/if}
              {/if}
              {#if field.type === "rating"}
                <Rating {field} rating={field.rating} />
                {#if form.isError}
                  <ErrorNotif msg={form.errorMsg} />
                {/if}
              {/if}
              {#if field.type === "tel"}
                <Phone handler={nextStep} {field} {stepIndex} />
              {/if}
              {#if field.type !== "descriptor"}
                <div class="mt-8 inline-block">
                  <NextButton
                    showPressEnter={true}
                    center={true}
                    handler={nextStep}
                    text="המשך"
                  />
                </div>
              {/if}
            </div>
          </section>
        {/if}
      {/each}}
      <!-- Up and Down button-arrows -->
      <div
        class="absolute sticky flex gap-4 bottom-[5%] right-[5%] w-60 p-4 rounded-md"
      >
        <button onclick={nextStep} class="bg-teal-600 py-2 px-2 rounded">
          <span class="i-mdi-arrow-down bg-white text-xl z-10 block"></span>
        </button>
        <button onclick={prevStep} class="bg-teal-600 py-2 px-2 rounded">
          <span class="i-mdi-arrow-up bg-white text-xl z-10 block"></span>
        </button>
      </div>
    </form>
  </div>
{/if}

<style>
  :global(html) {
    --theme-question-color: var(--theme-question-color);
    --theme-answer-color: var(--theme-answer-color);
  }

  :global(label[data-el="question"], p[data-el="description"]) {
    color: var(--theme-question);
  }

  :global(#form-page) {
    background: var(--theme-background);
  }

  :global(button[data-el="step-cta"]) {
    background: var(--theme-button);
    color: var(--theme-button-text);
  }
</style>