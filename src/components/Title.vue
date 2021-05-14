<template>
	<div class="info-title-container">
		<h2>{{title}}</h2>
	</div>
</template>

<script>
	export default {
		name: "Title",
		props: ['data'],
		data() {
			return {
				...this.data
			}
		},
	}
</script>

<style scoped>

	h2 {
		font-family: var(--second-font);
		font-size: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
		font-weight: 500;
		margin: 0.5em 0 1em 0;
	}

</style>
