<template>
	<section class="infos-wrapper">
		<div class="default-container">
			<Infos/>
		</div>
	</section>
</template>

<script>
import Infos from './Infos'
export default {
	name: "Section",
	components: {
		Infos
	},
	data () {
		return {

		}
	},
}
</script>

<style scoped>

	.default-container {
		max-width: 50%;
		margin: auto;
	}

</style>
