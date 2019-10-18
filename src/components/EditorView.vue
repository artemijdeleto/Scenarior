<template>
	<div class="editor-view">
		<div class="tabs">
			<button
				v-for="editor, index in editors"
				@click="selected = index"
				:class="{
					'tabs__item': true,
					'button': true,
					'active': selected === index
				}"
			>
				{{ editor.file }}
			</button>
		</div>
		<!-- script editor component -->
	</div>
</template>

<script>
	export default {
		props: {
			editors: {
				type: Array
			}
		},
		data() {
			return {
				selected: 0
			}
		},
		methods: {
			setActive(index) {
				this.selected = index;
			}
		}
	}
</script>