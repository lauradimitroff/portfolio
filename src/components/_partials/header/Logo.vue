<template>
	<div class="logo__wrapper">
		<a href="/">
			<img src="../../../assets/img/logo/logo.jpg" alt="image de profil">
		</a>
	</div>
</template>

<script>
	export default {
		name: "Logo"
	}
</script>

<style scoped>

	.logo__wrapper {
		display: flex;
		align-items: center;
		width: calc(150px + (200 - 150) * ((100vw - 320px) / (1920 - 320)));
		height: calc(150px + (200 - 150) * ((100vw - 320px) / (1920 - 320)));
		margin-top: -40px;
	}

	.logo__wrapper img {
		border-radius: 50%;
	}

</style>
