<script>
  let { formField = $bindable(), label, description } = $props();
</script>

<div class="mt-8">
  <div class="relative mt-2 flex items-start w-full">
    <div class="flex h-6 items-center">
      <input
        bind:checked={formField}
        type="checkbox"
        name="required"
        id="required"
        class="h-4 w-4 rounded border-neutral-300 focus:ring-blue-600 text-blue-600"
      />
    </div>
    <div class="mr-3 text-sm leading-6">
      <label for={formField}>{label}</label>
      <p class="text-gray-500">
        {description}
      </p>
    </div>
  </div>
</div>
