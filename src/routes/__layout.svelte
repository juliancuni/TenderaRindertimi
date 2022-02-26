<!-- <script context="module">
	// (async () => {
	// 	await checkAuthentication();
	// })()
</script> -->
<script>
	import '../app.css';
	// import { onMount } from 'svelte';
	import { checkAuthentication } from '$lib/stores/auth.store';
	import Header from '$lib/components/Navigation.svelte';
	// onMount(async () => {
	// 	await checkAuthentication();
	// });
</script>

{#await checkAuthentication()}
	loading...
{:then _}
	<Header />
	<main class="container mx-auto p-8">
		<slot />
	</main>
{/await}
