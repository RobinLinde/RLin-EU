<script>
	import LanguagesChart from '$lib/components/LanguagesChart.svelte';
</script>

<svelte:head>
	<title>RLin.eu - About me</title>
</svelte:head>

<section>
	<h1>RLin.eu - About me</h1>
	<p>
		Hi! I'm Robin van der Linde, a 20 year old student and developer, passionate about OpenStreetMap
		and maps in general.
	</p>
	<p>
		I'm currently studying at the
		<a href="https://hanze.nl/" target="_blank">Hanze University</a>. Before starting there, I
		finished my VWO-NT with
		<a href="https://www.technasium.nl/what-is-technasium/">Technasium</a>. When I'm not busy
		studying I usually start to work on my software projects, doing some OpenStreetMap editing or
		playing a game.
	</p>
	<p>
		I started coding in the last years of elementary school, roughly 10 years ago now. In these
		years I've worked with the following languages (and some more):
	</p>
	<ul>
		<li>CSS</li>
		<li>HTML</li>
		<li>Java</li>
		<li>JavaScript</li>
		<li>PHP</li>
		<li>Python</li>
		<li>TypeScript</li>
	</ul>
	<p>Apart from that I've also gained some experience in some other things:</p>
	<ul>
		<li>Electronics (Arduino, Raspberry Pi, etc.)</li>
		<li>CAD and 3D-printing</li>
		<li>Docker</li>
		<li>Office (Excel, Word, Visio)</li>
		<li>RC models (quadcopters, helicopters, boats and more)</li>
	</ul>
	<p>My current work experience:</p>
	<ul>
		<li>
			Developer &bull;
			<a href="https://osoc.be/editions/2021/bikeinfrastructure">Open Summer of Code</a>
			&bull; 2021
		</li>
	</ul>
</section>

<LanguagesChart />

<style lang="scss">
	h1 {
		@apply text-3xl;
	}
	ul {
		@apply list-disc p-6;
	}
</style>
