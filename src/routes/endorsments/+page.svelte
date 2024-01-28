<script>
	import mixpanel from 'mixpanel-browser';
	import { onMount } from 'svelte';

	onMount(() => {
		mixpanel.track('Endorsments');
	});
</script>

<div class="endorsments">
	<div class="endorsment-card">
		<div class="endorsment-header">
			<div style="height: 50px; width:50px; border-radius:100%; background-color: white"></div>
			<div style="margin-left: 16px;">
				<h4 style="margin-bottom: 0px;">Wenceslaus D'Silva, CTO (Rooftop)</h4>
				<p style="margin-top: 8px;">via LinkedIn on 10/10/2023</p>
			</div>
		</div>
		<p>
			I had the distinct pleasure of working with Srujan Mhase at Rooftop, where he initially joined
			us as an intern and quickly ascended to the position of a full-time developer. To say that
			Srujan is gifted would be an understatement; he's a prodigy with a knack for both the
			technical and business sides of our work
		</p>

		<p>
			Srujan possesses an innate ability to solve complex problems that would stump most. His
			critical thinking skills are second to none, always approaching challenges with a calm,
			analytical mindset. He has an eye for detail so keen that nothing, and I mean nothing, slips
			past him. This has not only improved the quality of our projects but has also made him an
			invaluable asset in design and architecture planning.
		</p>
		<p>
			What sets Srujan apart from others is his relentless work ethic. 'Above and beyond' is
			practically his middle name. No task is too daunting, and no project is too complicated. He
			takes ownership of his work like a true professional and always delivers, often exceeding
			expectations. <br />
			Srujan's business acumen is worth mentioning as well. His insights into market trends and user
			experience have often guided our strategies, adding a layer of sophistication to our business model
			that we didn't even know we needed.
		</p>
		<p>
			As for communication, Srujan is a straight shooter. He appreciates directness and doesn't like
			to beat around the bush. This has made our team interactions incredibly efficient, cutting
			through the noise and getting straight to the point.
		</p>
		<p>
			In summary, Srujan is not just an amazing programmer and a keen business strategist; he's an
			exceptional human being and a phenomenal team member. I can say without a shred of doubt that
			Srujan will be an irreplaceable asset to any company fortunate enough to have him on their
			team.
		</p>
	</div>
</div>

<style>
	.endorsments {
		display: flex;
		flex-direction: row;

		padding-bottom: 50px;
	}

	.endorsment-card {
		width: 450px;
		background: rgba(87, 87, 87, 0.653);
		border: 1px solid white;
		margin-right: 30px;
		flex-shrink: 0;
		border-radius: 8px;
		padding: 16px;

		--a: 0.5deg;
		aspect-ratio: 1;
		transform: perspective(400px) rotate3d(var(--i, 1, -1), 0, var(--a));
		mask: linear-gradient(135deg, #000c 40%, #000, #000c 60%) 100% 100%/240% 240%;
		transition: 0.4s;
	}

	@media only screen and (max-width: 768px) {
		.endorsment-card {
			width: 70vw;
			overflow-y: auto;
		}
	}

	.endorsment-card:hover {
		--i: -1, 1;
		mask-position: 0 0;
	}

	h4,
	p {
		font-family: Inter;
		color: white;
		font-size: 15px;
	}

	.endorsment-header {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
