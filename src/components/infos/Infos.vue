<template>
	<div class="infos-container">
<!--		<Title :data="{title: 'À propos de moi'}" />-->
		<Logo/>
		<About/>
		<Reseaux/>
	</div>
</template>

<script>
	// import Title from '.././Title'
	import Logo from '../_partials/header/Logo'
	import About from "./About";
	import Reseaux from "./Reseaux";
	export default {
		name: "Infos",
		components: {
			// Title,
			Logo,
			About,
			Reseaux
		},
		data() {
			return {}
		},
	}
</script>

<style scoped>

</style>
