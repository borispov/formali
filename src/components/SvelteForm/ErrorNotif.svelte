<script>
  let { msg } = $props();
</script>

<div
  class="error mt-4 flex items-center py-2 px-4 text-sm text-red-800 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-400 w-3/5 rounded-2xl"
  role="alert"
>
  <svg
    class="flex-shrink-0 inline w-4 h-4 ml-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
    />
  </svg>
  <span class="sr-only">מידע</span>
  <div>
    <span class="font-medium">שגיאה! </span>
    {msg}
  </div>
</div>
