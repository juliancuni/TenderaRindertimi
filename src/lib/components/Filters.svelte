<script lang="ts">
	import { tenderat } from '$lib/stores/tenderat.store';

	let selected_vfill: number;
	let selected_vfitu: number;
	let selected_autpr: string;
	let selected_kntrk: string;
	export let filter = { col: null, val: null };
	let filterArr = [];
	const handleFilter = (col: any, val: any) => (filter = { col, val });
	const handleFilterArr = (col: any, val: any) => {
		if (val.length == 0 || val == -1) {
			//remove if exists object from filter arr
			filterArr = filterArr.filter((el) => !el[col]);
		} else {
			filterArr.push({ col, val });
		}
		console.log(filterArr);

	};
	// $: console.log(filterArr);
	$: raw_autoriteti_prokurues = $tenderat.map((tender) => {
		return tender.attributes.autoriteti_prokurues;
	});

	$: raw_statusi = $tenderat.map((tender) => {
		return tender.attributes.statusi;
	});
	$: autoriteti_prokurues = [...new Set(raw_autoriteti_prokurues)];
	$: statusi = [...new Set(raw_statusi)];
</script>

<div class="flex justify-evenly items-center h-20 w-auto">
	<div class="item">
		<label class=""
			>Autoriteti Prokurues
			<select
				class="select select-bordered select-sm w-full max-w-xs"
				bind:value={selected_autpr}
				on:change={() => handleFilter('autoriteti_prokurues', selected_autpr)}
			>
				<option selected value="">Zgjidh</option>
				{#each autoriteti_prokurues as au}
					<option>{au}</option>
				{/each}
			</select>
		</label>
	</div>
	<div class="item">
		<label class=""
			>Objekti
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs"
			/>
		</label>
	</div>
	<div class="item">
		<label class=""
			>Vlera Limit
			<select
				class="select select-bordered select-sm w-full max-w-xs"
				bind:value={selected_vfill}
				on:change={() => handleFilter('vlera_limit', selected_vfill)}
			>
				<option selected value="-1">Zgjidh</option>
				<option value="0">> 0</option>
				<option value="1000000">> 1.000.000</option>
				<option value="10000000">> 10.000.000</option>
				<option value="100000000">> 100.000.000</option>
				<option value="1000000000">> 1.000.000.000</option>
			</select>
		</label>
	</div>
	<div class="item">
		<label class=""
			>Kontraktuesi
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs"
			/>
		</label>
	</div>
	<div class="item">
		<label class=""
			>Statusi
			<select
				class="select select-bordered select-sm w-full max-w-xs"
				bind:value={selected_kntrk}
				on:change={() => handleFilter('statusi', selected_kntrk)}
			>
				<option selected value="">Zgjidh</option>
				{#each statusi as kntrkts}
					<option>{kntrkts}</option>
				{/each}
			</select>
		</label>
	</div>
	<div class="item">
		<label class=""
			>Vlera Fituese
			<select
				class="select select-bordered select-sm w-full max-w-xs"
				bind:value={selected_vfitu}
				on:change={() => handleFilter('vlera_fituese', selected_vfitu)}
			>
				<option selected value="-1">Zgjidh</option>
				<option value="0">> 0</option>
				<option value="1000000">> 1.000.000</option>
				<option value="10000000">> 10.000.000</option>
				<option value="100000000">> 100.000.000</option>
				<option value="1000000000">> 1.000.000.000</option>
			</select>
		</label>
	</div>
</div>
