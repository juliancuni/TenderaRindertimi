<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import Table from '$lib/components/Table.svelte';
	import { tenderat, tenderatAdf, setTenderat, setTenderatAdf } from '$lib/stores/tenderat.store';

	onMount(async () => {
		if($tenderat.length === 0) {
			await setTenderat();
		};
	});
</script>

<Table bind:tenderatRikonstruksioni={$tenderat} />
