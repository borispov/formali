<script>
  let {
    configLabel = 'הגדרות שדה',
    children
  } = $props();

</script>

<div class="sidebar-config-wrapper my-8 lg:px-6 md:px-4 px-2 divide-y-1 divide-teal-700 divide-dashed">

  <div class="sidebar-config-label">
    <span class="block">
      {configLabel}
    </span>

  {#if children}
    {@render children()}
  {/if}
  </div>

  
</div>

<style>
  .sidebar-config-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    width: 256px;
    flex-shrink: 0;
    padding-right: 16px;
  }

  .sidebar-config-label {
    color: rgb(38, 38, 39);
    font-size: 14px;
    line-height: 20px;
    margin: 8px 0px;
    border: none;

    span {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

  }
</style>
