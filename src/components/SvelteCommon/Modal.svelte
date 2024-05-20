<script context="module">
	import { mount, unmount } from 'svelte';
	import Modal from './Modal.svelte';
	import Dialog from './Dialog.svelte';

	export function showModal(snippet, args) {
		return new Promise(resolve => {
			const modal = mount(Modal, {
				target: document.body,
				props: {
					snippet,
					args,
					onclose(e) {
						resolve(e.target.returnValue);
						unmount(modal);
					}
				}
			});
		});
	}
</script>

<script>
	let { snippet, args, ...rest } = $props();
</script>

<Dialog modal {...rest}>
	{@render snippet(args)}	
</Dialog>
