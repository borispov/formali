<script>
  let { required = $bindable() } = $props();
</script>

<div class="mt-8">
  <div class="relative mt-2 flex items-start w-full">
    <div class="flex h-6 items-center">
      <input
        bind:checked={required}
        type="checkbox"
        name="required"
        id="required"
        class="h-4 w-4 rounded border-neutral-300 focus:ring-blue-600 text-blue-600"
      />
    </div>
    <div class="mr-3 text-sm leading-6">
      <label for="required">שדה חובה</label>
      <p id="description" class="text-gray-500">
        משתמשים יהיו מחויבים למלא שדה חובה בכדי להשלים את הטופס במלואו.
      </p>
    </div>
  </div>
</div>
