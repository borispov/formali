<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { fade } from "svelte/transition";

    import type { FormStep, Form } from "./store.svelte";
    import { sampleFormData } from "$lib/dummyData";

    import ErrorNotif from "./ErrorNotif.svelte";
    import { FormState } from "./formstate.svelte";
    import Select from "./Select.svelte";
    import NextButton from "./NextButton.svelte";
    import Phone from "./Phone.svelte";
    import Signature from "./Field/Signature.svelte";
    import Rating from "./Rating.svelte";
    import { emailValidation, phoneValidation } from "$lib/utils/validators";
    import FieldLabel from "./FieldLabel.svelte";
    import FieldDescription from "./FieldDescription.svelte";
    import Descriptor from "./Field/Descriptor.svelte";

    let {
        isDemo = false,
        formFromParams = null,
    }: { isDemo: boolean; formFromParams: Form | null } = $props();

    let form = $state() as FormState;
    let shouldSubmit = $state(false);
    let formSubmitted = $state(false);

    $effect(() => {
        shouldSubmit && onSubmit();
    });

    onMount(async () => {
        if (isDemo) {
            const jsonPreviewFormData = localStorage.getItem("latest_form");

            if (jsonPreviewFormData) {
                var tmp: any = JSON.parse(jsonPreviewFormData);
                console.log("form details: ", tmp);

                if (tmp.formSteps) {
                    form = new FormState(tmp);
                    console.log("we r here");
                } else {
                    form = new FormState(sampleFormData);
                }
            }
            setContext("theme", form.getDesignObject());
        } else if (formFromParams) {
            console.log(`formFromParams mode: `, formFromParams);
            form = new FormState(formFromParams);
        }
    });

    // make svelte stop complaining for mutating the form state from within the components
    function setVal(fs: FormStep, v: string | number) {
        fs.value = v;
        console.log("setting form type of ", fs.type, " to: ", v);
    }

    function prevStep(e) {
        e.preventDefault();
        form.resetError();
        form.currentStep > 0 && form.currentStep--;
    }

    // Refactoring thoughts: 15/06/2024
    // I think the class component should be responsible for the whole Validation phase. OR...
    // I should write a separate validation class/functions and separate them from this component.
    // Can pass the whole function to the class Component -- 25/5/2024: Not Sure What This Means
    // Need to get rid of DOM dependency in email validation...
    // TODO: if (submitted) ...

    function incOrSubmit() {
        if (form.isLastStep()) {
            shouldSubmit = true;
        } else {
            form.incStep();
        }
    }

    function nextStep(e) {
        // parameter passed to disable default onSubmit function
        e && e.preventDefault();
        const currentBlock = form.formSteps[form.currentStep];
        const currentBlockType = currentBlock.type;

        switch (true) {
            case currentBlockType === "text":
                currentBlock.required && currentBlock.value.length < 1
                    ? form.setError(true, `שדה חובה`)
                    : incOrSubmit();
                break;
            case currentBlockType === "signature":
                currentBlock.required && currentBlock.value.length < 1
                    ? form.setError(true, `שדה חובה`)
                    : incOrSubmit();
                break;
            case currentBlockType === "email":
                let stepWrapper = document.querySelector(
                    `[data-step-index="${form.currentStep}"] input`,
                ) as HTMLInputElement;
                if (stepWrapper && emailValidation(stepWrapper)) {
                    form.resetError();
                    incOrSubmit();
                } else {
                    form.setError(true, "הזינו כתובת מייל תקנית");
                }
                break;
            case currentBlockType === "tel":
                if (currentBlock.isValid) {
                    incOrSubmit();
                } else {
                    console.log("invalid phone");
                    form.setError(true, "הזינו מספר טלפון חוקי");
                }
                break;
            default:
                console.log("Default Behavior Engaged...");
                incOrSubmit();
                // not sure we need to check this with incOrSubmit's functionality
                // form.currentStep < form.formSteps.length - 1 && incOrSubmit();
                break;
        }
    }

    async function onSubmit(e: FormDataEvent) {
        e?.preventDefault();
        const f = form.formSteps;
        let questionAndValueList = [];

        // TODO: transform this into a Form's Class Method
        for (let i = 0; i < f.length; i++) {
            const formElement = f[i];
            // DO NOT include 'descriptor' fields
            if (formElement.type === "descriptor") continue;
            questionAndValueList.push({
                question: formElement.question,
                value: formElement.value,
            });
        }

        const submissionRecord = {
            formId: form.form.id,
            submissionData: questionAndValueList,
        };

        const response = await fetch("/api/form/submission", {
            method: "POST",
            body: JSON.stringify(submissionRecord),
        });
        console.log("submission: ", response);

        if (response.ok) {
            formSubmitted = true;
        }
    }
</script>

