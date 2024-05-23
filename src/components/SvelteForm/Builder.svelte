<script lang="ts">
	import PocketBase from 'pocketbase';
  // TODO: verify line 126 HTML injection is SAFE
  import { flip } from "svelte/animate";
  const flipDurationMs = 100;

  // store
  import { FormState } from "./formstate.svelte.ts";
  import type { Form } from "./store.svelte.js";
  import FieldDescription from "./FieldDescription.svelte";
  import FieldLabel from "./FieldLabel.svelte";

  import SingleInput from "../Builder/SingleInput.svelte";
  import DesignConfig from "./Config/DesignConfig.svelte";

  import Descriptor from "./Field/Descriptor.svelte";
  import Select from "./Select.svelte";
  import NextButton from "./NextButton.svelte";
  import Phone from "./Phone.svelte";

  import { createInput } from "../../utils/formDefaults.js";
  import { dndzone } from "svelte-dnd-action";
  import Rating from "./Rating.svelte";
  import Signature from "./Field/Signature.svelte";
  import { onMount } from "svelte";

  let { formData = $bindable(), formId }: { formData: Form | null, formId: string } = $props();
  let form = $state() as FormState;

  onMount(async () => {
    const pb = new PocketBase('http://localhost:8090')
    if (!pb.authStore.isValid) {
      globalThis.location.href = '/login'
      return
    }

    console.log(`form ID: `, formId)
    // var tmp = pb.authStore.isValid ? 
    const f = await pb.collection('forms').getOne(formId)
    console.log(f)
    if (f) {
      form = new FormState(f);
      return form
    }
    return 
    if (formData) {
      form = new FormState(formData);
    }
  });

  // main app state
  let configurationTab = $state("build"); // config tabs: [ 'build', 'design', 'submissions' ]
  let showSubmissions = $state(false);

  let formCurrentIndex = $state(0); // chosen step index
  let formCurrentStep = $derived(form.formSteps[formCurrentIndex]);

  let showAddMenu = $state(false);
  // variable for side panel DND
  let hoveredSideStepId = $state("");
  // dnd specific helper
  function handleConsider(e) {
    form.formSteps = e.detail.items;
  }

  // dnd specific helper
  function handleFinalize(e) {
    form.formSteps = e.detail.items;
  }

  function addNewStep(inputType: string, data = {}, position: number) {
    let step = createInput(inputType, data);

    if (!position) {
      form.addStep(step);
    }
  }

  const hebrewFieldTypes = {
    descriptor: "תיאור",
    signature: "חתימה",
    rating: "דירוג",
    text: "טקסט",
    email: "אימייל",
    phone: "טלפון",
    date: "תאריך",
    select: "בחירה",
    scale: "מדרג",
  };

  function previewHandler() {
    let jsonFormData = JSON.stringify(form);
    console.log(jsonFormData);
    try {
      localStorage.setItem("latest_form", jsonFormData);
      window.location = "/demo";
    } catch (error) {
      alert("שגיאה בהצגת הטופס");
    }
  }

  async function updateFormToDB() {
    const resp = await fetch("/api/form/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.form),
    });
    console.log(resp.status);
  }
</script>

