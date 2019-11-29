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
				{{ prettify(editor.file) }}
			</button>
		</div>
		<script-editor :type="editors[selected].type" :file="editors[selected].file"></script-editor>
		<!-- script editor component -->
	</div>
</template>

<script>
	import ScriptEditor from '@/components/ScriptEditor'
	import '@/assets/css/components/_tabs.scss'

	export default {
		props: {
			editors: {
				type: Array
			}
		},
		components: {
			ScriptEditor
		},
		data() {
			return {
				selected: 0
			}
		},
		methods: {
			setActive(index) {
				this.selected = index;
			},
			prettify(filename) {
				const types = {
					'char': this.$t('script.type.character'),
					'loc': this.$t('script.type.location')
				};
				let basename = filename.slice(
					filename.indexOf('/') + 1,
					filename.indexOf('.')
				);
				let type = types[
					filename.slice(
						filename.indexOf('.') + 1, filename.length
					)
				];

				return `${type}: ${basename}`;
			}
		}
	}
</script>