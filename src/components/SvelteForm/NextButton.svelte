<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  interface Props {
    text: string;
    showPressEnter?: boolean;
    className?: string;
    textColor?: string;
    handler?: MouseEventHandler<HTMLButtonElement>;
    center?: boolean;
    disabled?: boolean;
  }

  let {
    disabled = false,
    text = "המשך",
    center = false,
    showPressEnter = true,
    className,
    handler,
  }: Props = $props();

  const buttonClass = `button-xl inline-flex items-center px-6 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500 custom-button-background-color custom-button-text-color`;
</script>

<div class="btn-container" style="--center: {center ? 'auto' : '100%'}">
  <button
    {disabled}
    onclick={handler ?? null}
    data-el="step-cta"
    class={`
      [ inline-flex justify-between items-center ]
      [ bg- border-[rgba(0, 0, 0, 0.1) 0px 3px 12px 0px] ]
      [ px-4 py-2 rounded-md ]
      [ bg-gray-700 hover:bg-gray-800 text-white ]
      !custom-button-background-color !custom-button-text-color
      `}
  >
    המשך
    <div class="i-mdi:arrow-left-bold h-5 w-5 mr3"></div>
  </button>

  <!-- <button onclick={handler ?? null} class={buttonClass}>
    {text}
  </button> -->
  {#if showPressEnter && window && window.navigator && !window.navigator?.userAgent
      .toLowerCase()
      .includes("mobile")}
    <span> לחץ <strong>Enter ↵</strong> </span>
  {/if}
</div>

<style>
  .custom-button-background-color {
    background: var(--bg);
  }

  .custom-button-text-color {
    color: var(--text);
  }

  .btn-container {
    align-items: center;
    display: flex;
    gap: 12.5px;
    width: var(--center);
  }

  .btn-container > span {
    color: var(--btn-text-color);
    font-size: 0.825rem;
  }

  .btn-container > span strong {
    font-weight: bolder;
    letter-spacing: 0.04em;
  }

  @media screen and (max-width: 599px) {
    .btn-container {
      align-items: flex-start;
      flex-direction: column;
      gap: 17.5px;
    }

    .btn-container > span {
      font-size: 1.125rem;
    }
  }
</style>
