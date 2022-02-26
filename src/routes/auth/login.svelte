<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { authenticated, loginUser } from '$lib/stores/auth.store';
	$: if (browser && $authenticated) {
		goto('/');
		loading = false;
	}

	let identity: string = import.meta.env.VITE_USERNAME;
	let password: string = import.meta.env.VITE_PASSWORD;
	let loading = false;
	const login = async () => {
		loading = true;
		const user = await loginUser(identity, password);
	};
	// onMount(() => {
	//     getLoggedInUser() ? goto("/") : goto("/asd")
	// });
</script>

<h1 class="text-4xl font-black mb-4">Welcome</h1>

<form on:submit|preventDefault={login}>
	<div class="mb-4 relative">
		<label class="block text-sm font-medium"
			>Username/Email
			<input type="text" class="input input-bordered w-full" bind:value={identity} />
		</label>
	</div>
	<div class="mb-4 ">
		<label class="block text-sm font-medium"
			>Password
			<input type="password" class="input input-bordered w-full" bind:value={password} />
		</label>
	</div>
	<button type="submit" class="btn btn-block" class:loading> Login </button>
</form>
