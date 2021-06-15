<template>
	<div class="infos-content-container">
		<h1>{{name}}</h1>
		<span>{{xp}}</span>
		<span>{{languages}}</span>
		<Btn :data="{btn : 'src/assets/img/bg/about.jpg', btnText: 'Découvrir mon CV'}" />
	</div>
</template>

<script>
	import Btn from '.././Btn'
	export default {
		name: "AboutMe",
		components: {
			Btn
		},
		data() {
			return {
				name: 'Laura Ellul',
				xp: '2 ans d\'expérience',
				languages: 'Anglais, allemand'
			}
		},
	}
</script>

<style scoped>

	.infos-content-container {
		display: flex;
		flex-direction: column;
	}

	h1	{
		font-family: var(--third-font);
		font-weight: 500;
		transition: all 0.35s ease-in-out;
		letter-spacing: 3px;
	}

</style>
