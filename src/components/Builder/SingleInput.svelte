<script>
  import { flip } from "svelte/animate";
  import ColorPicker from "svelte-awesome-color-picker";
  import ColorInput from "./ColorPicker/ColorInput.svelte";
  import Tiptap from "../Tiptap.svelte";

  import { dndzone } from "svelte-dnd-action";

  let { formStep = $bindable(), options = $bindable() } = $props();

  let newOption = $state({ value: "", id: formStep.options?.length + 1 });

  function addNewOption() {
    newOption.value.length > 2 && formStep.options.push(newOption);
    newOption = {};
  }

  const flipDurationMs = 300;

  // discouraged by svelte, is there another way?
  function handleConsider(e) {
    formStep.options = e.detail.items;
  }

  // dnd specific helper
  function handleFinalize(e) {
    formStep.options = e.detail.items;
  }
</script>

{#if (formStep && formStep.type == "text") || formStep?.type === "email" || formStep?.type === "signature"}
  <div
    class="my-8 lg:px-6 md:px-4 px-2 divide-y-1 divide-teal-700 divide-dashed"
  >
    <div class="flex flex-col w-full">
      <div class="mt-4">
        <label for="title" class="block text-sm text-gray-700">שאלה</label>
        <input
          bind:value={formStep.question}
          id="question"
          name="question"
          class="block w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
          type="text"
        />
      </div>

      <div class="mt-4 mb-6 border-1 border-gray-200">
        <div
          classs="overflow-auto text-sm md:text-base text-gray-700 focus:border-gray-100"
        >
          <Tiptap bind:value={formStep.description} />
        </div>

        <input
          bind:value={formStep.description}
          id="description"
          name="description"
          class="hidden block w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
          type="text"
        />
      </div>
    </div>

    <div class="mt-8">
      <div class="relative mt-2 flex items-start w-full">
        <div class="flex h-6 items-center">
          <input
            bind:checked={formStep.required}
            type="checkbox"
            name="required"
            id="required"
            class="h-4 w-4 rounded border-neutral-300 focus:ring-blue-600 text-blue-600"
          />
        </div>
        <div class="mr-3 text-sm leading-6">
          <label for="required">שדה חובה</label>
          <p id="description" class="text-gray-500">
            משתמשים יהיו מחויבים למלא שדה חובה בכדי להשלים את הטופס במלואו.
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}

{#if formStep && formStep.type == "tel"}
  <div
    class="my-8 lg:px-6 md:px-4 px-2 divide-y-1 divide-teal-700 divide-dashed"
  >
    <div class="flex flex-col w-full">
      <div class="mt-4">
        <label for="title" class="block text-sm text-gray-700">שאלה</label>
        <input
          bind:value={formStep.question}
          id="question"
          name="question"
          class="block w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
          type="text"
        />
      </div>

      <div class="mt-4 mb-6 border-1 border-gray-200">
        <div
          classs="overflow-auto text-sm md:text-base text-gray-700 focus:border-gray-100"
        >
          <Tiptap bind:value={formStep.description} />
        </div>

        <input
          bind:value={formStep.description}
          id="description"
          name="description"
          class="hidden block w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
          type="text"
        />
      </div>
    </div>

    <div class="mt-8">
      <div class="relative mt-2 flex items-start w-full">
        <div class="flex h-6 items-center">
          <input
            bind:checked={formStep.allowInternational}
            type="checkbox"
            name="required"
            id="required"
            class="h-4 w-4 rounded border-neutral-300 focus:ring-blue-600 text-blue-600"
          />
        </div>

        <!-- International Phones too? Field -->
        <div class="mr-3 text-sm leading-6">
          <label for="required">מספרים בינלאומיים</label>
          <p id="description" class="text-gray-500">
            לאפשר למספרי טלפון בינלאומיים להזין את מספרם באמצעות בחירת קידומת.
            ברירת המחדל הינה עבור מספרי טלפון מקומיים בלבד.
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}

