<script>
  import showToast from '$lib/utils/toast'
  let { forms, removeHandler } = $props();

</script>

<div class="cards grid-cols-1 lg:grid-cols-3 mx-auto">
  {#each forms as form}
    <div class="card hover:shadow-lg hover:bg-teal-300">
      <div
        class="card-body shadow-lg rounded-md bg-teal-50 text-center justify-center flex items-center"
      >
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <h3  
          onclick={(e) => window.location.href = `/builder?form=${form.id}`}
          class="cursor card-title text-center">{form.name}</h3>
        <div class="divider divider-primary"></div>
        <div class="flex justify-between items-center w-full">
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <div class="i-mdi:dots-vertical w-1.5rem h-1.5rem"></div>
              </div>
            </div>

            <!-- Sub-Menu -->
            <div class="mt-3 z-[1] card card-compact dropdown-content w-52 sshadow p2 bg-base-100 rounded-t-none">
              <div class="card-body flex-col flex gap-4">
                <button class="flex items-center gap-2" onclick={() => showToast(window, 'קישור לטופס הועתק')}>
                  <div class="i-mdi:share w-1.8rem h-1.8rem"></div>
                  <span class="text-base">שיתוף</span>
                </button>
                <button class="flex items-center gap-2" href="#" onclick={() => removeHandler(form.id)}>
                  <div class="i-mdi:trash w-1.8rem h-1.8rem">הסר</div>
                  <span class="text-base text-red font-bold">הסר</span>
                </button>
              </div>
            </div>

          </div>
          <p class="text-sm text-neutral-500">0 תוצאות</p>
        </div>
      </div>
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