<script>
  let { forms } = $props();
  console.log(forms)
</script>

<div class="cards">
  {#each forms as form}
  <h1>{form.id}</h1>
    <div class="flex flex-col w-full">
      <a
        href={`/builder?form=${form.id}`}
        class="text-center h-40 flex items-center justify-center"
      >
        <h3 class="text-lg font-light px-2 line-clamp-4">{form.name}</h3>
      </a>
      <div
        class="py-4 px-1 border-t border-gray-200 flex items-center justify-between"
      >
        <span>0 תוצאות</span>
        <div class="i-mdi:dots-grid w-4 h-4 cursor-pointer"></div>
      </div>
    </div>
  {/each}
</div>

<style>
  .cards {
    display: grid;
    position: relative;
    grid-auto-columns: 1fr;
    grid-template-rows: repeat(1fr, auto);
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-auto-flow: row;
  }
</style>
