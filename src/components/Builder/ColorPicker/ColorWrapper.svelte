<script>
	export let wrapper;
	export let isOpen;
	export let isPopup;
	/* svelte-ignore unused-export-let */
	export let toRight;
	export let name;
</script>

<div
	id={name}
	class="wrapper"
	bind:this={wrapper}
	class:isOpen
	class:isPopup
	role={isPopup ? "dialog" : undefined}
	aria-label="color picker"
>
	<slot />
</div>

<style>
	div {
		padding: 8px 5px 5px 8px;
		background-color: #a9a993;
		border-radius: 12px;
		box-shadow: 0 0 9px 0px rgba(0, 0, 0, 0.2);
		display: none;
		width: max-content;
		z-index: 12;
	}

	.isOpen {
		display: block;
	}
	.isPopup {
		position: absolute;
		top: -50px;
		left: -130px;
		z-index: 111111111;
		overflow: auto;
	}
</style>
