<script>
  import { fade } from "svelte/transition";
  import ErrorNotif from "./ErrorNotif.svelte";
  import createFormState from "./formstate.svelte.ts";
  import Select from "./Select.svelte";

  const sampleForm = [
    {
      type: "descriptor",
      question: "ברוכים הבאים, תודה על זמנכם.",
      description:
        "מילוי הטופס יקח רק 5 דקות מזמנכם ויעזור לנו באופן משמעותי בקידום ודיוק המערכת שלנו.",
      buttonText: "התחל",
    },
    {
      type: "select",
      question: "תחום התמחות החברה שלכם",
      required: true,
      options: [
        "שיווק ופרסום דיגיטל",
        "רשתות חברתיות",
        "ייעוץ ושירותים פיננסיים",
        "אחר",
      ],
    },
    {
      type: "email",
      question: "לאיזה אימייל תרצו שנשלח לכם הודעה?",
      description: "שורת תיאור נוספת, ניתן להשאירה ריקה.",
      placeholder: "name@example.com",
      required: true,
    },
    {
      type: "text",
      question: "רשמו את שמכם הפרטי",
      description: "",
      placeholder: "גדעון בן יואש",
      required: true,
    },
    {
      type: "select",
      question: "אלו מבין האפשרויות הכי תואם אתכם?",
      description: "בחרו אפשרות אחת בלבד",
      required: false,
      options: [
        "חיפשתי בול מערכת כזו! פשוט תקחו את הכסף שלי.",
        "נראה חמוד, לא בטוח שיש לי צורך במערכת כרגע",
        "פחות מתחבר לי כל העניין",
        "לא!",
      ],
    },
    {
      type: "descriptor",
      question: "הגעתם לסוף :-)",
      description: "כעת, נסו לשגר את הטופס... קדימה!",
      buttonText: "שלח טופס",
    },
  ];

  let { formSteps = $bindable(sampleForm) } = $props();

  let form = $state({
    id: "1",
    title: "form",
    formSteps: [...formSteps],
  });

  let formState = createFormState(form);

  $effect(() => {
    $inspect(formState);
  });

  // $effect(() => {
  // const jsonPreviewFormData = localStorage.getItem("latest_form");
  // if (jsonPreviewFormData) {
  // form = JSON.parse(jsonPreviewFormData);
  // }
  // });

  function isValidEmail(value) {
    return (
      (value &&
        !!value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )) ||
      false
    );
  }

  function emailValidation() {
    let stepWrapper = document.querySelector(
      `[data-step-index="${formState.currentStep}"] input`,
    );
    if (!stepWrapper) return false;
    let email = stepWrapper.value;
    return isValidEmail(email);
  }

  function prevStep() {
    formState.currentStep > 0 && formState.currentStep--;
  }

  function nextStep() {
    const currentBlock = form.formSteps[formState.currentStep];
    const currentBlockType = currentBlock.type;

    switch (true) {
      case currentBlockType === "text":
        currentBlock.required && currentBlock.value.length < 1
          ? formState.setError(true, `שדה חובה`)
          : formState.incStep();
        break;
      case currentBlockType === "email":
        if (emailValidation()) {
          formState.resetError();
          formState.currentStep < form.formSteps.length - 1 &&
            formState.incStep();
        } else {
          formState.setError(true, "הזינו כתובת מייל תקנית");
        }
      case currentBlockType === "tel":
        break;
      default:
        formState.currentStep < form.formSteps.length - 1 &&
          formState.incStep();
        break;
    }
  }

  function onSubmit(e) {
    e?.preventDefault();
  }
</script>

<div
  id="full-screen"
  class="relative max-h-screen overflow-y-scroll snap snap-y snap-mandatory"
>
  <form dir="rtl" onsubmit={onSubmit} novalidate>
    <!-- Introduction Note -->
    {#each form.formSteps as field, stepIndex}
      {#if formState.currentStep === stepIndex}
        <section
          in:fade
          class="flex items-center justify-center h-lvh snap-start w-full p-16 border-box bg-orange-100 text-center"
        >
          {#if field.type === "descriptor"}
            <div class="flex flex-col gap-8 items-center">
              <h2 class="text-60px max-w-xl font-bold leading-tight">
                {field.question}
              </h2>
              <p>
                {field.description}
              </p>
              {#if formState.currentStep == form.formSteps.length - 1}
                <a
                  href="/thanks"
                  class="w-36 bg-purple-700 font-bold px-6 py-2 rounded-lg text-white"
                >
                  {field.buttonText}
                </a>
              {/if}
              {#if formState.currentStep < form.formSteps.length - 1}
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
              <label
                class="text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal"
              >
                {field.question}
                <sup class:hidden={field.required} class="text-red-600">
                  *
                </sup>
              </label>

              <p class="text-lg font-normal leading-relaxed text-neutral-600">
                {field.description}
              </p>

              <input
                bind:value={field.value}
                name={field.id}
                id={field.id}
                type={field.type}
                on:keydown={(e) => e.key == "Enter"}
                placeholder={field.placeholder}
                required={field.required}
                class={`transition-all bg-transparent border-b-2 border-b-neutral-600 text-gray-800 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 placeholder:text-xl lg:placeholder:text-3xl focus:border-b-neutral-100 outline-0`}
              />
              {#if formState.isError}
                <ErrorNotif msg={formState.errorMsg} />
              {/if}
              <div class:hidden={true}>
                <span class="block mt-2 p-1 text-red-600 bg-yellow-200">
                  יש למלא שדה זה בהתאם להוראות
                </span>
              </div>
            </div>
          {/if}
          {#if field.type === "select"}
            <Select {field} error={formState.errorMsg} />
          {/if}
        </section>
      {/if}
    {/each}}
    <!-- Up and Down button-arrows -->
    <div
      class="absolute sticky flex gap-4 bottom-[5%] right-[5%] w-60 p-4 rounded-md"
    >
      <button onclick={nextStep} class="bg-teal-600 py-2 px-2">
        <span class="i-mdi-arrow-down bg-white text-2xl z-10 block" />
      </button>
      <button onclick={prevStep} class="bg-teal-600 py-2 px-2">
        <span class="i-mdi-arrow-up bg-white text-2xl z-10 block" />
      </button>
    </div>
  </form>
</div>

<style>
</style>
