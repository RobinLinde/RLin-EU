<nav>
	<slot />
</nav>

<style lang="scss">
	nav {
		@apply sticky top-0 left-0 w-full h-12 z-10;

		@apply flex items-center gap-4 px-6;

		@apply border-b-2;
		@apply bg-orange-600 border-orange-500 text-white;
	}
</style>
