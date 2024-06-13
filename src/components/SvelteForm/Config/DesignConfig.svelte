<script lang="ts">
	import { throttle } from '@github/mini-throttle';
  import { type FormDesign } from "../store.svelte";
  import ConfigWrapper from "./ConfigWrapper.svelte";
  import ConfigItem from "./ConfigItem.svelte";
  import ColorPicker from "svelte-awesome-color-picker";
  import ColorInput from "../../Builder/ColorPicker/ColorInput.svelte";
  import ConfigSetting from "./ConfigSetting.svelte";
  import { themes } from "$lib/themes"

  let { setTheme, onDesignEdit, formDesign = $bindable() }: { formDesign: FormDesign } = $props();

  let d = $derived(formDesign)

  $effect(() => { onDesignEdit('question', d.question)})
  $effect(() => { onDesignEdit('answer', d.answer) })
  $effect(() => { onDesignEdit('button', d.button) })
  $effect(() => { onDesignEdit('buttonText', d.buttonText) })

  const activeClass = `bg-neutral-400 rounded-md`

  const LABELS = {
    THEMES_TITLE: "ערכות נושא",
    DESIGN_TITLE: "הגדרות עיצוב",
    DESC_TITLE: "הגדרות בלוק תיאור",
    FIELDS_TITLE: "הגדרות בלוק שדות",
    FONTSIZE: "גודל גפן",
    ALIGN: "יישור",
  }

// Create Design Schemas...
  // Make a select dropdown...
</script>

