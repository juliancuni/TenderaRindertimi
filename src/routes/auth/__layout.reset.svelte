<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	import { authenticated, checkAuthentication } from '$lib/stores/auth.store';
	onMount(async () => {
		await checkAuthentication();
	});
</script>

<!-- <main class="container mx-auto p-8"> -->
<main class="container mx-auto p-8 h-screen flex flex-col items-center justify-center">
	<slot />
</main>
