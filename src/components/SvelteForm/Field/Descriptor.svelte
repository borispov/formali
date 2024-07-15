<script lang="ts">
    import type { FormStep } from "../store.svelte";

    interface Props extends FormStep {
        type: string;
        bg?: string;
        img?: string;
    }

    import FieldLabel from "../FieldLabel.svelte";
    import FieldDescription from "../FieldDescription.svelte";

    let { id, question, description , img, bg, type }: Props = $props();

    const fieldClass =
        "transition-all bg-transparent border-b-2 border-b-neutral-600 mt-8 pb-2 question-input__text placeholder:italic placeholder:text-neutral-500 focus:border-b-neutral-100 outline-0";
</script>

<div data-el={type}>
    <FieldLabel {id} className={fieldClass}>
        {question}
    </FieldLabel>
    {#if description}
        <FieldDescription>
          <!-- <div class="border-[1px] border-dashed border-black/20">
            <div contenteditable class="border-[1px dashed rgba(143, 199, 255, 0.5)] outline-none"> -->
              {@html description}
            <!-- </div>
          </div> -->
        </FieldDescription>
    {/if}

    {#if img}
        <div class="mt-8">
            <img
                data-el="desc-img"
                src={img}
                alt={question}
                class="max-h-60 w-auto"
            />
        </div>
    {/if}
</div>
