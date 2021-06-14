<template>
	<div class="contact-infos-wrapper">
		<h1>{{title}}</h1>
		<div class="info-items-wrapper">
			<div class="info-item" v-for="item in items" :key="item.title">
				<div class="info-item-content">
<!--					<span>{{item.text}}</span>-->
					<a :href="item.url" target="_blank" :title="item.text">
						<div class="info-item-icon">
							<i :class="item.icon"></i>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ContactInfos",
		data() {
			return {
				title: 'Pour me contacter',
				items: [
					{
						text: 'M\'écrire',
						url: 'mailto:lauraellul@gmail.com',
						icon: 'far fa-envelope'
					},
					{
						text: 'Rejoindre mon réseau',
						url: 'https://www.linkedin.com/in/lauraellul/',
						icon: 'fab fa-linkedin-in'
					}
				]
			}
		},
	}
</script>

<style scoped>

	.contact-infos-wrapper h1 {
		padding-bottom: .25em;
	}

	.info-items-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.info-item-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.info-item-content a {
		font-size: calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)));
	}

	.info-item span {
		font-size: 20px;
	}

	.info-item-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background: var(--primary-color);
		transition: all 0.35s ease-in-out;
		width: 50px;
		height: 50px;
	}

	.info-item-icon:hover {
		background: var(--secondary-color);
	}

	.info-item-content a {
		color: #fff;
	}

</style>
