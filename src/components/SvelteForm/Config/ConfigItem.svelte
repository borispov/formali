<script>
  let {
    marginTop = 8,
    group = false,
    label = '',
    children = $bindable(),
 } = $props();

  const mt = `mt-${marginTop}`

</script>

<div class={`[ ${mt} ]`}>

  {#if group}
    {#if label}
      <h3 class="pt-2 text-neutral-700 text-base font-bold">{label}</h3>
    {/if}
    <div class="flex flex-col w-full gap-6">
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}

  {#if !group}
    {#if label}
      <h4 class="text-neutral-700 text-xs font-bold">{label}</h4>
    {/if}
    <div class="wrapper mt-1">
    {#if children}
      {@render children()}
    {/if}
    </div>
  {/if}
</div>
