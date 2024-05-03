<script lang="ts">
  import { getContext } from "svelte";
  const formDesign = getContext('theme')
  console.log(formDesign)

  interface Label {
    id?: string;
    textColor: string;
    required?: boolean;
    children: any;
    className?: string;
  }

  let {
    id, textColor, required = false, children, className
  }: Label  = $props();

</script>

<label
  data-el="question"
  for={id}
  class={`
  [ text-lg sm:text-xl xl:text-3xl font-medium block ]
  [ ${textColor} ${className ?? ''} ]
  [ leading-[1.35em] lg:leading-normal ]`}
>
  {@render children()}
  {#if required}
  <sup class="!text-red-600 font-bold"> * </sup>
  {/if}
</label>