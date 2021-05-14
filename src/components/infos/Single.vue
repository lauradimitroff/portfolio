<template>
	<div class="info-item-wrapper">
		<div class="info-item" v-for="item in items" :key="item.title">
			<div class="info-item-icon">
<!--				<img :src="item.icon" alt="">-->
				<span class="circle"></span>
			</div>
			<div class="info-item-content">
				<p>{{item.title}}</p>
				<span>{{item.subtitle}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Single",
		data () {
			return {
				items: [
					{
						title: 'Matériaux',
						subtitle: '100% recyclés'
					},
					{
						title: 'Issu du',
						subtitle: 'commerce équitable'
					},
					{
						title: '30% des bénéfices reversés',
						subtitle: 'à une association'
					}
				]
			}
		}
	}
</script>

<style scoped>

	.info-item-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.info-item {
		position: relative;
		display: flex;
		align-items: center;
	}

	span.circle {
		position: absolute;
		z-index: 0;
		left: 10px;
		top: -2px;
		display: inline-block;
		background: rgba(178,117,86,0.35);
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}

	.info-item-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-left: 1em;
	}

	p {
		margin-bottom: 0;
	}

</style>