{#if form}
    <div
        style={form?.design &&
            `
      --theme-question: ${form.design.question};
      --theme-answer: ${form.design.answer};
      --theme-background: ${form.design.backgroundColor};
      --theme-button: ${form.design.button};
      --theme-button-text: ${form.design.buttonText};
    `}
        id="full-screen"
        class="relative max-h-screen overflow-y-scroll snap snap-y snap-mandatory"
    >
        <form dir="rtl" onsubmit={onSubmit}>
            <!-- Introduction Note -->
            {#if !formSubmitted}
                {#each form.formSteps as field, stepIndex}
                    {#if form.currentStep === stepIndex}
                        <section
                            id="form-page"
                            in:fade
                            class={`flex flex-col items-center justify-center h-lvh snap-start bg-orange-100}`}
                        >
                            <div class="w-screen max-w-2xl px-10">
                                {#if field.type === "descriptor"}
                                    <div
                                        data-el="descriptor"
                                        class="flex flex-col gap-8 items-center text-center"
                                    >
                                        <h2
                                            class="text-60px max-w-xl font-bold leading-tight"
                                        >
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
                                                התחל
                                            </button>
                                        {/if}
                                    </div>
                                {/if}
                                {#if field.type === "text" || field.type === "email"}
                                    <div
                                        data-step={field.type}
                                        data-step-index={stepIndex}
                                    >
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
                                            onkeydown={(e) =>
                                                e.key == "Enter" && nextStep()}
                                            placeholder={field.placeholder ||
                                                "name@example.com"}
                                            required={field.required}
                                            class={`
                      [ w-full text-lg md:text-base lg:text-xl mt-6 pb-2 transition-all bg-transparent ]
                      [ placeholder:italic placeholder:text-neutral-500 placeholder:text-lg lg:placeholder:text-xl ]
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
                                    <Select {field} {setVal} />
                                {/if}
                                {#if field.type === "signature"}
                                    <Signature {field} {setVal} />
                                    {#if form.isError}
                                        <ErrorNotif msg={form.errorMsg} />
                                    {/if}
                                {/if}
                                {#if field.type === "rating"}
                                    <Rating
                                        {field}
                                        rating={field.rating}
                                        {setVal}
                                    />
                                    {#if form.isError}
                                        <ErrorNotif msg={form.errorMsg} />
                                    {/if}
                                {/if}
                                {#if field.type === "tel"}
                                    <Phone
                                        handler={nextStep}
                                        {field}
                                        {stepIndex}
                                    />
                                    {#if form.isError}
                                        <ErrorNotif msg={form.errorMsg} />
                                    {/if}
                                {/if}
                                {#if field.type !== "descriptor"}
                                    <div class="mt-8 inline-block">
                                        <NextButton
                                            showPressEnter={true}
                                            center={true}
                                            handler={nextStep}
                                            text={form.isLastStep()
                                                ? "שלח"
                                                : "המשך"}
                                        />
                                    </div>
                                {/if}
                            </div>
                        </section>
                    {/if}
                {/each}}
            {:else}
                <section
                    id="form-page"
                    in:fade
                    class={`flex flex-col items-center justify-center h-lvh snap-start bg-orange-100}`}
                >
                    <div class="w-screen max-w-2xl px-10">
                        <div
                            class="flex flex-col gap-8 items-center text-center"
                        >
                            <h2
                                class="text-60px max-w-xl font-bold leading-tight"
                            >
                                {form.endings[0].question}
                            </h2>
                            <p>
                                {@html form.endings[0].description}
                            </p>
                        </div>
                    </div>
                    {#if form.endings[0].img}
                        <img
                            class="w-full h-full max-w-4xl"
                            src={form.endings[0].img}
                            alt="תודה רבה"
                        />
                    {/if}
                </section>
            {/if}
            <!-- Up and Down button-arrows -->
            <div
                class="absolute sticky flex gap-4 bottom-[5%] right-[5%] w-60 p-4 rounded-md"
            >
                <button
                    onclick={nextStep}
                    class="bg-teal-600 py-2 px-2 rounded"
                >
                    <span class="i-mdi-arrow-down bg-white text-xl z-10 block"
                    ></span>
                </button>
                <button
                    onclick={prevStep}
                    class="bg-teal-600 py-2 px-2 rounded"
                >
                    <span class="i-mdi-arrow-up bg-white text-xl z-10 block"
                    ></span>
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

    :global(html) {
        --theme-question-color: var(--theme-question-color);
        --theme-answer-color: var(--theme-answer-color);
    }

    :global(
            label[data-el="question"],
            [data-el="description"],
            [data-el="show-enter"]
        ) {
        color: var(--theme-question);
    }

    :global(label[data-el="question"]) {
        font-size: var(--theme-font-size);
    }

    :global(label[data-el="description"]) {
        font-size: var(--theme-font-size);
    }

    :global(#form-page) {
        background: var(--theme-background);
    }

    :global(button[data-el="step-cta"]) {
        background: var(--theme-button);
        color: var(--theme-button-text);
    }
</style>
