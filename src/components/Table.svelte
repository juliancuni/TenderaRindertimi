<script lang="ts">
  import {onMount} from 'svelte';
  import {MDCDataTable} from '@material/data-table';

  export let tenderat: any[] = [];

  onMount(() => {
    const dataTable = new MDCDataTable(
      document.querySelector('.mdc-data-table')
    );
  });
</script>

<!-- <table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Favorite Color</td>
      <td>Favorite Number</td>
    </tr>
  </thead>
  <tbody>
    {#each tenderat as { attributes }}
      <tr>
        <td>{attributes.nr}</td>
        <td>{attributes.autoriteti_prokurues}</td>
        <td><a href={attributes.url}>{attributes.objekti}</a></td>
        <td>{attributes.kontraktues}</td>
        <td>{attributes.vlera_limit}</td>
        <td>{attributes.statusi}</td>
        <td>{attributes.vlera_fituese}</td>
      </tr>
    {/each}
  </tbody>
</table> -->

<div class="mdc-data-table">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
      <!-- <thead>
        <tr class="mdc-data-table__header-row">
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
        </tr>
      </thead> -->
      <tbody class="mdc-data-table__content">
        {#each tenderat as { attributes }}
          <tr class="mdc-data-table__row">
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric"
              >{attributes.autoriteti_prokurues}</td
            >
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric"
              >{attributes.kontraktues}</td
            >

            <th class="mdc-data-table__cell" scope="row"
              ><a href={attributes.url}>{attributes.objekti}</a></th
            >
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric"
              >{attributes.vlera_limit}</td
            >
            <td class="mdc-data-table__cell">{attributes.statusi}</td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric"
              >{attributes.vlera_fituese}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
