<script lang="ts">
	export let tenderatRikonstruksioni;
</script>

<div class="overflow-x-auto">
	{#await tenderatRikonstruksioni}
		Loading....
	{:then tenderat}
		<table class="table table-compact">
			<thead>
				<tr>
					<th>Nr.</th>
					<th>AUTORITETI_PROKURUES</th>
					<th>OBJEKTI</th>
					<th>VLERA_LIMIT</th>
					<th>KONTRAKTUES</th>
					<th>STATUSI</th>
					<th>VLERA_FITUESE</th>
				</tr>
			</thead>
			<tbody>
				{#each tenderat as { attributes }}
					<tr>
						<td>{attributes.nr}</td>
						<td>{attributes.autoriteti_prokurues}</td>
						<td><a class="link link-primary" href={attributes.url}>{attributes.objekti}</a></td>
						<td>{attributes.vlera_limit}</td>
						<td>{attributes.kontraktues}</td>
						<td>{attributes.statusi}</td>
						<td>{attributes.vlera_fituese}</td>
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
