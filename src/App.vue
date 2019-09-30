<template>
	<div id="app">
		<v-menubar></v-menubar>

		<transition name="slide-fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import VMenuBar from '@/components/TheMenuBar';

	export default {
		components: {
			'v-menubar': VMenuBar
		},
		data() {
			return {

			}
		}
	}
</script>