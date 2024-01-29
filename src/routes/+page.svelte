<script>
	import { trackEvent } from '$lib/mixpanel_service';
	import { onMount } from 'svelte';

	onMount(() => {
		trackEvent('home');
	});
</script>

<div class="content">
	<b>Intro:</b>
	<span class="paragraph">
		a passionate engineer, tinkerer, builder, flutter developer; Open source packages contributor;
		Love crafting beautiful products for web & mobile. Working knowledge of UI/UX, databases,
		serverless & deployment.
	</span>
	<br />

	<div style="margin-top: 32px">
		<b>Flutter Developer - Rooftop App</b> <br />
		Sep 2021 - Oct 2023 (2y 1mo)
	</div>

	<div style="margin-top: 16px">
		<b>SDE (Mobile) - Flutter Developer - HighLevel</b> <br />
		Oct 2023 - Current
	</div>
</div>

<style>
	.content {
		max-width: 400px;
		padding-right: 50px;
		color: white;
		font-family: Inter;
	}
</style>
