<svelte:head>
	<title>RLin.eu - Home</title>
</svelte:head>

<section>
	<h1>RLin.eu - Robin van der Linde</h1>
	<div class="flex">
		<img src="static/photo.jpg" alt="Headshot" id="headshot" />
		<div>
			<p>
				Hi! I'm Robin, a 20 year old student and developer, passionate about OpenStreetMap and maps
				in general. When I'm done studying, I'll usually start mapping on OpenStreetMap, or if I'm
				feeling overly ambitious I might even do some more programming. Apart from that I also
				occasionally play a variety of games. Other hobbies include CAD and 3d-printing,
				electronics, making things in general and cycling.
			</p>
			<p>
				If you want to learn more about me, and what I do, you've come to the right place. On this
				website you can find some basic information <a href="/aboutme">about me</a> and some of my
				current and past
				<a href="/projects">projects</a>. If still want to know more, feel free to
				<a href="/contact">contact me</a>.
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	h1 {
		@apply text-3xl;
	}
	img#headshot {
		@apply w-64;
		@apply h-64;
		@apply m-0;
		@apply mb-4;
		@apply rounded-full;
		@apply shadow-md;
		@apply object-cover;
	}
	p {
		@apply ml-4 mb-4;
	}
	div {
		@apply mt-4;
	}
</style>
