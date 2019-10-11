<template>
	<div>
		<div class="hero hero--stacked">
			<div class="container">
				<h1 class="hero__title">Scenarior</h1>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-auto">
					<button class="button button--primary button--large">{{ $t('projects.create') }}</button>
				</div>
				<div class="col-auto">
					<button class="button button--secondary button--large">{{ $t('projects.import') }}</button>
				</div>
			</div>
			
			<section>
				<h3>Recent</h3>

				<div class="row">
					<div v-for="project in projects" class="col-12 col-md">
						<router-link to="/edit/project" tag="div" class="card bg-secondary mb-2">
							<div class="card-body">
								<p class="card-title">
									{{ project.name }}
								</p>
							</div>
						</router-link>
					</div>
				</div>
			</section>
			<section>
				<h3>Templates</h3>

				<div class="row">
					<div v-for="project in projects.reverse()" class="col-12 col-md">
						<router-link to="/projects" tag="div" class="card bg-secondary mb-2">
							<div class="card-body">
								<p class="card-title">
									{{ project.name }}
								</p>
							</div>
						</router-link>
					</div>
				</div>
			</section>

		</div>
	</div>
</template>

<script>
	function fetchJSON(url) {
		return new Promise((resolve, reject) => {
			fetch(url).then(
				json => json.json().then(
					data => resolve(data),
					error => reject('Error while parsing JSON')
				),
				error => reject('Network error. CORS? Resource availability?')
			)
		})
	}

	export default {
		data() {
			return {
				projects: []
			}
		},
		created() {
			fetchJSON('/api/projects.json')
				.then(projects => this.projects = projects);
		}
	}
</script>
