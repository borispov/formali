<script lang="ts">

  // still need to decide whether to use this sort of
  // class builder or use utopia's way with auto scale stuff
  function getFontSize(val: string) {
    return val == 'lg' ?
      'sm:text-lg text-2xl xl:text-4xl'
      : val == 'md' ?
      'sm:text-base text-lg xl:text-2xl'
      : 'sm:text-small text-base xl:text-lg'
  }

  import { designStore2 } from "$lib/store/design";
  let design = $state(designStore2);

  let fontSize = $state()

  $effect(() => {
    let tmp = designStore2.get()
    fontSize = tmp?.fieldsFontSize
  })

  interface Label {
    id?: string;
    required?: boolean;
    children: any;
    className?: string;
  }

  let {
    id,
    required = false,
    children
  }: Label  = $props();

</script>

<label
  data-el="question"
  for={id}
  class={`
  [ font-medium block ]
  [ leading-[1.35em] lg:leading-normal ]`}
>
  {@render children()}
  {#if required}
  <sup class="!text-red-600 font-bold"> * </sup>
  {/if}
</label>
