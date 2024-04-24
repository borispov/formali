<script lang="ts">
	export let color: string;
</script>

<div class="color-input-wrapper">
	<input type="text" bind:value={color} name="text-color" class="color-input" />

	<div class="color-input__button">
		<input type="color" bind:value={color} />
		<div class="indicator__color" style="--indicator-color: {color};" />
	</div>
</div>

<style>
	.indicator__color {
		background: var(--indicator-color);
		width: 20px;
		padding: 0;
		height: 20px;
		vertical-align: middle;
		border-radius: 4px;
		border: 1px solid white;
		z-index: 4;
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
