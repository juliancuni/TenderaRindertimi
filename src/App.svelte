<h1>Hello {name}!</h1>

<Checkbox bind:checked>Checkbox</Checkbox>

<p>Checkbox is <strong>{checked ? 'checked' : 'unchecked'}</strong></p>

<Button
    outlined
    shaped
    color="Red"
    on:click={() => { checked = !checked }}
>
    Inverse
</Button>

<script>
    export let name;
    // optional import focus-visible polyfill only once
    import 'focus-visible';
    // import any components
    import { Button, Checkbox } from 'svelte-mui';

    let checked = true;
</script>

<style>
    h1 {
        color: purple;
    }
</style>