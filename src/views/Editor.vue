<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-auto">
					<div class="card bg-dark">
						<div class="card-body">
							<router-link to="/projects">Projects</router-link>
						</div>
					</div>
					
				</div>
				<div v-for="menu in ['Character editor', 'Interior editor']" class="col-auto">
					<div class="card bg-dark">
						<div class="card-body">
							{{ menu }}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-auto">
					<button @click="workspace.split = !workspace.split" class="button button--primary">Split view</button>
				</div>
			</div>
		</div>
		<template v-if="workspace.split">	
			<div class="grid">
				<editor-view :editors="workspace.editors.left"></editor-view>
				<editor-view :editors="workspace.editors.right"></editor-view>
			</div>
		</template>
		<template v-else>
			<editor-view :editors="workspace.editors.left.concat(workspace.editors.right)"></editor-view>
		</template>
	</div>
</template>

<style scoped>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		position: relative;
	}

	.grid::before {
		content: '';
		width: 1px;
		height: 100%;
		background: #aaa;
		left: 50%;
		position: absolute;
	}
</style>

<script>
	import EditorView from '@/components/EditorView'

	export default {
		components: {
			EditorView
		},
		data() {
			return {
				workspace: {
					split: true,
					editors: {
						left: [
							{
								type: 'script',
								file: 'characters/James.char'
							},
							{
								type: 'script',
								file: 'locations/Prison.loc'
							}
						],
						right: [
							{
								type: 'script',
								file: 'characters/Anna.char'
							}
						]
					}
				}
			}
		}
	}
</script>