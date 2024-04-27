<script>
  import { imask } from "@imask/svelte";
  import ErrorNotif from "./ErrorNotif.svelte";
  import FieldLabel from "./FieldLabel.svelte";

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

  const txt = $derived(
    field.design.textColor.startsWith("text-")
      ? field.design.textColor
      : `text-[${field.design.textColor}]`,
  );
  const bg = $derived(
    field.design.bg.startsWith("bg-")
      ? field.design.bg
      : `bg-[${field.design.textColor}]`,
  );
</script>

<div data-step={field.type} data-step-index={stepIndex ?? null}>
  <FieldLabel {...field} textColor={txt}>
    {field.question}
  </FieldLabel>

  <p class={"text-lg font-normal leading-relaxed " + txt + "/10"}>
    {@html field.description}
  </p>

  <input
    value={field.value}
    use:imask={options}
    onaccept={accept}
    oncomplete={complete}
    name={field.id}
    id={field.id}
    type="tel"
    onkeydown={(e) => e.key == "Enter" && handler && handler()}
    placeholder={field.placeholder}
    required={field.required}
    class={`transition-all bg-transparent border-b-2 border-b-neutral-600 text-gray-800 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 placeholder:text-base sm:placeholder:text-sm focus:border-b-neutral-100 outline-0 decoration-none`}
  />
</div>
