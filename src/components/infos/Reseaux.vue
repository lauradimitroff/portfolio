<template>
	<div class="infos-rs-wrapper">
		<div class="info-item" v-for="item in items" :key="item.title">
			<div class="info-item-icon">
				<a :href="item.url" target="_blank">
					<i :class="item.icon"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Reseaux",
		data () {
			return {
				items: [
					{
						url: 'https://github.com/lauraellul',
						icon: 'fab fa-github'
					},
					{
						url: 'https://www.linkedin.com/in/lauraellul/',
						icon: 'fab fa-linkedin-in'
					},
					{
						url: 'mailto:lauraellul@gmail.com',
						icon: 'far fa-envelope'
					}
				]
			}
		}
	}
</script>

<style scoped>

	.infos-rs-wrapper {
		display: flex;
		margin-top: 1em;
	}

	.info-item:not(:last-of-type) {
		padding-right: 0.5em;
	}

	.info-item svg {
		width: 2em;
		height: 1.75em;
	}

	.info-item a svg path {
		fill: var(--second-font);
	}

</style>
