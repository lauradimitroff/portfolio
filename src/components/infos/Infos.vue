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

	.infos-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #fff;
		box-shadow: 10px 10px 100px rgb(0 0 0 / 20%);
		border-radius: 9px;
		margin-top: -75px;
		padding: 0 0 calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320))) 0;
	}

</style>
