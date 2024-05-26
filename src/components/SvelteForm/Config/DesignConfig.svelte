<script lang="ts">
	import { throttle } from '@github/mini-throttle';
  import { type FormDesign } from "../store.svelte";
  import ConfigWrapper from "./ConfigWrapper.svelte";
  import ConfigItem from "./ConfigItem.svelte";
  import ColorPicker from "svelte-awesome-color-picker";
  import ColorInput from "../../Builder/ColorPicker/ColorInput.svelte";
  import ConfigSetting from "./ConfigSetting.svelte";

  let { onDesignEdit, formDesign = $bindable() }: { formDesign: FormDesign } = $props();

  let d = $derived(formDesign)

  console.log(
    d
  )

  $effect(() => { onDesignEdit('question', d.question)})
  $effect(() => { onDesignEdit('answer', d.answer) })
  $effect(() => { onDesignEdit('button', d.button) })
  $effect(() => { onDesignEdit('buttonText', d.buttonText) })

  const activeClass = `bg-neutral-400 rounded-md`

  // Create Design Schemas...
  // Make a select dropdown...
</script>

<ConfigWrapper configLabel="הגדרות עיצוב">
  <ConfigItem label="שאלות">
    <ColorPicker
      label="questions"
      isAlpha={false}
      bind:hex={d.question}
      textInputModes={["hex", "rgb"]}
      components={{
        input: ColorInput,
      }}
    />
  </ConfigItem>

  <ConfigItem label="תשובות">
    <ColorPicker
      label="תשובות"
      isAlpha={false}
      bind:hex={d.answer}
      textInputModes={["hex", "rgb"]}
      components={{
        input: ColorInput,
      }}
    />
  </ConfigItem>

  <ConfigItem label="כפתור רקע">
    <ColorPicker
      label="questions"
      isAlpha={false}
      bind:hex={d.button}
      textInputModes={["hex", "rgb"]}
      components={{
        input: ColorInput,
      }}
    />
  </ConfigItem>

  <ConfigItem label="טקסט כפתור">
    <ColorPicker
      label="טקסט כפתור"
      isAlpha={false}
      bind:hex={d.buttonText}
      textInputModes={["hex", "rgb"]}
      components={{
        input: ColorInput,
      }}
    />
  </ConfigItem>

  <ConfigItem label="הגדרות בלוק תיאור">
    <ConfigSetting label="גודל גפן">
      <div class="flex gap-2 items-center px-2">
        <div
          class="i-mdi:size-extra-small h-2rem w-2rem border rounded-md border-neutral-200"
        ></div>
        <div class="i-mdi:size-m h-2rem w-2rem"></div>
        <div class="i-mdi:size-l h-2rem w-2rem"></div>
      </div>
    </ConfigSetting>

    <ConfigSetting label="יישור">
      <div class="flex gap-2 items-center px-2 join">

        <div class="join-item">
          <input 
            bind:group={d.descriptorsAlign}
            value="start"
            id="descAlignRight" class="peer hidden sr-only" type="radio" name="descriptorsAlign" aria-label="ימין" />
          <label
            for="descAlignRight"
            class="peer-checked:bg-blue-600 block i-mdi:format-align-right h-1.5rem w-1.5rem checked:bg-black checked:color-white cursor-pointer"
          ></label>
        </div>

        <div class="join-item">
          <input 
            bind:group={d.descriptorsAlign}
            value="center"
            id="descAlignCenter"
           class="peer hidden sr-only" type="radio" name="descriptorsAlign" aria-label="אמצע" />
          <label for="descAlignCenter" class="peer-checked:bg-blue-600 block i-mdi:format-align-center h-1.5rem w-1.5rem cursor-pointer"></label>
        </div>

        <div class="join-item">
          <input 
            id="descAlignEnd"
            bind:group={d.descriptorsAlign}
            value="end"
            class="peer hidden" type="radio" name="descriptorsAlign" aria-label="שמאל" />
          <label for="descAlignEnd" class="peer-checked:bg-blue-600  block i-mdi:format-align-left h-1.5rem w-1.5rem cursor-pointer"></label>
        </div>
      </div>
    </ConfigSetting>
    <span>
      Selected Alignment: 
      {d.descriptorsAlign}
    </span>
  </ConfigItem>
</ConfigWrapper>

<style>
  input[type="radio"]:checked {
    background: gray;
  }
</style>