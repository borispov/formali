<script lang="ts">

  interface Label {
    id?: string;
    question?: string;
    textColor: string;
    required?: boolean;
    children: any;
    className?: string;
  }

  let {
    id, question, textColor, required = false, children, className
  }: Label  = $props();

</script>

<label
  for={id}
  class={`
  [ text-lg sm:text-xl xl:text-3xl font-medium block ]
  [ ${textColor} ${className ?? ''} ]
  [ leading-[1.35em] lg:leading-normal ]`}
>
  {@render children()}
  {#if required}
  <sup class="text-red-600"> * </sup>
  {/if}
</label>