<ConfigWrapper configLabel="">
  <div class="grid grid-cols-2">
  {#each themes as theme, index}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_interactive_supports_focus -->
    <div
      role="button"
      onclick={() => setTheme(theme)}
      style="background-color: {theme.backgroundColor}; border-color: {theme.button}22; box-shadow: 3px 3px 0 {theme.button};" 
      class="gap-2 mt-2 p-2 max-w-[100px] card card-compact card-bordered cursor-pointer !hover:border-indigo-500 transition">
        <h3 style="color: {theme.question};" class={`text-sm text-[${theme.question}]`}>{theme.name}</h3>
        <button style="background-color: {theme.button}; color: {theme.buttonText};" class={`w-12 rounded-md btn text-[10px] btn-xs`}>המשך</button>
    </div>
  {/each}
  </div>
</ConfigWrapper>

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

  <ConfigItem label={LABELS.DESC_TITLE}>
    <ConfigSetting label={LABELS.FONTSIZE}>
      <div class="flex gap-2 items-center px-2 join">

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            bind:group={d.descriptorsFontSize}
            value="sm"
            id="descFontSm" class="peer hidden sr-only" type="radio" name="descriptorsFontSize" aria-label="ימין" />
          <label
            for="descFontSm"
            class="peer-checked:bg-orange-600 block i-mdi:size-extra-small h-2rem w-2rem checked:bg-black checked:color-white cursor-pointer"
          ></label>
        </div>

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            id="descFontMd"
            bind:group={d.descriptorsFontSize}
            value="md"
           class="peer hidden sr-only" type="radio" name="descriptorsFontSize" aria-label="אמצע" />
          <label for="descFontMd" class="peer-checked:bg-orange-600 block i-mdi:size-m h-2rem w-2rem cursor-pointer"></label>
        </div>

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            id="descFontLg"
            bind:group={d.descriptorsFontSize}
            value="lg"
            class="peer hidden" type="radio" name="descriptorsFontSize" aria-label="שמאל" />
          <label for="descFontLg" class="peer-checked:bg-orange-600  block i-mdi:size-l h-2rem w-2rem cursor-pointer"></label>
        </div>
      </div>
    </ConfigSetting>

    <ConfigSetting label={LABELS.ALIGN}>
      <div class="flex gap-2 items-center px-2 join">

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            bind:group={d.descriptorsAlign}
            value="start"
            id="descAlignRight" class="peer hidden sr-only" type="radio" name="descriptorsAlign" aria-label="ימין" />
          <label
            for="descAlignRight"
            class="peer-checked:bg-blue-600 block i-mdi:format-align-right h-1.5rem w-1.5rem checked:bg-black checked:color-white cursor-pointer"
          ></label>
        </div>

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            bind:group={d.descriptorsAlign}
            value="center"
            id="descAlignCenter"
           class="peer hidden sr-only" type="radio" name="descriptorsAlign" aria-label="אמצע" />
          <label for="descAlignCenter" class="peer-checked:bg-blue-600 block i-mdi:format-align-center h-1.5rem w-1.5rem cursor-pointer"></label>
        </div>

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            id="descAlignEnd"
            bind:group={d.descriptorsAlign}
            value="end"
            class="peer hidden" type="radio" name="descriptorsAlign" aria-label="שמאל" />
          <label for="descAlignEnd" class="peer-checked:bg-blue-600  block i-mdi:format-align-left h-1.5rem w-1.5rem cursor-pointer"></label>
        </div>
      </div>
    </ConfigSetting>
  </ConfigItem>


  <ConfigItem label={LABELS.FIELDS_TITLE}>
    <ConfigSetting label={LABELS.FONTSIZE}>
      <div class="flex gap-2 items-center px-2 join">

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            bind:group={d.fieldsFontSize}
            value="sm"
            id="fieldsFontSm" class="peer hidden sr-only" type="radio" name="fieldsFontSize" aria-label="ימין" />
          <label
            for="fieldsFontSm"
            class="peer-checked:bg-orange-600 block i-mdi:size-extra-small h-2rem w-2rem checked:bg-black checked:color-white cursor-pointer"
          ></label>
        </div>

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            bind:group={d.fieldsFontSize}
            value="md"
            id="fieldsFontMd"
           class="peer hidden sr-only" type="radio" name="fieldsFontSize" aria-label="אמצע" />
          <label for="fieldsFontMd" class="peer-checked:bg-orange-600 block i-mdi:size-m h-2rem w-2rem cursor-pointer"></label>
        </div>

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            id="fieldsFontLg"
            bind:group={d.fieldsFontSize}
            value="lg"
            class="peer hidden" type="radio" name="fieldsFontSize" aria-label="שמאל" />
          <label for="fieldsFontLg" class="peer-checked:bg-orange-600  block i-mdi:size-l h-2rem w-2rem cursor-pointer"></label>
        </div>
      </div>
    </ConfigSetting>

    <ConfigSetting label={LABELS.ALIGN}>
      <div class="flex gap-2 items-center px-2 join">

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            bind:group={d.fieldsAlign}
            value="start"
            id="fieldsAlignRight" class="peer hidden sr-only" type="radio" name="fieldsAlign" aria-label="ימין" />
          <label
            for="fieldsAlignRight"
            class="peer-checked:bg-blue-600 block i-mdi:format-align-right h-1.5rem w-1.5rem checked:bg-black checked:color-white cursor-pointer"
          ></label>
        </div>

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            bind:group={d.fieldsAlign}
            value="center"
            id="fieldsAlignCenter"
           class="peer hidden sr-only" type="radio" name="fieldsAlign" aria-label="אמצע" />
          <label for="fieldsAlignCenter" class="peer-checked:bg-blue-600 block i-mdi:format-align-center h-1.5rem w-1.5rem cursor-pointer"></label>
        </div>

        <div class="join-item has-[:checked]:bg-gray-100 p-2">
          <input 
            id="fieldsAlignEnd"
            bind:group={d.fieldsAlign}
            value="end"
            class="peer hidden" type="radio" name="fieldsAlign" aria-label="שמאל" />
          <label for="fieldsAlignEnd" class="peer-checked:bg-blue-600  block i-mdi:format-align-left h-1.5rem w-1.5rem cursor-pointer"></label>
        </div>
      </div>
    </ConfigSetting>
  </ConfigItem>



</ConfigWrapper>

<style>
  input[type="radio"]:checked {
    background: gray;
  }
</style>