<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { loggedInUserProfile, authenticated, checkAuthentication } from '$lib/stores/auth.store';

	$: if (browser && !$authenticated) {
		goto('/');
	}

</script>

Profile
