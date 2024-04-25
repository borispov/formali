<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  interface Props {
    text: string;
    showPressEnter?: boolean;
    className?: string;
    textColor?: string;
    bgColor?: string;
    handler?: MouseEventHandler<HTMLButtonElement>;
    center?: boolean;
  }

  let {
    text = "המשךj",
    center = false,
    showPressEnter = true,
    className,
    bgColor,
    textColor,
    handler,
  }: Props = $props();

  const buttonClass = `inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500 custom-button-background-color custom-button-text-color`;
</script>

<div
  class="btn-container"
  style="--bg: {bgColor ?? 'var(--default-form-btn-bg)'}; --text: {textColor ??
    'var(--default-form-btn-text)'}; --center: {center ? 'auto' : '100%'}"
>
  <button onclick={handler ?? null} class={buttonClass}>
    {text}
  </button>
  {#if showPressEnter && !navigator?.userAgent.toLowerCase().includes("mobile")}
    <span> press <strong>Enter ↵</strong> </span>
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
    margin-top: 32px;
    width: var(--center);
  }

  .btn-container > span {
    color: var(--btn-text-color);
    font-size: 1.25rem;
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
      font-size: 1.5rem;
    }
  }
</style>
