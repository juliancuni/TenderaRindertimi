<!-- <script lang="ts">
	import VirtualTable from 'svelte-virtual-table';
	export let tenderatRikonstruksioni: any;
	let myItemsArray = [];
	let start; // the index of the first visible item
	let end; // the index of the last visible item
</script>

{#await tenderatRikonstruksioni}
	Loading...
{:then arr}
	<VirtualTable items={myItemsArray}  bind:start bind:end>
		<tr slot="thead" role="row">
			<th data-sort="nr">Nr.</th>
			<th data-sort="autoriteti_prokurues">AUTORITETI_PROKURUES</th>
			<th data-sort="objekti">OBJEKTI</th>
			<th data-sort="vlera_limit" data-sort-initial="descending">VLERA_LIMIT</th>
		 <th data-sort="KONTRAKTUES">KONTRAKTUES</th> -->
		<!-- </tr>
		<tr slot="tbody" role="row" let:item> -->
			<!-- <td>
				<a href={item.url} target="_blank">{item.title}</a>
			</td> 
			<td>{item.attributes.nr}</td>
			<td>{item.attributes.autoriteti_prokurues}</td>
			<td>{item.attributes.objekti}</td>
			<td>{item.attributes.vlera_limit}</td>
			</tr>
	</VirtualTable>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await} -->
