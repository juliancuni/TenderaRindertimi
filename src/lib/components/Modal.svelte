<script lang="ts">
	export let open: boolean = false;
	export let title: string;
	export let text: string;
</script>

<!-- {#if open} -->
<!-- <label for="my-modal" class="btn modal-button">open modal</label> -->

<!-- <input type="checkbox" id="my-modal" class:modal-toggle={open} /> -->
<div class="modal" class:modal-toggle={open}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">{title}</h3>
		<p class="py-4">
			{text}
		</p>
		<div class="modal-action">
			<label for="my-modal" class="btn">Ok</label>
		</div>
	</div>
</div>
<!-- {/if} -->
