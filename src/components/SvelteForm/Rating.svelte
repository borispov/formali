<script lang="ts">
  import { type RatingStep } from "./store.svelte.ts";
  import FieldLabel from "./FieldLabel.svelte";
  import FieldDescription from "./FieldDescription.svelte";

  interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }

  let { rating = $bindable(), field }: { field: FormStep; rating: any } =
    $props();

  const txt = $derived(
    field.design.textColor.startsWith("text-")
      ? field.design.textColor
      : `text-[${field.design.textColor}]`,
  );

  const bg = $derived(
    field.design.bg.startsWith("bg-")
      ? field.design.bg
      : `bg-[${field.design.textColor}]`,
  );

  const supClass =
    "transition-all bg-transparent border-b-2 border-b-neutral-600 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 focus:border-b-neutral-100 outline-0";

  let state = $state({
    hovered: 0,
    rating: rating || 0,
  });

  function hoverOverStar(starIndex: number) {
    state.hovered = starIndex;
  }

  function selectStar(starIndex: number) {
    state.rating = starIndex;
    field.rating = starIndex;
  }
</script>

<div>
  <FieldLabel {...field} textColor={txt} className={supClass}>
    {field.question}
  </FieldLabel>
  {#if field.description}
    <FieldDescription textColor={txt}>
      {@html field.description}
    </FieldDescription>
  {/if}

  <span
    class="hidden bg-yellow-300 bg-yellow-200 bg-yellow-100 bg-yellow-500 bg-yellow-600 bg-yellow-700"
  ></span>
  <div class="flex gap-1 mt-8">
    <div
      role="img"
      class:bg-yellow-200={state.hovered >= 1 || state.rating >= 1}
      onmouseenter={() => hoverOverStar(1)}
      onmouseleave={() => hoverOverStar(0)}
      onclick={() => selectStar(1)}
      class="i-mdi:star w-2em h-2em cursor-pointer"
    ></div>
    <div
      role="img"
      class:bg-yellow-400={state.hovered >= 2 || state.rating >= 2}
      onmouseenter={() => hoverOverStar(2)}
      onmouseleave={() => hoverOverStar(0)}
      onclick={() => selectStar(2)}
      class="i-mdi:star w-2em h-2em cursor-pointer"
    ></div>
    <div
      role="img"
      class:bg-yellow-500={state.hovered >= 3 || state.rating >= 3}
      onmouseenter={() => hoverOverStar(3)}
      onmouseleave={() => hoverOverStar(0)}
      onclick={() => selectStar(3)}
      class="i-mdi:star w-2em h-2em cursor-pointer"
    ></div>
    <div
      role="img"
      class:bg-yellow-600={state.hovered >= 4 || state.rating >= 4}
      onmouseenter={() => hoverOverStar(4)}
      onmouseleave={() => hoverOverStar(0)}
      onclick={() => selectStar(4)}
      class="i-mdi:star w-2em h-2em cursor-pointer"
    ></div>
    <div
      role="img"
      class:bg-yellow-700={state.hovered >= 5 || state.rating >= 5}
      onmouseenter={() => hoverOverStar(5)}
      onmouseleave={() => hoverOverStar(0)}
      onclick={() => selectStar(5)}
      class="i-mdi:star w-2em h-2em cursor-pointer"
    ></div>
  </div>
</div>

<style>
  .shine {
    background: yellow;
  }
</style>
