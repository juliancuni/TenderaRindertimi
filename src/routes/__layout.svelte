<!-- <script context="module">
	// (async () => {
	// 	await checkAuthentication();
	// })()
</script> -->
<script>
	import '../app.css';
	// import { onMount } from 'svelte';
	import { checkAuthentication } from '$lib/stores/auth.store';
	import Navigation from '$lib/components/Navigation.svelte';
	// onMount(async () => {
	// 	await checkAuthentication();
	// });
</script>

{#await checkAuthentication()}
	loading...
{:then _}
	<Navigation />
	<main>
		<slot />
	</main>
{/await}
