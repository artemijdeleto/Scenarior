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
						<router-link to="/projects" tag="div" class="card bg-secondary mb-2">
							<div class="card-body">
								<p class="card-title">
									{{ project.title }}
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
									{{ project.title }}
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
	export default {
		data() {
			return {
				projects: [
					{
						title: 'Black Mirror: The Entire History of You'
					},
					{
						title: 'Eternal Sunshine of a Spotless Mind'
					},
					{
						title: 'Requiem for a Dream'
					},
					{
						title: 'INTERSTELLAR'
					}
				]
			}
		}
	}
</script>
