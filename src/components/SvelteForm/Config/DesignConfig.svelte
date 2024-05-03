<script lang="ts">
  import { type FormDesign } from "../store.svelte.ts";
  import ConfigWrapper from "./ConfigWrapper.svelte";
  import ConfigItem from "./ConfigItem.svelte";
  import ColorPicker from "svelte-awesome-color-picker";
  import ColorInput from "../../Builder/ColorPicker/ColorInput.svelte";
  import ConfigSetting from "./ConfigSetting.svelte";

  let { formDesign = $bindable() }: { formDesign: FormDesign } = $props();

  // Create Design Schemas...
  // Make a select dropdown...
</script>

<ConfigWrapper configLabel="הגדרות עיצוב">
  <ConfigItem label="שאלות">
    <ColorPicker
      label="questions"
      isAlpha={false}
      bind:hex={formDesign.colors.question}
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
      bind:hex={formDesign.colors.answer}
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
      bind:hex={formDesign.colors.button}
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
      bind:hex={formDesign.colors.buttonText}
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
  </ConfigItem>
</ConfigWrapper>
