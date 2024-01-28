<script>
	import mixpanel from 'mixpanel-browser';
	import { onMount } from 'svelte';

	onMount(() => {
		mixpanel.track('Contact');
	});
</script>

<p>
	Find me on <a href="https://linkedin.com/in/srujan-mhase/" target="_blank">LinkedIn</a>,
	<a href="https://github.com/srujanmhase" target="_blank">Github</a>
</p>

<style>
	a,
	p {
		font-family: Inter;
		color: white;
		font-size: 15px;
	}
</style>
