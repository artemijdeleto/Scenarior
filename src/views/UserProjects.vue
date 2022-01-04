<template>
	<div>
		<div class="container mx-auto px-2 py-5">
      <h2 class="text-xl font-bold mb-3">Overview</h2>

			<div>
        <button class="py-1.5 px-5 rounded-sm shadow-sm text-sm font-medium dark:bg-blue-900 dark:text-white mr-2">
          {{ $t('projects.create') }}
        </button>
        <button class="py-1.5 px-5 rounded-sm shadow-sm text-sm font-medium dark:bg-neutral-200 dark:text-black">
          {{ $t('projects.import') }}
        </button>
			</div>

      <HorizontalLine class="my-5" />

			<section>
				<h3 class="text-lg font-medium mb-1">Recent</h3>

				<div class="grid grid-cols-3 gap-4">
          <router-link v-for="project in projects" to="/edit/project" class="block">
            <BackgroundContainer class="h-full rounded shadow-sm" :backgroundUrl="project.thumbnail">
              <div class="relative px-5 py-4 flex flex-col h-full">
                <div class="grow">
                  <h4 class="font-bold tracking-tight text-xl text-shadow">{{ project.name }}</h4>
                </div>
                <div class="mt-1">
                  <p class="text-xs opacity-75">Last modified at 21 July</p>
                </div>
              </div>
            </BackgroundContainer>
          </router-link>
        </div>
			</section>

      <HorizontalLine class="my-5" />

			<section>
        <h3 class="text-lg font-medium mb-1">Templates</h3>

				<div class="grid grid-cols-4 gap-4">
          <router-link v-for="template in templates" to="/edit/project" class="block">
            <BackgroundContainer class="h-full rounded shadow-sm" :backgroundUrl="template.thumbnail">
              <div class="relative px-5 py-4 flex flex-col h-full">
                <div class="grow">
                  <h4 class="font-bold tracking-tight text-xl text-shadow">{{ template.name }}</h4>
                </div>
                <div>
                  <p class="text-xs opacity-75">Optimal for TV shows</p>
                </div>
              </div>
            </BackgroundContainer>
          </router-link>
        </div>
			</section>

		</div>
	</div>
</template>

<script>
import BackgroundContainer from '@/components/BackgroundContainer.vue';
import HorizontalLine from '@/components/HorizontalLine.vue';

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
    components: {
      HorizontalLine,
      BackgroundContainer
    },
		data() {
			return {
				projects: [],
				templates: [
					{
						name: 'TV show'
					},
					{
						name: 'Budget movie'
					},
					{
						name: 'Hollywood blockbuster'
					}
				]
			}
		},
		created() {
			fetchJSON('/api/projects.json')
				.then(projects => this.projects = projects);
		}
	}
</script>
