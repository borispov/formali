<script lang="ts">
  import { type FormStep } from "./store.svelte.ts";
  import FieldLabel from "./FieldLabel.svelte";
  import FieldDescription from "./FieldDescription.svelte";

  let checked = $state("");
  let checkedIndex = $state(null);

  let { field = $bindable() }: FormStep = $props();

  const options = $derived(
    field.options.map((opt) => ({ ...opt, isChecked: false })),
  );

  $effect(() => console.log(checkedIndex, checked));

  const txt = $derived(field.design.textColor.startsWith('text-') ? field.design.textColor : `text-[${field.design.textColor}]`)
  const bg = $derived(field.design.bg.startsWith('bg-') ? field.design.bg : `bg-[${field.design.textColor}]`)

  const selectClass = "transition-all bg-transparent border-b-2 border-b-neutral-600 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 focus:border-b-neutral-100 outline-0";
</script>

<div>
  <FieldLabel {...field} textColor={txt} className={selectClass}>
    {field.question}
  </FieldLabel>
  {#if field.description}
    <FieldDescription textColor={txt}>
      {@html field.description}
    </FieldDescription>
  {/if}

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
          class={`
          [ relative max-w-64 flex ]
          [ cursor-pointer rounded-lg border ${bg} ]
          [ py-2 px-4 shadow-sm ]
          [ focus:outline-none border-indigo-200 ring-2 border-transparent transition duration-75 ease-in-out ]
          ${checkedIndex === index ? "border-neutral-600 ring-indigo-500 shadow-lg" : ""}`}
        >
          <input
            required={field.required ?? false}
            value={option.value}
            name={field.id ?? "select-01"}
            type="radio"
            class="sr-only"
            bind:group={checked}
          />
          <span class="flex flex-1">{option.value}</span>
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


<style>
  
</style>