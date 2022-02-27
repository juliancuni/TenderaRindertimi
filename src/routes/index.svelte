<script lang="ts">
	import { onMount } from 'svelte';
	// import { browser } from '$app/env';
	import Table from '$lib/components/Table.svelte';
	import Filters from '$lib/components/Filters.svelte';
	import { tenderat, tenderatAdf, setTenderat, setTenderatAdf } from '$lib/stores/tenderat.store';
	let filter = { col: null, val: null };
	$: tendeatFiltered = $tenderat.filter((tender) => {
		let { col, val } = filter;
		if (col) {
			if (col === 'vlera_limit') return tender.attributes[col] > parseInt(val);
			if (col === 'vlera_fituese') return tender.attributes[col] > parseInt(val);
			if(val.length != 0) {
				return tender.attributes[col] == val;
			}
		}
		return tender;
	});
	onMount(async () => {
		if ($tenderat.length === 0) {
			await setTenderat();
			// await setTenderatAdf();
		}
	});
</script>

{tendeatFiltered.length}
<!-- {$tenderatAdf.length} -->
<Filters bind:filter />
<Table bind:tenderatRikonstruksioni={tendeatFiltered} />
