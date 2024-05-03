<script>
  let {
    children,
    label = '',
  } = $props()
</script>

<div class="mt-2 flex flex-col w-full border-b">
  {#if label}
    <label for="title">{label}</label>
  {/if}

  {#if children}
    {@render children()}
  {/if}

</div>
