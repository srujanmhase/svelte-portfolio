<script>
	import Navbar from '$lib/Navbar.svelte';
	import star from '$lib/media/star.svg';
	import noise from '$lib/media/noise.webp';
	//import { rotate } from '$lib/stores/current_page';

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { rotate } from '$lib/stores/current_page';

	let m = {
		x: 0,
		y: 0
	};

	/**
	 * @param {{ clientX: number; clientY: number; }} event
	 */
	function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	const move = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	setInterval(() => {}, 1000);
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
	</style>
</svelte:head>

<div class="body" on:pointermove={handleMove}>
	<div class="navbar">
		<Navbar />
	</div>
	<div class="slot">
		<slot />
	</div>

	<img src={noise} class="noise_bg" alt="noise_background" />
	{#if true}
		<p class="credits font-options">Made possible with sveltekit</p>
	{/if}
	<p class="copyright font-options">© 2024</p>

	<div id="turquise_circle"></div>
	<div id="blue_circle"></div>

	<div style="top: {m.y}px; left: {m.x - 20}px; " class="pointer"></div>

	<img src={star} class="bg-star" style="rotate: {$rotate}deg" alt="star_image_background" />
</div>

<style>
	.body {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: black;
		padding: 50px;
	}

	.noise_bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.navbar {
		padding-top: 50px;
		padding-right: 100px;
	}

	.slot {
		padding-top: 50px;
	}

	.font-options {
		color: white;
		font-family: Inter;
	}

	.credits {
		position: fixed;
		bottom: 10px;
	}

	.copyright {
		position: fixed;
		bottom: 10px;
		right: 20px;
	}

	.bg-star {
		position: fixed;
		bottom: -80px;
		right: 200px;
		z-index: -1;
	}

	.pointer {
		position: fixed;
		background-color: white;
		height: 5px;
		width: 5px;
		border-radius: 50px;
	}

	#turquise_circle {
		position: fixed;
		top: 100px;
		left: 50vw;

		width: 850px;
		height: 850px;
		flex-shrink: 0;

		border-radius: 850px;
		background: #73e0a9;
		filter: blur(250px);
		z-index: -2;
	}

	#blue_circle {
		position: fixed;
		top: 400px;

		width: 1000px;
		height: 1000px;
		flex-shrink: 0;

		border-radius: 1000px;
		background: #5b68df;
		filter: blur(250px);
		z-index: -3;
	}
</style>
