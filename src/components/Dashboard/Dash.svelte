<script>
	import { showModal } from '$components/SvelteCommon/Modal.svelte';
  import FormsList from '$components/Dashboard/FormList.svelte'
  import PocketBase from 'pocketbase';
  import { onMount } from 'svelte';
  import CreateForm from './CreateForm.svelte';

  const PB_URL = import.meta.env.PUBLIC_PB_URL || "http://localhost:8090/";
  const pb = new PocketBase(PB_URL)

  let userId = $state({})
  let forms = $state([])
  let error = $state('')
  let userData = $state({})

  async function fetchForms() {
      const dataForms = await pb.collection('forms').getFullList({ sort: '-created' })
      console.log("RE_FILLING_FORMS ...")
      error = ''
      return dataForms.map(({ name, design, formSteps, id }) => ({ name, design, formSteps, id}))
  }

  async function deleteForm(formId) {
    await pb.collection('forms').delete(formId)
    forms = await fetchForms()
  }

  onMount(async () => {
    console.log('on mount...')
    if (pb.authStore.isValid ) {
      await pb.collection('users').authRefresh()
      // set user id
      userId = pb.authStore.model.id
      forms = await fetchForms(forms)
      userData = pb.authStore.model
    } else {
      console.error("USER IS NOT LOGGED IN")
      // window.location.href = '/login'
    }
  })

  async function onCreateForm() {
    const data = $state({ userId })
    const res = await showModal(formCreator, data)
    // re-fetch forms again
    forms = await fetchForms(forms)
  }



</script>

<main>
  <header>
    <nav class="w-full border-b p-2 flex items-center flex justify-between">
      <div class="flex items-center gap-8">
        <div class="h-4rem w-4rem rounded circle bg-white border-black">
          +
        </div>

        <a href="#">דשבורד</a>
        <a href="#">הגדרות חשבון</a>
        <a href="#">סגל</a>
      </div>

      <div class="flex items-center gap-2">
        <ul class="flex gap-2 items-center justify-center">
        </ul>
      </div>

      <div class="flex items-center gap-4 px-12">
        <button class="items-center gap-2 py-1 px-4 button button-secondary rounded-sm !bg-teal-800 !text-white" >
        שדרג
          <div class="i-mdi:arrow-up w-4 h-4"></div>
        </button>

        <div class={`avatar ${'placeholder'} w-8 dropdown`}>
          <div tabindex="0" role="button" class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {#if userData.avatarURL}
            <img src={userData.avatar} alt="avatar" />
            {:else}
            <span class="text-xl">{userData?.name && userData.name[0]}</span>
            {/if}
          </div>
          <ul tabindex="0" class="menu dropdown-content z-[1] shadow-sm bg-base-100 rounded-box mt-12 ml-12">
            <li><a href='/logout'>התנתק</a></li>
          </ul>
        </div>

      </div>
    </nav>
  </header>

  <div class="border-b mt-10 relative">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between pb-2">
      <h1 class="text-2xl font-bold leading-tight tracking-light text-gray-900">הטפסים שלך</h1>
      {#snippet formCreator(data)}
        <CreateForm data={data} />
      {/snippet}
      <button
        onclick={() => onCreateForm()}
        class="inline-flex gap-4 items-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        צור טופס
        <div class="i-mdi:note-plus text-white w-1.5rem h-1.5rem"></div>
      </button>
      <div class="content"></div>
      <div class="errors"></div>
    </div>
  </div>

  <div class="mt-6">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      {#key forms}
        <FormsList {forms} removeHandler={deleteForm} />
      {/key}
    </div>
  </div>

  <div class="mt-8 pt-10 borer-t border-dashed border-teal-200">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <h2 class="text-xl font-bold text-gray-800">הגדרות</h2>
    </div>
  </div>
</main>
