<template>
	<div class="projects-items-container">
		<div class="items-project-wrapper" v-for="(project, id) in projects" :key="id">
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
		name: "ProjectsList",
		computed: {
			projects() {
				return projects.projectsList.filter(project => project.onHomepage === true);
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
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 25px;
		width: 67%;
		margin: 4em auto 2.5em auto;
	}

	.items-project-wrapper * {
		border-radius: 5px;
		max-height: calc(300px + (400 - 300) * ((100vw - 320px) / (1920 - 320)));
	}

	.item-project-wrapper {
		position: relative;
	}

	.item-project-wrapper h2 {
		color: #fff;
		opacity: 0;
		transition: all .4s ease-in-out;
	}

	.item-img-wrapper img {
		object-fit: cover;
		width: 100%;
	}

	.item-overlay {
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(15, 43, 40, .0);
		opacity: 1;
		transition: all .4s ease-in-out;
		width: 100%;
		height: 100%;
	}

	.item-project-wrapper:hover .item-overlay {
		background-color: rgba(15, 43, 40, .85);
	}

	.item-project-wrapper:hover h2 {
		opacity: 1;
	}

	.item-content-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

</style>
