<script>
	import ContactList from '$lib/components/ContactList.svelte';
</script>

<svelte:head>
	<title>RLin.eu - Contact</title>
</svelte:head>

<section>
	<h1>RLin.eu - Contact</h1>
	<p>
		You can contact me using email:
		<a href="mailto:robin.vanderlinde@gmail.com">robin.vanderlinde@gmail.com</a>, or alternatively
		you can try using one of the social networks listed below:
	</p>
</section>

<ContactList />

<style lang="scss">
	h1 {
		@apply text-3xl;
	}
</style>
