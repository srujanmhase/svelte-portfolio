<script>
	import items from '$lib/work.json';
	import { onMount } from 'svelte';
	import WorkCard from './WorkCard.svelte';

	import mixpanel from 'mixpanel-browser';

	onMount(() => {
		mixpanel.track('Work');
	});
</script>

<div class="work">
	{#each items as item}
		<a href={item.href} target="_blank">
			<WorkCard {...item} />
		</a>
	{/each}
</div>

<style>
	.work {
		display: flex;
		flex-direction: row;
		overflow-x: auto;
		padding-bottom: 50px;
		padding-right: 80px;
	}

	a {
		text-decoration: none;
	}

	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px transparent;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.105);
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: white;
	}
</style>
