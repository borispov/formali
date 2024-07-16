<script lang="ts">
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
    welcome: "התחלה",
    ending: "סיום",
  };

  const flipDurationMs = 150;

  let {
    step,
    stepIndex,
    formCurrentIndex,
    mouseenter,
    mouseleave,
    selectStepHandler,
    canRemove,
    onRemoveHandler,
    className,
    bgColor,
    iconName = ''
  } = $props();
</script>

<button
  onmouseenter={mouseenter || null}
  onmouseleave={mouseleave || null}
  class={`
  ${className}
  [ flex items-center justify-start ]
  [ py-1 px-4 ]
    [ hover:bg-orange-300/80 shadow-sm hover:shadow-md transition ]
`}
  onclick={selectStepHandler}
>
  <div
    class="i-mdi:{iconName} w-6 h-6 me-4 bg-neutral-300 hover:bg-neutral-400"
  ></div>
  <div class="flex flex-col items-start">
    <span class="text-[14px] text-neutral-800 leading-6">
      {hebrewFieldTypes[step.type]}
    </span>
    <span class="text-xs text-neutral-400">
      {step.question}
    </span>
  </div>
  {#if canRemove}
    <span
      tabindex="0"
      role="button"
      onclick={onRemoveHandler}
      class="del i-mdi:trash w-4 h-4 mr-auto bg-teal-400 hidden hover:bg-teal-700"
    ></span>
  {/if}
</button>
