<template>
	<div class="content-about">
		<h1>{{name}}</h1>
		<p>{{specialty}}</p>
		<Btn :data="{btn : '/about', btnText: 'En savoir plus'}" />
	</div>
</template>

<script>
	import Btn from '.././Btn'
	export default {
		name: "About",
		components: {
			Btn
		},
		data() {
			return {
				name: 'Je suis Laura Ellul.',
				specialty: 'Je suis développeuse web spécialisée en front-end.'
			}
		},
	}
</script>

<style scoped>

	.content-about * {
		font-family: var(--third-font);
		font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));
	}

	h1	{
		margin-bottom: 0.5em;
	}

</style>
