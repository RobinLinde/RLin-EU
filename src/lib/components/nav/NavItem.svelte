<script lang="ts">
	export let path: string;
	export let name: string;
</script>

<a href={path}>{name}</a>

<style lang="scss">
	a {
		@apply no-underline;
	}
</style>
