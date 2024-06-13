<script lang="ts">
	import PocketBase from 'pocketbase';
  import { formThemeDefaults } from "$lib/utils/formDefaults";

  let { data = $bindable() } = $props();

  let error = $state('')

  const welcomeTitle = `יצירת טופס חדש`;
  const paraText = ``;
  const submitText = "צור טופס";

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.target)

    let formName = data.get('formName')
    let userId = data.get('userId')

    const pb = new PocketBase('http://localhost:8090')


    // TODO: Is This Enough? Probably not. Maybe worry about it later...
    if (!formName || !userId) {
      error = 'לא ניתן ליצור טופס ללא שם'
      return
    }

  try {
      await pb.collection('forms').create({
        name: formName,
        design: formThemeDefaults,
        formSteps: [],
        endings: [],
        user: userId,
      })

    window && window.Toastify({
      text: "טופס נוצר בהצלחה",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      style: {
        display: 'flex',
        alignItems: 'center',
        color: '#363636',
        background: 'white',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)',
        maxWidth: '350px',
        pointerEvents: 'auto',
        padding: '8px 10px',
        borderRadius: '4px',
        lineHeight: '1.3',
        willChange: 'transform',
      },
      onClick: function(){} // Callback after click
    }).showToast();

      e.target.submit()
    } catch (error) {
      console.log(error)
    }

  }
</script>

<!-- svelte-ignore a11y-no-static-element-->
<div
  class="content opacity-100 relative w-full max-w-md px-4 h-full md:h-auto mx-auto"
  dir="rtl"
>
  <!-- Modal content -->
  <div
    class="flex items-center justify-center flex-col bg-white rounded-lg relative dark:bg-gray-700"
  >
    <div class="flex justify-end p-2">
      <button
        id="cta-submit"
        type="button"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        data-modal-toggle="form-create-modal"
      >
      </button>
    </div>
    <form
      onsubmit={handleSubmit}
      method="dialog"
      name="form-create"
      class="form space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
    >
      <h3 class="text-xl font-medium text-gray-900 dark:text-white">
        {welcomeTitle}
      </h3>
      <p class="text-gray-600 text-sm">
        {paraText}
      </p>
      <div>
        <label
          for="formName"
          class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >שם הטופס</label
        >
        <input
          type="text"
          name="formName"
          id="formName"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="שם הטופס"
          onkeypress={() => error = ''}
        />
        <input name="userId" hidden value={data.userId} type="text" class="hidden" />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {submitText}
      </button>
    </form>
    <div
      class="errorwrapper text-red-600 mt-2 bg-yellow-300 text-base font-bold"
    >
      <div class="errors">
        {#if error}
          {error}
        {/if}
      </div>
    </div>
  </div>
</div>
