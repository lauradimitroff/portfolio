<template>
	<div class="single-project-wrapper">
		<div class="single-project-img">
			<div class="project-img-wrapper" v-for="(image, id) in details.images" :key="id">
				<img :src="loadImg(image.bg)" :alt="details.title">
			</div>
		</div>
		<div class="single-project-content">
			<div class="single-project-description single-project-item">
				<div class="single-content">
					<h2 class="content-title">{{ details.title }}</h2>
					<p>{{ details.description }}</p>
				</div>
				<div class="btn-wrapper">
					<a :href="details.link" target="_blank">Voir le site</a>
				</div>
			</div>
			<div class="single-project-summary single-project-item">
				<h2 class="content-title">Mon rôle sur ce projet</h2>
				<div class="project-summary">
					<p>{{ details.summary }}</p>
				</div>
			</div>
			<div class="single-project-cms single-project-item">
				<h2 class="content-title">Détails techniques</h2>
				<div class="project-cms">
					<p>CMS utilisé : {{ details.cms }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import projects from "./projects.json";
	const images = require.context('@/assets/img/projects', false, /\.png$|\.jpg$/);
	export default {
		name: "Details",
		data() {
			return {
				id: this.$route.params.id,
				details: {

				}
			}
		},
		methods: {
			loadImg(imgPath) {
				return images('./' + imgPath)
			}
		},
		mounted() {
			this.details = projects.projectsList.find(project => project.id == this.$route.params.id)
		}
	}
</script>

<style scoped>

	.single-project-wrapper {
		display: grid;
		grid-template-columns: 35% auto;
	}

	.project-img-wrapper {
		object-fit: cover;
		min-width: 400px;
		height: 100%;
	}

	.project-img-wrapper img {
		width: 100%;
	}

	.single-project-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.content-title {
		font-family: var(--second-font);
		font-size: calc(40px + (60 - 40) * ((100vw - 320px) / (1920 - 320)));
		font-weight: 500;
	}

	.single-project-content {
		width: 70%;
		padding: 2.5em;
	}

	p {
		font-family: var(--third-font);
		font-size: calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)));
		font-weight: 300;
		text-align: left;
		line-height: 1.5em;
	}

	.single-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.btn-wrapper a {
		display: inline-block;
		background: var(--primary-color);
		color: #fff;
		border: 1px solid var(--primary-color);
		transition: all 0.35s ease-in-out;
		padding: 0.5em 2em;
	}

	.btn-wrapper a:hover {
		background: #fff;
		color: var(--primary-color);
	}

</style>
