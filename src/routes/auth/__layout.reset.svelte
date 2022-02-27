<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	import { authenticated, checkAuthentication } from '$lib/stores/auth.store';
	import Modal from '$lib/components/Modal.svelte';
	import { bind } from 'svelte/internal';

	let openModal = false;
	let modalTitle = 'Ne ndertim';
	let modalText = 'Ky funksion eshte ne ndertim';

	$: console.log(openModal);

	onMount(async () => {
		await checkAuthentication();
	});
</script>

<!-- <main class="container mx-auto p-8"> -->
<main class="container mx-auto p-8 h-screen flex flex-col items-center justify-center">
	<slot />
	<footer class="p-1 footer bg-base-200 text-base-content footer-center rounded">
		<div class="grid grid-flow-col gap-4">
			<a class="link link-hover" href="/auth/login">Login</a>
			<a class="link link-hover" href="/auth/register">Register</a>
			<span class="link link-hover"  on:click={() => (alert("Ne ndertim"))}>Reset Password</span>
			<span class="link link-hover" on:click={() => (alert("Ne ndertim"))}>Contact</span>
		</div>
	</footer>
</main>
<!-- <Modal bind:open={openModal} bind:text={modalText} bind:title={modalTitle} /> -->