{#if formStep && formStep.type == "select"}
  <div
    class="my-8 lg:px-6 md:px-4 px-2 divide-y-1 divide-teal-700 divide-dashed"
  >
    <div class="flex flex-col w-full">
      <div class="mt-4">
        <label for="title" class="block text-sm text-gray-700">שאלה</label>
        <input
          bind:value={formStep.question}
          id="question"
          name="question"
          class="block w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
          type="text"
        />
      </div>

      <div class="mt-4 mb-6 border-1 border-gray-200">
        <div
          classs="overflow-auto text-sm md:text-base text-gray-700 focus:border-gray-100"
        >
          <Tiptap bind:value={formStep.description} />
        </div>

        <input
          bind:value={formStep.description}
          id="description"
          name="description"
          class="hidden block w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
          type="text"
        />
      </div>
    </div>

    <div class="mt-8">
      <div class="relative mt-2 flex items-start w-full">
        <div class="flex h-6 items-center">
          <input
            bind:checked={formStep.required}
            type="checkbox"
            name="required"
            id="required"
            class="h-4 w-4 rounded border-neutral-300 focus:ring-blue-600 text-blue-600"
          />
        </div>
        <div class="mr-3 text-sm leading-6">
          <label for="required">שדה חובה</label>
          <p class="text-gray-500">
            משתמשים יהיו מחויבים למלא שדה חובה בכדי להשלים את הטופס במלואו.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <!-- OPTIONS Configuration -->
      <div class="flex flex-col w-full border-b">
        <h3 class="pb-2 pt-4 text-neutral-700 text-base font-bold">
          ערכים לבחירה
        </h3>

        <div class="mt-4">
          <label for="add-option" class="block text-sm text-gray-700"
            >שאלה</label
          >
          <div class="flex items-center grid grid-cols-8">
            <input
              bind:value={newOption.value}
              onkeyup={(e) => e.key === "Enter" && addNewOption()}
              id="add-option"
              name="add-option"
              class="block col-span-6 w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
              type="text"
            />
            <button
              class={`
          [ flex items-center justify-center ]
          [ bg-teal-200 col-span-2 w-4/5 text-xl h-full border-4 border-teal-500 ]
          `}
              onclick={addNewOption}>+</button
            >
          </div>
        </div>
      </div>

      <!-- Display Options -->
      <ul
        class="pt-4 grid grid-cols-1 gap-2 mt-4 flex flex-col list-none p-0 m-0"
        onconsider={handleConsider}
        onfinalize={handleFinalize}
        use:dndzone={{
          items: formStep.options,
          flipDurationMs: 100,
        }}
      >
        {#each formStep.options as option, optionIndex (option.id)}
          <li
            animate:flip={{ duration: flipDurationMs }}
            class="w-full text-xs py-2 px-3 text-center flex-wrap flex items-center justify-between bg-slate-200 rounded-2xl"
          >
            <div
              class="i-mdi:menu cursor-pointer w-6 h-6 me-4 bg-neutral-800 hover:bg-neutral-400"
            ></div>
            {option.value}
            <span
              tabindex="0"
              role="button"
              onclick={(_e) => {
                options = options.filter(
                  (_fs, fsIndex) => optionIndex !== fsIndex,
                );
              }}
              class="i-mdi:trash w-4 h-4 mr-auto bg-teal-400 hover:bg-teal-700"
            ></span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}

{#if formStep && formStep.type == "descriptor"}
  <div
    class="my-8 lg:px-6 md:px-4 px-2 divide-y-1 divide-teal-700 divide-dashed"
  >
    <div class="flex flex-col w-full">
      <div class="mt-4">
        <label for="title" class="block text-sm text-gray-700">כותרת</label>
        <input
          bind:value={formStep.question}
          id="question"
          name="question"
          class="block w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
          type="text"
        />
      </div>

      <div class="mt-4 mb-6 border-1 border-gray-200">
        <div
          classs="overflow-auto text-sm md:text-base text-gray-700 focus:border-gray-100"
        >
          <Tiptap bind:value={formStep.description} />
        </div>

        <input
          bind:value={formStep.description}
          id="description"
          name="description"
          class="hidden block w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm rounded-sm"
          type="text"
        />
      </div>
    </div>

    <div class="mt-8">
      <div class="relative mt-2 flex items-start w-full">
        <div class="flex h-6 items-center">
          <input
            bind:checked={formStep.required}
            type="checkbox"
            name="required"
            id="required"
            class="h-4 w-4 rounded border-neutral-300 focus:ring-blue-600 text-blue-600"
          />
        </div>
        <div class="mr-3 text-sm leading-6">
          <label for="required">שדה חובה</label>
          <p id="description" class="text-gray-500">
            משתמשים יהיו מחויבים למלא שדה חובה בכדי להשלים את הטופס במלואו.
          </p>
        </div>
      </div>
    </div>

    <!-- File Img Upload -->
    <div class="mt-8">
      <h3 class="pt-4 text-neutral-700 text-base font-bold">תמונת קאבר</h3>
      <div class="flex items-center">
        <label
          for="file"
          class="flex items-center mt-2 justify-center border border-gray-200 rounded-md p-6 hover:bg-gray-50 cursor-pointer"
        >
          <span class="text-gray-500 mx-auto text-center pt-2">
            העלה תמונה כחלק מפתיח או סיום של מילוי טופס
          </span>
          <input
            bind:value={formStep.img}
            accept="image/png, image/jpeg"
            type="file"
            name="file"
            id="file"
            class="hidden"
          />
        </label>
      </div>
    </div>
  </div>
{/if}
