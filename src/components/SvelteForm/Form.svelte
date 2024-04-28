<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import ErrorNotif from "./ErrorNotif.svelte";
  import createFormState from "./formstate.svelte.ts";
  import Select from "./Select.svelte";
  import NextButton from "./NextButton.svelte";
  import Phone from "./Phone.svelte";
  import Signature from "./Field/Signature.svelte";
  import Rating from "./Rating.svelte";

  const sampleForm = [
    {
      type: "email",
      question: "לאיזה אימייל תרצו שנשלח לכם הודעה?",
      description: "שורת תיאור נוספת, ניתן להשאירה ריקה.",
      placeholder: "name@example.com",
      required: true,
    },
    {
      type: "descriptor",
      question: "ברוכים הבאים, תודה על זמנכם.",
      description:
        "מילוי הטופס יקח רק 5 דקות מזמנכם ויעזור לנו באופן משמעותי בקידום ודיוק המערכת שלנו.",
      buttonText: "התחל",
    },
    {
      type: "tel",
      question: "הזינו מספר טלפון נייד",
      placeholder: "050-987-2345",
      description:
        "אנו צריכים את מספרכם לצורכי הרשמה בלבד, מספרכם לא נכנס לרשימת תפוצה כזו או אחרת",
      required: true,
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

  let form = $state();

  onMount(() => {
    console.log("MOUNTING!");
    const jsonPreviewFormData = localStorage.getItem("latest_form");
    if (jsonPreviewFormData) {
      form = JSON.parse(jsonPreviewFormData);
      if (form) {
        console.log("recreating from localStorage");
        form = createFormState(form);
      } else {
        console.log("from dummy data");
        var tmp = $state({
          id: "1",
          title: "form",
          formSteps: [...formSteps],
        });
        form = createFormState(tmp);
      }
    }
  });

  // should live outside - it's too cluttered here in the script tag
  function isValidEmail(value) {
    return (
      (value &&
        !!value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )) ||
      false
    );
  }

  // should extract out the element selector...
  function emailValidation() {
    let stepWrapper = document.querySelector(
      `[data-step-index="${form.currentStep}"] input`,
    );
    if (!stepWrapper) return false;
    let email = stepWrapper.value;
    return isValidEmail(email);
  }

  function prevStep() {
    form.currentStep > 0 && form.currentStep--;
  }

  function nextStep() {
    const currentBlock = form.formSteps[form.currentStep];
    const currentBlockType = currentBlock.type;

    switch (true) {
      case currentBlockType === "text":
        currentBlock.required && currentBlock.value.length < 1
          ? form.setError(true, `שדה חובה`)
          : form.incStep();
        break;
      case currentBlockType === "signature":
        console.log(currentBlock.value);
        currentBlock.required && currentBlock.value.length < 1
          ? form.setError(true, `שדה חובה`)
          : form.incStep();
        break;
      case currentBlockType === "email":
        if (emailValidation()) {
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
  }
</script>

{#if form}
  <div
    id="full-screen"
    class="relative max-h-screen overflow-y-scroll snap snap-y snap-mandatory"
  >
    <form dir="rtl" onsubmit={onSubmit} novalidate>
      <!-- Introduction Note -->
      {#each form.formSteps as field, stepIndex}
        {#if form.currentStep === stepIndex}
          <section
            in:fade
            class="flex flex-col items-center justify-center h-lvh snap-start bg-orange-100"
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
                  <label
                    for={field.id}
                    class="text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal"
                  >
                    {field.question}
                    <sup class:hidden={field.required} class="text-red-600">
                      *
                    </sup>
                  </label>

                  <p
                    class="text-lg font-normal leading-relaxed text-neutral-600"
                  >
                    {@html field.description}
                  </p>

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
                <Select {field} error={form.errorMsg} />
              {/if}
              {#if field.type === "signature"}
                <Signature {field} error={form.errorMsg} />
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
                <Phone handler={nextStep} {field} errorMsg={form.errorMsg} />
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
          <span class="i-mdi-arrow-down bg-white text-xl z-10 block" />
        </button>
        <button onclick={prevStep} class="bg-teal-600 py-2 px-2 rounded">
          <span class="i-mdi-arrow-up bg-white text-xl z-10 block" />
        </button>
      </div>
    </form>
  </div>
{/if}

<style>
</style>
