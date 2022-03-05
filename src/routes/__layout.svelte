<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';
	import NavBrand from '$lib/components/nav/NavBrand.svelte';
	import NavItem from '$lib/components/nav/NavItem.svelte';
	import NavItemList from '$lib/components/nav/NavItemList.svelte';
	import '../app.css';

	$: routes = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'About me',
			path: '/aboutme'
		},
		{
			name: 'Projects',
			path: '/projects'
		},
		{
			name: 'Contact',
			path: '/contact'
		}
	];
</script>

<Nav>
	<NavBrand>RLin.eu</NavBrand>
	<NavItemList>
		{#each routes as route}
			<NavItem {...route} />
		{/each}
	</NavItemList>
</Nav>

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	:global(body) {
		@apply bg-gray-800 text-white min-h-screen;
	}

	main {
		@apply container mx-auto px-4;
	}
</style>
