<template>
	<div class="content-about-wrapper">
		<div class="infos-container default-container">
			<Logo/>
			<div class="content-infos">
				<AboutMe/>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '../_partials/header/Logo'
	import AboutMe from './AboutMe'
	export default {
		name: "About",
		components: {
			Logo,
			AboutMe
		},
		data() {
			return {
				name: 'Laura Ellul',
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

	.infos-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #fff;
		box-shadow: 10px 10px 100px rgb(0 0 0 / 20%);
		border-radius: 9px;
		padding: 0 0 calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320))) 0;
	}

	.default-container {
		max-width: 50%;
		margin: auto;
		margin-top: -75px;
	}

</style>
