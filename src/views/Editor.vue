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
		<!-- Editor view -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				workspace: {
					split: true
				}
			}
		}
	}
</script>