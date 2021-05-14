<template>
<section class="homepage-section-wrapper">
	<SectionInfos/>
	<Projects/>
</section>
</template>

<script>
import SectionInfos from './infos/SectionInfos'
import Projects from './projects/Projects'
export default {
	name: "Homepage",
	components: {
		SectionInfos,
		Projects
	},
	data () {
		return {
		}
	},
}
</script>

<style scoped>

</style>
