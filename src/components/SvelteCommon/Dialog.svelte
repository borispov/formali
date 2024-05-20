<script>
	let { children, modal, ...rest } = $props();

	function show(node) {
		if (modal) node.showModal();
	}
</script>

<dialog use:show {...rest}>
	{@render children()}	
</dialog>
