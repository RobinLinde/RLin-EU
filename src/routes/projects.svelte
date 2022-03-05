<script>
	import ProjectList from '$lib/components/ProjectList.svelte';
</script>

<svelte:head>
	<title>RLin.eu - Projects</title>
</svelte:head>

<section>
	<h1 id="title">RLin.eu - Projects</h1>
	<p>
		Here is a small list of my current projects. If you have any questions about them, feel free to <a
			href="/contact">contact</a
		> me.
	</p>
</section>

<ProjectList />

<style lang="scss">
	h1 {
		@apply text-3xl;
	}
	section {
		@apply pb-4;
	}
</style>
