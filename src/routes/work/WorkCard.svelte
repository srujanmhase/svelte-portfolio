<script>
	export let img = '';
	export let title = '';
	export const href = '';
	export let description = '';
</script>

<div class="work-card">
	<img src={img} alt={title} />
	<div class="work-card-content">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</div>

<style>
	.work-card {
		height: 50vh;
		width: 450px;
		background: rgba(87, 87, 87, 0.653);
		border: 1px solid white;
		margin-right: 30px;
		flex-shrink: 0;
		border-radius: 8px;

		--a: 0.5deg;
		aspect-ratio: 1;
		transform: perspective(400px) rotate3d(var(--i, 1, -1), 0, var(--a));
		mask: linear-gradient(135deg, #000c 40%, #000, #000c 60%) 100% 100%/240% 240%;
		transition: 0.4s;
	}

	.work-card:hover {
		--i: -1, 1;
		mask-position: 0 0;
	}

	.work-card-content {
		padding: 16px;
	}

	h3,
	p {
		font-family: Inter;
		color: white;
	}

	img {
		width: 450px;
		height: 25vh;
		object-fit: cover;
	}
</style>
