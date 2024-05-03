<script lang="ts">
  import { type FormStep } from "../store.svelte";
  import FieldLabel from "../FieldLabel.svelte";
  import FieldDescription from "../FieldDescription.svelte";
  import SignaturePad from "signature_pad";
  import { onMount } from "svelte";

  let { field }: { field: FormStep } = $props();

  const helperMessage = "חתום באמצעות אצבע אחת";

  // Styling & CSS
  const fieldClass = "transition-all mt-8 outline-0";
  const txt = $derived(
    field.design.textColor.startsWith("text-")
      ? field.design.textColor
      : `text-[${field.design.textColor}]`,
  );

  let signatureList = $state();
  let signaturePad = $state(null);
  let drawing = $state(false);

  function onSignatureInput() {
    signatureList = signaturePad.toDataURL();
    if (typeof signatureList === "string") {
      field.value = signatureList;
    }
  }

  function onClear() {
    if (signaturePad) {
      signaturePad.clear();
      signatureList = "";
      field.value = "";
    }
  }

  $effect(() => {
    if (signaturePad && !drawing) {
      console.log(`capturing signature...`);
      let isEmpty = signaturePad.isEmpty();
      isEmpty || onSignatureInput();
    }
  });

  onMount(() => {
    const canvas = document.querySelector("canvas");
    signaturePad = new SignaturePad(canvas, {
      backgroundColor: "white",
    });
    function setCanvas() {
      let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      if (width > 600) {
        canvas.width = 500;
        canvas.height = 250;
        signaturePad.width = 500;
        signaturePad.height = 250;
      } else {
        canvas.width = 300;
        canvas.height = 150;
        signaturePad.width = 300;
        signaturePad.height = 150;
      }
    }
    setCanvas();
    onClear();

    signaturePad.addEventListener("beginStroke", () => {
      drawing = true;
    });

    signaturePad.addEventListener("endStroke", () => {
      drawing = false;
    });
  });
</script>

<div>
  <FieldLabel {...field} textColor={txt} className={fieldClass}>
    {field.question}
  </FieldLabel>
  {#if field.description}
    <FieldDescription textColor={txt}>
      {@html field.description}
    </FieldDescription>
  {/if}

  <div class="mt-8 max-w-[260px] sm:max-w-[350px] md:max-w-[500px]">
    <canvas class="mt-8 bg-white border border-dashed shadow-lg rounded-lg"
    ></canvas>

    <div class="flex justify-between px-2 text-xs text-neutral-500 mt-2">
      <small class="text-sm">{helperMessage}</small>
      <button
        onclick={(e) => {
          e.preventDefault();
          onClear();
        }}>נקה</button
      >
    </div>
  </div>
</div>

<style>
  canvas {
    touch-action: none;
    user-select: none;
  }
</style>
