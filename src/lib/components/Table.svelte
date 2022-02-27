<script lang="ts">
	export let tenderatRikonstruksioni: any;
    const nrformatedOptions = { minimumFractionDigits: 0 };
</script>

<div class="overflow-x-auto">
	{#await tenderatRikonstruksioni}
		Loading....
	{:then tenderat}
		<table class="bg-white text-gray-900 table-auto border-separate w-full shadow-none">
			<thead>
				<tr>
					<th class="bg-blue-700 text-white ">nr</th>
					<th class="bg-blue-700 text-white ">AUT_PROK</th>
					<th class="bg-blue-700 text-white  w-1/2">OBJEKTI</th>
					<th class="bg-blue-700 text-white ">VL_LIMIT</th>
					<th class="bg-blue-700 text-white  w-auto">KONTRAKTUES</th>
					<th class="bg-blue-700 text-white  w-auto">STATUSI</th>
					<th class="bg-blue-700 text-white  w-auto">VL_FITUESE</th>
				</tr>
			</thead>
			<tbody>
				{#each tenderat as { attributes }}
					<tr class="bg-blue-100 text-blue-900">
						<td class="">{attributes.nr}</td>
						<td class="">{attributes.autoriteti_prokurues}</td>
						<td class=""
							><a class="link link-primary" href={attributes.url}>{attributes.objekti}</a></td
						>
						<td class="">{attributes.vlera_limit.toLocaleString('en-US', nrformatedOptions)}</td>
						<td class="">{attributes.kontraktues}</td>
						<td class="">{attributes.statusi}</td>
						<td class="">{attributes.vlera_fituese.toLocaleString('en-US', nrformatedOptions)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/await}
</div>

<!-- <div class="overflow-x-auto">
	{#await arrPromise}
		Loading....
	{:then arr}
		<table class="table table-compact">
			<thead>
				<tr>
					{#each Object.entries(arr[0].attributes) as [key, _]}
						<th>{key}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each arr as { attributes }}
					<tr>
						{#each Object.entries(attributes) as [_, value]}
							<th>{value}</th>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{/await}
</div> -->
