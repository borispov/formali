<script lang="ts">
	import PocketBase from 'pocketbase'
	const pb = new PocketBase('http://localhost:8090/')

  interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

  let { ...props }: UserAuthFormProps = $props();

  let isLoading = $state<boolean>(false)

  // is this redirect sufficient?
  if (pb.authStore.isValid) {
    window.location.href = '/dashboard'
  }

	async function onGoogleLogin() {
    isLoading = true
		const authData = await pb.collection('users').authWithOAuth2({provider: 'google'})

		const { meta } = authData
		console.log('name: ', meta.name)

		if (meta && meta.isNew) {
			const formData = new FormData();
			const response = await fetch(meta.avatarUrl);
			if (response.ok) {
				const file = await response.blob();
				formData.append('avatar', file);
				formData.append('avatarURL', meta.avatarURL);
			}

			formData.append('name', meta.name);
			console.log('appending a whole new pieces of data')
			await pb.collection('users').update(authData.record.id, formData);
      isLoading = false
		}

    const cookieString = pb.authStore.exportToCookie({ httpOnly: false });
    console.log('setting cookie: ', cookieString)
    document.cookie = cookieString
    // do we need this??
    if (pb.authStore.isValid) {
      window.location.href = '/dashboard'
    }
	}

  async function onEmailAuth(email, pw) {
    isLoading = true
		const authData = await pb.collection('users').authWithPassword(email, pw)

    if (pb.authStore.isValid) {
      const cookieString = pb.authStore.exportToCookie({ httpOnly: false });
      console.log('setting cookie: ', cookieString)
      document.cookie = cookieString
    // do we need this??
      window.location.href = '/dashboard'
    }


  }

  async function onSubmit(event: SubmitEvent) {
    event.preventDefault()
    isLoading = true
    onGoogleLogin();

    setTimeout(() => {
      isLoading = false
    }, 3000)
  }
</script>

<div class="p-6 space-y-6 shadow-xl">
	<p class="font-semibold text-center">שלום, התחבר באמצעות</p>
	<div class="flex flex-wrap space-y-4 space-x-0 md:flex-wrap md:space-x-4 md:space-y-0">
		<button onclick={onGoogleLogin} class="btn btn-circled variant-ringed-surface w-full gap-2">
      <span class="i-mdi:google h-6 w-6"></span>Google
    </button>
		<!-- <button class="btn btn-circled text-white w-full gap-2" style="background-color: #4267B2;">
      <span class="i-mdi:facebook h-6 w-6"></span>Facebook
    </button> -->
	</div>
	<div class="text-center relative">
		<span class="text-xs z-10 bg-surface-100-800-token p-2">או המשך עם אימייל</span>
		<span class="text-xs block z-10 bg-surface-100-800-token p-2">(כניסה באמצעות סיסמא ואימייל אינה זמינה כעת)</span>
	</div>
	<form onsubmit={onSubmit} class="space-y-4">
		<label class="label" for="email">
			<span>אימייל</span>
			<input name="email" type="email" placeholder="name@example.com" class="input grow ms-2" />
		</label>
		<label class="label" for='password'>
			<span>סיסמא</span>
			<input name="password" type="password" value="password" class="input grow ms-2" />
		</label>
    <button disabled={true} class="btn btn-wide glakkkkkkkkss w-full">
      התחבר באמצעות אימייל
      {#if isLoading}
      <span class="loading loading-infinity loading-sm"></span>
      {/if}
    </button>
	</form>
	<div class="flex justify-between flex-wrap">
		<p class="text-sm unstyled py-2 text-slate-500">
			אין חשבון עדיין? <a href="/" class="font-bold underline underline-offset-2">הרשם עכשיו</a>
		</p>
	</div>
</div>

