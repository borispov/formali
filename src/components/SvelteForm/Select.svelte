<script lang="ts">
  import { type FormStep } from "./store.svelte.ts";

  let checked = $state("");
  let checkedIndex = $state(null);

  let { field = $bindable() }: FormStep = $props();

  const options = $derived(
    field.options.map((opt) => ({ ...opt, isChecked: false })),
  );

  $effect(() => console.log(checkedIndex, checked));

  const selectClass =
    "transition-all bg-transparent border-b-2 border-b-neutral-600 text-gray-800 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 focus:border-b-neutral-100 outline-0";
</script>

<div>
  <div
    class={"text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal " +
      selectClass}
  >
    {field.question}
    {#if field.required}
      <sup class="text-red-600"> * </sup>
    {/if}
  </div>
  <p class="text-lg font-normal leading-relaxed text-neutral-600">
    {field.description}
  </p>
  <fieldset class="flex flex-col gap-2">
    {#each field.options as option, index}
      <div class="mt-6 inline-block">
        <label
          aria-checked={checkedIndex === index}
          role="radio"
          onclick={() => {
            checkedIndex = index;
          }}
          for={`option-${index}`}
          data-checked={checkedIndex === index}
          class={`relative flex cursor-pointer rounded-lg border bg-white p-2 shadow-sm focus:outline-none border-indigo-200 ring-2 border-transparent transition duration-75 ease-in-out ${checkedIndex === index ? "border-neutral-600 ring-indigo-500" : ""}`}
        >
          <input
            required={field.required ?? false}
            value={option}
            name={field.id ?? "select-01"}
            type="radio"
            class="sr-only"
            bind:group={checked}
          />
          <span class="flex flex-1">{option}</span>
          <svg
            class:hidden={checkedIndex !== index}
            class="h-5 w-5 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
      </div>
    {/each}
  </fieldset>
</div>
