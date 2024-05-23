<script>
  let { forms } = $props();
  console.log(forms)
</script>

<div class="cards grid-cols-1 lg:grid-cols-3 mx-auto">
  {#each forms as form}
    <div class="card hover:shadow-lg hover:bg-teal-300">
      <a
        href={`/builder?form=${form.id}`}
        class="card-body shadow-lg rounded-md bg-teal-50 text-center"
      >
        <h3 class="card-title text-center">{form.name}</h3>
        <p>0 תוצאות</p>
      </a>
    </div>
  {/each}
</div>

<style>
  .cards {
    display: grid;
    position: relative;
    /* grid-auto-columns: 1fr;
    grid-template-rows: repeat(1fr, auto); */
    gap: 1rem;
    /* grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); */
    grid-auto-flow: row;
  }
</style>