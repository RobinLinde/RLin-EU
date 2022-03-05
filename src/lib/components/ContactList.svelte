<script lang="ts">
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaFacebookMessenger from 'svelte-icons/fa/FaFacebookMessenger.svelte';
	import FaMap from 'svelte-icons/fa/FaMap.svelte';
	import FaSteam from 'svelte-icons/fa/FaSteam.svelte';
	import FaTelegram from 'svelte-icons/fa/FaTelegram.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
</script>

<ul>
	<li>
		<a href="https://discordapp.com/users/177870272047611904" class="discord">
			<div><FaDiscord /></div>
			<div>RobinLin#8649</div>
		</a>
	</li>
	<li>
		<a href="https://www.facebook.com/robin.lindetk" class="facebook">
			<div><FaFacebook /></div>
			<div>robin.lindetk</div>
		</a>
	</li>
	<li>
		<a href="https://github.com/robinlinde" class="github">
			<div><FaGithub /></div>
			<div>robinlinde</div>
		</a>
	</li>
	<li>
		<a href="https://linkedin.com/in/RLinEU" class="linkedin">
			<div><FaLinkedin /></div>
			<div>RLinEU</div>
		</a>
	</li>
	<li>
		<a href="https://m.me/robin.lindetk" class="messenger">
			<div><FaFacebookMessenger /></div>
			<div>robin.lindetk</div>
		</a>
	</li>
	<li>
		<a href="https://osm.org/user/Robin van der Linde" class="osm">
			<div><FaMap /></div>
			<div>Robin van der Linde</div>
		</a>
	</li>
	<li>
		<a href="https://steamcommunity.com/id/robinlinde" class="steam">
			<div><FaSteam /></div>
			<div>RobinLinde</div>
		</a>
	</li>
	<li>
		<a href="https://t.me/RLin_EU" class="telegram">
			<div><FaTelegram /></div>
			<div>RLin_EU</div>
		</a>
	</li>
	<li>
		<a href="https://twitter.com/linde_robin" class="twitter">
			<div><FaTwitter /></div>
			<div>linde_robin</div>
		</a>
	</li>
</ul>

<style lang="scss">
	ul {
		@apply pt-2;
		li {
			a {
				@apply h-8 flex flex-row;
				div {
					@apply p-1;
				}

				&.discord:hover {
					@apply text-blue-700;
				}
				&.facebook:hover {
					@apply text-blue-700;
				}
				&.github:hover {
					@apply text-gray-400;
				}
				&.linkedin:hover {
					@apply text-blue-500;
				}
				&.messenger:hover {
					@apply text-blue-400;
				}
				&.osm:hover {
					@apply text-green-600;
				}
				&.steam:hover {
					@apply text-blue-800;
				}
				&.telegram:hover {
					@apply text-blue-400;
				}
				&.twitter:hover {
					@apply text-blue-400;
				}
			}
		}
	}
</style>
