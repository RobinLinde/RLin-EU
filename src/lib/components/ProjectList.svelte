<script lang="ts">
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<table>
	<tr>
		<td>
			<a href="https://robinlinde.github.io/road-completion-nl.html" target="_blank">OSM vs NWB</a>
			<p>
				Checks OSM against the NWB, part of
				<a href="https://github.com/osmbe/road-completion">osmbe/road-completion</a>
			</p>
		</td>
		<td><a href="https://github.com/osmbe/road-completion" target="_blank"><FaGithub /></a></td>
	</tr>
	<tr>
		<td>
			<a href="https://assen.equalstreetnames.eu/" target="_blank">EqualStreetNames Assen</a>
			<p>
				My submodule for EqualStreetNames, for the city of Assen. Available in English, Dutch and
				German.
			</p>
		</td>
		<td>
			<a href="https://github.com/EqualStreetNames/equalstreetnames-assen" target="_blank">
				<FaGithub />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://groningen.equalstreetnames.eu/" target="_blank">EqualStreetNames Groningen</a
			>
			<p>
				My submodule for EqualStreetNames, for the city of Groningen. Available in English, Dutch
				and German.
			</p>
		</td>
		<td>
			<a href="https://github.com/equalstreetnames/equalstreetnames-groningen" target="_blank">
				<FaGithub />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://statistics.equalstreetnames.eu/" target="_blank"
				>EqualStreetNames Statistics</a
			>
			<p>
				A small page showing some statistics about the cities in the EqualStreetNames project. Data
				is gathered from GitHub
			</p>
		</td>
		<td>
			<a href="https://github.com/RobinLinde/statistics" target="_blank">
				<FaGithub />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://osm.rlin.eu/geofabrik" target="_blank">Geofabrik Regions</a>
			<p>
				A simple list of the regions Geofabrik offers, with a link to the corresponding download
				page and Taginfo site.
			</p>
		</td>
		<td />
	</tr>
	<tr>
		<td>
			<a href="https:///assen.rlin.eu/combi" target="_blank">Map of Assen</a>&nbsp;🇳🇱
			<p>This viewer allows you to view aerial imagery of Assen and overlay several maps.</p>
		</td>
		<td />
	</tr>
	<tr>
		<td>
			<h4>More?</h4>
			More projects can be found on my
			<a href="https://github.com/robinlinde">GitHub profile</a>.
		</td>
		<td />
	</tr>
</table>

<style lang="scss">
	table {
		@apply w-6/12;
		tr {
			td {
				@apply h-6 border-t border-b border-slate-700 rounded;
				h4 {
					@apply text-lg font-bold;
				}
				&:first-of-type {
					@apply border-l;
				}
				&:last-of-type {
					@apply border-r;
					a {
						@apply text-gray-500;
						&:hover {
							@apply text-white;
						}
					}
				}
			}
		}
	}
</style>
