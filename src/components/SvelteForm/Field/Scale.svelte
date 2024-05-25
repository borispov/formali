<script lang="ts">
  import { type ScaleStep } from "../store.svelte.ts";
  import FieldLabel from "../FieldLabel.svelte";
  import FieldDescription from "../FieldDescription.svelte";

  import { toCssBg, toCssTextColor } from "../../../utils/objToCss.ts";

  let { setVal, field = $bindable() }: { field: ScaleStep; setVal: Function } =
    $props();

  let checked = $state();
  let checkedIndex = $state();

  const txt = $derived(toCssTextColor(field.design.textColor));
  const bg = $derived(toCssBg(field.design.bg));

  const rangeLength = $derived(field.steps - (field.zero_index ? 0 : 1));

  const selectClass = "transition-all bg-transparent mt-8 pb-2";
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

  <fieldset class="flex gap-2" role="radiogroup">
    {#each { length: rangeLength } as _, index}
      <div class="mt-6 inline-block">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div
          data-index={index}
          onclick={() => setVal(field, index)}
          tabindex={checkedIndex === index ? 0 : -1}
          data-step="scale-step"
          aria-checked={checkedIndex === index}
          role="radio"
          class={`
          [ flex items-center shadow-sm outline-none justify-center text-center select-none ]
          [ cursor-pointer rounded-lg border bg-transparent h-full py-4 px-6 ]
            [ hover:bg-white/[.30] ]
          ${checkedIndex === index ? "bg-[rgba(255_255_255_0.3)] border-neutral-600 ring-indigo-500 shadow-lg" : "bg-[rgba(255_255_255_0.1)]"}`}
        >
          <span class="flex flex-1 text-[20px]">{index}</span>
        </div>
      </div>
    {/each}
  </fieldset>
</div>
