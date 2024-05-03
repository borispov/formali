<script lang="ts">
	export let labelElement: HTMLLabelElement;
	export let hex: string | undefined;
</script>

<label bind:this={labelElement} class="color-input-wrapper">
	<input
		type="text"
		bind:value={hex}
		name="text-color"
		class="color-input !py-2 border-gray-400 rounded-lg"
	/>

	<div class="color-input__button">
		<input
			on:click|preventDefault={() => {}}
			on:mousedown|preventDefault={() => {}}
			aria-haspopup="dialog"
			type="color"
			bind:value={hex}
		/>
		<div class="indicator__color" style="--indicator-color: {hex};" />
	</div>
</label>

<style>
	.indicator__color {
		background: var(--indicator-color);
		width: 28px;
		padding: 0;
		height: 28px;
		vertical-align: middle;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		z-index: 4;
		margin-inline-start: 8px;
	}

	.color-input-wrapper {
		display: flex;
		flex-flow: row nowrap;
		background: var(--color-onyx);
		align-items: center;
		border-radius: 8px;
	}

	.color-input {
		background: inherit;
		width: 85%;
		font-style: italic;
		height: auto;
		line-height: 100%;
		font-size: 14px;
	}

	.color-input__button {
		position: relative;
	}

	.color-input__button input {
		z-index: 0;
		border: 0;
		width: 22px;
		height: 22px;
		padding: 0;
		margin: 0;
		opacity: 0;
		position: absolute;
		background: transparent;
		cursor: pointer;
	}
</style>
