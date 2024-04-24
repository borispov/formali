<script>
  // TODO: verify line 126 HTML injection is SAFE
  import { flip } from "svelte/animate";
  const flipDurationMs = 100;

  // store
  import { createForm } from "./store.svelte.ts";
  const form = createForm();

  import SingleInput from "../Builder/SingleInput.svelte";

  import { createInput } from "../../utils/formDefaults.js";
  import { dndzone } from "svelte-dnd-action";

  let showAddMenu = $state(false);
  // variable for side panel DND
  let hoveredSideStepId = $state("");
  let formCurrentIndex = $state(0); // index
  let formCurrentStep = $derived(
    formCurrentIndex !== null && form.formSteps[formCurrentIndex],
  );

  // dnd specific helper
  function handleConsider(e) {
    form.formSteps = e.detail.items;
  }

  // dnd specific helper
  function handleFinalize(e) {
    form.formSteps = e.detail.items;
  }

  function addNewStep(inputType, data = {}, position) {
    let step = createInput(inputType, data);

    if (!position) {
      form.addStep(step);
    }
  }

  const hebrewFieldTypes = {
    text: "טקסט",
    email: "אימייל",
    phone: "טלפון",
    date: "תאריך",
    select: "בחירה",
  };

  function previewHandler() {
    let jsonFormData = JSON.stringify(form);
    console.log(jsonFormData);
    try {
      localStorage.setItem("latest_form", jsonFormData);
      window.location = "/test";
    } catch (error) {
      alert("שגיאה בהצגת הטופס");
    }
  }
</script>

<div>
  <nav class="w-full border-b p-2 flex items-center flex justify-between">
    <div class="flex items-center gap-2">
      <div class="i-mdi:arrow-right w-1.2em h-1.2em text-blue-600"></div>
      <a href="/" class="text-blue font-bold text-base-600">חזור</a>
    </div>

    <ul class="flex gap-2">
      <li><a href="/">דף</a></li>
      <li><a href="/">עיצוב</a></li>
      <li><a href="/">הגדרות</a></li>
    </ul>
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
      class="col-span-3 bg-white overflow-y-scroll border-l border-neutral-300 bg-neutral-200"
    >
      <label for="" class="block mt-4 border-b border-b-2 w-full p-2">
        הגדרות שדה
      </label>
      {#if formCurrentStep}
        <SingleInput bind:formStep={form.formSteps[formCurrentIndex]} />
      {/if}
    </aside>

    <!-- MAIN CANVAS -->
    <main id="main" class="bg-gray-50 dark:bg-neutral-800 col-span-6">
      <div
        class={`relative lg:mx-6 rouded-lg h-[calc(100vh_-_15rem)] mt-[4rem] border border-dashed border-neutral-500 `}
        style={`background: ${formCurrentStep && formCurrentStep.design.bg}`}
      >
        <div
          class="h-full flex items-center justify-center scrollbar-hide overflow-y-auto mx-auto"
        >
          {#if formCurrentStep}
            <form
              style={`color: ${formCurrentStep.design.textColor}`}
              class={"w-8/12 transition transition-all"}
            >
              <label class="block" for="question">
                <span>
                  {formCurrentStep.question}
                  {#if formCurrentStep.required}
                    <sup class="text-red-700 font-bold"> * </sup>
                  {/if}
                </span>
              </label>
              <div class="text-gray-400 text-sm">
                {@html formCurrentStep.description}
              </div>
              <input
                class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-black bg-transparent"
                bind:value={formCurrentStep.value}
                placeholder={formCurrentStep.placeholder}
                {...{ type: formCurrentStep.type }}
              />
              <div class="mt-8">
                <button
                  style={`color: ${formCurrentStep.design.btnTextColor}; background: ${formCurrentStep.design.btnBg}`}
                  class={`
                    [ inline-flex justify-between items-center ]
                    [ bg- border-[rgba(0, 0, 0, 0.1) 0px 3px 12px 0px] ]
                    [ px-4 py-1 rounded-sm ]`}
                >
                  המשך
                  <div class="i-mdi:arrow-left h-6 w-6 mr3"></div>
                </button>
              </div>
            </form>
          {/if}
        </div>
      </div>
    </main>

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
      <div class="mt-4 border-0 border-top-2 border-top border-gray-300">
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
            <div class="grid grid-cols-2 gap-2 mt-2">
              <button
                onclick={() => addNewStep("text")}
                class="cursor-pointer bg-gray-50 border hover:bg-gray-100 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
              >
                <div class="mx-auto i-mdi:layers-outline"></div>
                <span class="text-sm mx-auto"> תיאור </span>
              </button>
              <button
                onclick={() => addNewStep("text")}
                class="cursor-pointer bg-gray-50 border hover:bg-gray-100 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
              >
                <div class="mx-auto i-mdi:format-text"></div>
                <span class="text-sm mx-auto"> טקסט </span>
              </button>
              <button
                onclick={() => addNewStep("email")}
                class="cursor-pointer bg-gray-50 border hover:bg-gray-100 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
              >
                <div class="mx-auto i-mdi:email-outline"></div>
                <span class="text-sm mx-auto"> אימייל </span>
              </button>
              <button
                onclick={() => addNewStep("select")}
                class="cursor-pointer bg-gray-50 border hover:bg-gray-100 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
              >
                <div class="mx-auto i-mdi:checkbox-marked-outline"></div>
                <span class="text-sm mx-auto"> בחירה </span>
              </button>

              <button
                onclick={() => addNewStep("tel")}
                class="cursor-pointer bg-gray-50 border hover:bg-gray-100 dark:bg-gray-900 rounded-md dark:hover:bg-gray-800 py-2 flex flex-col justify-center"
              >
                <div class="mx-auto i-mdi:tel"></div>
                <span class="text-sm mx-auto">טלפון</span>
              </button>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  a {
    text-decoration: underline !important;
  }
</style>
