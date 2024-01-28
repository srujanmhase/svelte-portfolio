<script>
	import {
		currentPage,
		path,
		homePadding,
		workPadding,
		endorsmentPadding,
		contactPadding
	} from '$lib/stores/current_page';

	const baseTitle = 'Srujan Mhase | Portfolio - Flutter developer';

	let title = baseTitle;

	$: switch ($path) {
		case currentPage.home:
			title = baseTitle;
			break;
		case currentPage.work:
			title = 'Work | ' + baseTitle;
			break;
		case currentPage.endorsment:
			title = 'Endorsments | ' + baseTitle;
			break;
		case currentPage.contact:
			title = 'Contact | ' + baseTitle;
			break;
	}

	let shouldAnimate = true;

	/**
	 * @param {MediaQueryList} x
	 */
	function resetWidth(x) {
		if (x.matches) {
			shouldAnimate = false;
		} else {
			shouldAnimate = true;
		}
	}
	var x = window.matchMedia('(max-width: 700px)');

	resetWidth(x);

	x.addEventListener('change', function () {
		resetWidth(x);
	});
</script>

<svelte:head>
	<title>
		{title}
	</title>
</svelte:head>

<nav>
	<a
		href="/"
		style="margin-right: {shouldAnimate ? $homePadding : 0}px"
		class={$path === currentPage.home ? 'selected' : 'unselected'}
	>
		hi, i'm srujan.
	</a>
	<a
		href="/work"
		style="margin-right: {shouldAnimate ? $workPadding : 0}px"
		class={$path === currentPage.work ? 'selected' : 'unselected'}
	>
		/work
	</a>
	<a
		href="/endorsments"
		style="margin-right: {shouldAnimate ? $endorsmentPadding : 0}px"
		class={$path === currentPage.endorsment ? 'selected' : 'unselected'}
	>
		/endorsements
	</a>
	<a
		href="/contact"
		style="margin-right: {shouldAnimate ? $contactPadding : 0}px"
		class={$path === currentPage.contact ? 'selected' : 'unselected'}
	>
		/contact
	</a>
</nav>

<style>
	a {
		font-size: xx-large;
		font-weight: 900;
		font-family: Inter;
		text-decoration: none;
		margin-right: 0px;
	}

	.unselected {
		color: transparent;
		margin-right: 10px;
		-webkit-text-stroke: 0.2px white;
	}

	.selected {
		color: white;
		margin-right: 10px;
	}
</style>
