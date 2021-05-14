<template>
	<section class="projects-section">
		<Title :data="{title: 'Mes projets'}" />
		<div class="projects-wrapper">
			<ProjectsList />
		</div>
		<Btn :data="{btn : '/projects', btnText: 'Tous mes projets'}" />
	</section>
</template>

<script>
	import Title from '.././Title'
	import ProjectsList from './ProjectsList'
	import Btn from '.././Btn'

	export default {
		name: 'Projects',
		components: {
			Title,
			Btn,
			ProjectsList
		}
	}
</script>

<style scoped>

	section.projects-section {
		padding: 5em 0;
	}

	.projects-wrapper * {
		border-radius: 9px;
	}

</style>
