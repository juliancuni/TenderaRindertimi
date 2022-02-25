<script lang="ts">
  import {setTenderatFromApi, tenderaRindertimi} from './lib/store/store';
  import {onMount} from 'svelte';
  import Table from './components/Table.svelte';
  // optional import focus-visible polyfill only once
  import 'focus-visible';

  onMount(async () => {
    await setTenderatFromApi();
  });
</script>

<Table bind:tenderat={$tenderaRindertimi} />

<style global lang="scss">
  @use '@material/data-table/data-table';
  @include data-table.core-styles;
  @include data-table.theme-baseline;
</style>
