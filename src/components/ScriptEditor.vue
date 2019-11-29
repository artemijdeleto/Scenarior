<template>
	<div class="editor">
		<div class="container">
			{{ `${this.$t('loading')}..` }}
		</div>
	</div>
</template>

<style scoped>
	.container {
		max-width: 30rem;
		font-family: Hack, Consolas, monospace;
	}
</style>

<script>
	export default {
		props: {
			type: String,
			file: String
		}
	}
</script>