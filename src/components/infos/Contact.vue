<template>
	<div class="infos-wrapper">
		<div class="default-container">
			<div class="infos-container">
				<Logo/>
				<ContactInfos/>
			</div>
		</div>
	</div>

</template>

<script>
	import Logo from '../_partials/header/Logo'
	import ContactInfos from './ContactInfos'
	export default {
		name: "Contact",
		components: {
			Logo,
			ContactInfos
		},
		data() {
			return {}
		},
	}
</script>

<style scoped>

	.default-container {
		max-width: 60%;
		margin: auto;
	}

</style>
