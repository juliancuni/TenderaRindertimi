<script lang="ts">
	import { goto } from '$app/navigation';
	import { authenticated, logoutUser, loggedInUserProfile } from '$lib/stores/auth.store';
	export const logout = async () => {
		await logoutUser();
		goto('/');
	};
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">[X]</a>
	</div>
	<div class="flex-none gap-2">
		{#if $authenticated}
			<div class="form-control">
				<input
					type="text"
					placeholder="Search"
					class="input input-bordered input-sm w-full max-w-xs"
				/>
			</div>
			<div class="dropdown dropdown-end">
				<span tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img src={$loggedInUserProfile?.attributes?.avatar?._url} alt="avatar" />
					</div>
				</span>
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a href="/profile" class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a>Settings</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a on:click={logout}>Logout</a></li>
				</ul>
			</div>
		{:else}
			<ul class="menu menu-horizontal p-0">
				<li>
					<a href="/auth/login">Login</a>
				</li>
			</ul>
		{/if}
	</div>
</div>
