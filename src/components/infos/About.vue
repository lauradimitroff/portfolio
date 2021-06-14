<template>
	<div class="content-about-wrapper">
		<div class="default-container">
			<div class="infos-container">
<!--				<Logo/>-->
				<AboutInfos/>
			</div>
		</div>
	</div>
</template>

<script>
	// import Logo from '../_partials/header/Logo'
	import AboutInfos from './AboutInfos'
	export default {
		name: "About",
		components: {
			// Logo,
			AboutInfos
		},
		data() {
			return {
			}
		},
	}
</script>

<style scoped>

	.default-container {
		max-width: 60%;
		margin: auto;
	}

	.content-about * {
		font-family: var(--third-font);
		font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));
	}

	h1	{
		margin-bottom: 0.5em;
	}

</style>