{#if form}
  <div>
    <nav class="w-full border-b p-2 flex items-center flex justify-between">
      <div class="flex items-center gap-2">
        <div class="i-mdi:arrow-right w-1.2em h-1.2em text-blue-600"></div>
        <a href="/dashboard" class="text-blue font-bold text-base-600">חזור</a>
      </div>

      <div class="flex items-center gap-2">
        <ul class="flex gap-2 items-center justify-center">
          <a
            data-state={configurationTab == "design" ? "active" : ""}
            onclick={(e) => {
              e.preventDefault();
              configurationTab = "design";
            }}
            class={`nav-item ${configurationTab === "design" && "after:bg-teal-400"}`}
            type="button"
            role="tab"
            aria-selected={configurationTab === "design"}
            href="/">עיצוב</a
          >
          <a
            data-state={configurationTab === "build" ? "active" : ""}
            onclick={(e) => {
              e.preventDefault();
              configurationTab = "build";
            }}
            class={`nav-item ${configurationTab === "design" && "after:bg-teal-400"}`}
            type="button"
            role="tab"
            aria-selected={configurationTab === "build"}
            href="/">הגדרות</a
          >
          <a
            data-state={configurationTab === "submissions" ? "active" : ""}
            onclick={(e) => {
              e.preventDefault();
              showSubmissions = true;
            }}
            class={`nav-item ${configurationTab === "submissions" && "after:bg-teal-400"}`}
            type="button"
            role="tab"
            aria-selected={configurationTab === "submissions"}
            href="/">תוצאות</a
          >
        </ul>
      </div>

      <div class="flex items-center gap-4 px-12">
        <button
          onclick={previewHandler}
          class="py-1 px-2 button button-secondary rounded-sm !bg-white"
        >
          תצוגה מקדימה
        </button>

        <button
          class="items-center gap-2 py-1 px-4 button button-secondary rounded-sm !bg-teal-800 !text-white"
        >
          פרסם טופס
          <div class="i-mdi:play w-4 h-4"></div>
        </button>
      </div>
    </nav>

    <div class="grid grid-cols-12 h-screen bg-gray-50">
      <!-- CONFIGURATION PANEL -->
      <aside
        class="relative col-span-3 bg-white overflow-y-scroll border-l border-neutral-300 bg-neutral-200"
      >
        <label for="" class="block mt-4 border-b border-b-2 w-full p-2">
          {configurationTab === "build" ? "הגדרות" : "עיצוב"}
        </label>
        {#if configurationTab === "build"}
          {#if formCurrentStep}
            <SingleInput bind:formStep={form.formSteps[formCurrentIndex]} />
          {/if}
        {/if}
        {#if configurationTab === "design"}
          <DesignConfig bind:formDesign={form.design} />
        {/if}
        <button
          class="absolute bg-teal-400 text-white font-thin bottom-10 left-0 right-0 w-full px-4 py-2 rounded-sm"
          onclick={updateFormToDB}
        >
          שמור שינויים
        </button>
      </aside>

      <!-- MAIN CANVAS -->
      {#if true}
      <!-- TODO: Extract this out into a component -->
      <main 
        id="main"
        class="bg-gray-50 dark:bg-neutral-800 col-span-6">
        <div class="p-10">
          <h1 class="font-bold p-10">תוצאות ותגובות עבור הטופס</h1>
          <div class="my-2 overflow-auto">
            <div class="inline-block min-w-full py-2 align-middle">
              <div class="overflow-auto shadow mx-1 ring-1 ring-black ring-opacity-5 md:rounded-lg relative">
                <table class="table table-zebra min-w-full divide-y divide-gray-300 break-words">
                  <thead class="bg-gray-100">
                    <tr class="divide-x divide-gray-200">
                      <th class="py-3 5 pr-4 text-right text-sm font-semibold text-gray-900">
                        שם פרטי
                      </th>
                      <th class="py-3 5 pr-4 text-right text-sm font-semibold text-gray-900">
                        שאלה #2
                      </th>
                      <th class="py-3 5 pr-4 text-right text-sm font-semibold text-gray-900">
                        שאלה #3
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200 bg-white"></tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      {:else}
      <main
        style={form?.design &&
          `
      --theme-question: ${form.design.question};
      --theme-answer: ${form.design.answer};
      --theme-background: ${form.design.backgroundColor};
      --theme-button: ${form.design.button};
      --theme-button-text: ${form.design.buttonText};
    `}
        id="main"
        class="bg-gray-50 dark:bg-neutral-800 col-span-6"
      >
        <div
          id="form-page"
          class={`relative lg:mx-6 rouded-lg h-[calc(100vh_-_15rem)] mt-[4rem] border border-dashed border-neutral-500 `}
        >
          <div
            class="h-full flex items-center justify-center scrollbar-hide overflow-y-auto mx-auto"
          >
            {#if formCurrentStep}
              <form class={"w-8/12 transition transition-all"}>
                {#if formCurrentStep.type === "select"}
                  <Select field={formCurrentStep} />
                {/if}
                {#if formCurrentStep.type === "signature"}
                  <Signature field={formCurrentStep} />
                {/if}
                {#if formCurrentStep.type === "rating"}
                  <Rating
                    rating={formCurrentStep.rating}
                    field={formCurrentStep}
                  />
                {/if}
                {#if formCurrentStep.type === "descriptor"}
                  <Descriptor
                    {...formCurrentStep}
                    {...formCurrentStep.design}
                  />
                {/if}
                {#if formCurrentStep.type === "tel"}
                  <Phone field={formCurrentStep} />
                {/if}
                {#if formCurrentStep.type === "email" || formCurrentStep.type === "text"}
                  <div>
                    <FieldLabel {...formCurrentStep}>
                      {formCurrentStep.question}
                    </FieldLabel>

                    {#if formCurrentStep.description}
                      <FieldDescription>
                        {@html formCurrentStep.description}
                      </FieldDescription>
                    {/if}

                    <input
                      bind:value={formCurrentStep.value}
                      name={formCurrentStep.id}
                      id={formCurrentStep.id}
                      type={formCurrentStep.type}
                      placeholder={formCurrentStep.placeholder}
                      required={formCurrentStep.required}
                      class={`
                [ w-full text-lg md:text-base mt-8 pb-2 transition-all bg-transparent ] 
                [ placeholder:italic placeholder:text-neutral-500 placeholder:text-lg lg:placeholder:text-xl ]
                [ border-0 border-b-2 border-neutral-600 ]
                [ outline-none focus:outline-none text-gray-800 focus:border-0 focus:ring-none focus:border-b-2 !focus:border-blue-700 ] 
                `}
                    />
                  </div>
                {/if}
                <div class="mt-8">
                  <NextButton text="המשך" icon="thin" disabled />
                </div>
              </form>
            {/if}
          </div>
        </div>
      </main>
      {/if}

      <!-- SIDE PANEL -->
      <div
        class="col-span-3 pt-12 flex flex-col gap-2 px-2 bg-neutral-50 overflow-y-scroll border-r bg-neutral-200"
      >
        <section
          class="flex flex-col gap-4"
          onconsider={handleConsider}
          onfinalize={handleFinalize}
          use:dndzone={{
            items: form.formSteps,
            flipDurationMs: flipDurationMs,
          }}
        >
          {#each form.formSteps as step, stepIndex (step.id)}
            <button
              onmouseenter={(e) => {
                hoveredSideStepId = step.id;
                let el = e.target.querySelector(".del");
                el.classList.remove("hidden");
              }}
              onmouseleave={(e) => {
                hoveredSideStepId = "";
                let el = e.target.querySelector(".del");
                el.classList.add("hidden");
              }}
              animate:flip={{ duration: flipDurationMs }}
              class={`
              [ flex items-center justify-start ]
              [ py-1 px-4 ]
              [ ${formCurrentIndex === stepIndex ? "bg-slate-200" : "bg-slate-100"} ]
              [ hover:bg-slate-200 shadow-sm hover:shadow-md transition ]
            `}
              onclick={() => {
                formCurrentIndex = stepIndex;
              }}
            >
              <div
                class="i-mdi:dots-grid w-6 h-6 me-4 bg-neutral-300 hover:bg-neutral-400"
              ></div>
              <div class="flex flex-col items-start">
                <span class="text-[14px] text-neutral-800 leading-6">
                  {hebrewFieldTypes[step.type]}
                </span>
                <span class="text-xs text-neutral-400">
                  {step.question}
                </span>
              </div>
              <span
                tabindex="0"
                role="button"
                onclick={() => {
                  form.formSteps = form.formSteps.filter(
                    (fs) => step.id !== fs.id,
                  );
                }}
                class="del i-mdi:trash w-4 h-4 mr-auto bg-teal-400 hidden hover:bg-teal-700"
              ></span>
            </button>
          {/each}
        </section>
        <!-- ADD BLOCK  -->
        <div
          class="mt-4 mx-auto border-0 border-top-2 border-top border-gray-300"
        >
          <button
            onclick={() => (showAddMenu = !showAddMenu)}
            class="[ button-xl button-secondary ] [ flex mx-auto items-center justify-evenly gap-2 ] !text-white py-1 px-4"
          >
            הוסף שדה
            <div class="inline-block i-mdi:plus w-6 h-6 me-4 bg-white"></div>
          </button>
          {#if showAddMenu}
            <div class="flex flex-col mt-8 transition">
              <h3 class="text-base mt-4 leading-6">בלוקים:</h3>
              <div class="grid grid-cols-1 gap-2 mt-2">
                <button
                  onclick={() => addNewStep("descriptor")}
                  class="cursor-pointer bg-gray-100 border hover:bg-neutral-200 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
                >
                  <div
                    class="mx-auto i-mdi:layers-outline w-1.5rem h-1.5rem"
                  ></div>
                  <span class="text-sm mx-auto"> תיאור </span>
                </button>
                <button
                  onclick={() => addNewStep("text")}
                  class="cursor-pointer bg-gray-100 border hover:bg-neutral-200 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
                >
                  <div
                    class="mx-auto i-mdi:format-text w-1.5rem h-1.5rem"
                  ></div>
                  <span class="text-sm mx-auto"> טקסט </span>
                </button>
                <button
                  onclick={() => addNewStep("email")}
                  class="cursor-pointer bg-gray-100 border hover:bg-neutral-200 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
                >
                  <div
                    class="mx-auto i-mdi:email-outline w-1.5rem h-1.5rem"
                  ></div>
                  <span class="text-sm mx-auto"> אימייל </span>
                </button>
                <button
                  onclick={() => addNewStep("select")}
                  class="cursor-pointer bg-gray-100 border hover:bg-neutral-200 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
                >
                  <div
                    class="mx-auto i-mdi:checkbox-marked-outline w-1.5rem h-1.5rem"
                  ></div>
                  <span class="text-sm mx-auto"> בחירה </span>
                </button>

                <button
                  onclick={() => addNewStep("tel")}
                  class="cursor-pointer bg-gray-100 border hover:bg-gray-200 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
                >
                  <div class="mx-auto i-mdi:phone w-1.5rem h-1.5rem"></div>
                  <span class="text-sm mx-auto">טלפון</span>
                </button>

                <button
                  onclick={() => addNewStep("signature")}
                  class="cursor-pointer bg-gray-100 border hover:bg-gray-200 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
                >
                  <div class="mx-auto i-mdi:signatre">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14.075 11.725q1.825-1.35 2.85-2.962T17.95 5.55q0-.8-.262-1.175T16.975 4Q15.8 4 14.9 5.988t-.9 4.487q0 .35.013.663t.062.587M3 21v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zM3.4 17L2 15.6L3.6 14L2 12.4L3.4 11L5 12.6L6.6 11L8 12.4L6.4 14L8 15.6L6.6 17L5 15.4zm12.05-1q-.75 0-1.375-.288T13 14.776q-.625.35-1.287.625t-1.363.55l-.7-1.875q.7-.25 1.338-.537t1.237-.613q-.125-.55-.187-1.2t-.063-1.4q0-3.6 1.425-5.962T16.975 2q1.3 0 2.125.963t.825 2.687q0 2.15-1.362 4.25t-3.788 3.775q.175.175.363.263t.387.087q.65 0 1.513-.825t1.562-2.175l1.825.85q-.175.425-.275 1.025t.025 1.05q.25-.125.588-.425t.687-.75L23.025 14q-.65.9-1.5 1.45T19.95 16q-.525 0-.937-.312t-.688-.963q-.7.625-1.425.95T15.45 16"
                      />
                    </svg>
                  </div>
                  <span class="text-sm mx-auto">חתימה</span>
                </button>

                <button
                  onclick={() => addNewStep("rating")}
                  class="cursor-pointer bg-gray-100 border hover:bg-gray-200 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
                >
                  <div class="mx-auto i-mdi:star w-1.5rem h-1.5rem"></div>
                  <span class="text-sm mx-auto">דירוג</span>
                </button>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
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

  a {
    text-decoration: underline !important;
  }

  .nav-item {
    align-items: center;
    -webkit-box-align: center;
    align-items: center;
    align-self: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    font-size: 14px;
    gap: 8px;
    height: 32px;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 12px;
    text-decoration: none;
    transition-property: background-color, color;
    transition-duration: 0.2s;
    white-space: nowrap;
    position: relative;
    background-color: rgba(25, 25, 25, 0);
    color: rgb(94, 94, 94);
  }

  .nav-item[aria-selected="true"]::after {
    background-color: rgb(60, 60, 60);
  }
  .nav-item::after {
    content: "";
    background: transparent;
    border-radius: 9999px;
    top: calc(-9px);
    height: 3px;
    padding: 0px 12px;
    pointer-events: none;
    position: absolute;
    transition-property: background-color;
    transition-duration: 0.2s;
    width: calc(100% - 24px);
  }
</style>
