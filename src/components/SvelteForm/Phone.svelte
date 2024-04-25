<script>
  import { imask } from "@imask/svelte";
  import ErrorNotif from "./ErrorNotif.svelte";

  let { errorMsg = "", field = $bindable(), stepIndex, handler } = $props();

  const options = {
    mask: "{+972}   000 0000 000",
    lazy: false,
    placeholderChar: " ",
  };

  function accept({ detail: maskRef }) {
    console.log("accept", maskRef.value);
    field.value = maskRef.value;
  }

  function complete({ detail: maskRef }) {
    console.log("complete", maskRef.unmaskedValue);
    field.isValid = true;
  }
</script>

<div data-step={field.type} data-step-index={stepIndex}>
  <label
    for={field.id}
    class="text-lg sm:text-xl xl:text-3xl font-medium text-gray-700 leading-[1.35em] lg:leading-normal"
  >
    {field.question}
    {#if field.required}
      <sup class="text-red-600"> * </sup>
    {/if}
  </label>

  <p class="text-lg font-normal leading-relaxed text-neutral-600">
    {field.description}
  </p>

  <input
    bind:value={field.value}
    use:imask={options}
    onaccept={accept}
    oncomplete={complete}
    name={field.id}
    id={field.id}
    type="tel"
    onkeydown={(e) => e.key == "Enter" && handler && handler()}
    placeholder={field.placeholder}
    required={field.required}
    class={`transition-all bg-transparent border-b-2 border-b-neutral-600 text-gray-800 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 placeholder:text-xl lg:placeholder:text-3xl focus:border-b-neutral-100 outline-0 decoration-none`}
  />
  {#if errorMsg}
    <ErrorNotif msg={errorMsg} />
  {/if}
</div>
