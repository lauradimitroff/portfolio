<template>
	<div class="projects-items-container">
		<div class="item-project-wrapper" v-for="(project, id) in projectsList" :key="id">
			<router-link :to="'/projects/' + project.id">
				<div class="item-project-wrapper">
					<div class="item-img-wrapper" v-for="(image, id) in project.images" :key="id">
						<img :src="loadImg(image.main)" alt="">
						<div class="item-overlay"></div>
					</div>
					<div class="item-content-wrapper">
						<div class="item-title-wrapper">
							<h2>{{project.title}}</h2>
						</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	const images = require.context('@/assets/img/projects', false, /\.png$|\.jpg$/);
	import projects from "./projects.json";
	export default {
		name: "ProjectsPage",
		computed: {
			projectsList() {
				return projects.projectsList;
			}
		},
		methods: {
			loadImg(imgPath) {
				return images('./' + imgPath)
			}
		}
	}
</script>

<style scoped>

	.projects-items-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
		max-width: 70%;
		margin: 4em auto 2.5em auto;
	}

</style>
