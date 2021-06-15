<template>
	<footer>
		<div class="footer-container">
			<div class="footer-links">
				<a :href="url">{{mentions}}</a>
			</div>
			<div class="footer-design">
				<span>© {{ new Date().getFullYear() }} {{design}}</span>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		components: {

		},
		data () {
			return {
				url: '/mentionslegales',
				mentions: 'Mentions légales',
				design: 'Design et développement : Laura Ellul'
			}
		}
	}
</script>

<style scoped>

	footer {
		background: var(--primary-color);
		transition: all 0.35s ease-in-out;
		letter-spacing: 4px;
	}

	footer * {
		font-family: var(--third-font);
	}

	.footer-container {
		display: flex;
		color: #fff;
		justify-content: space-around;
		padding: .75em 0;
	}

	.footer-links a {
		color: #fff;
	}

	.footer-links a:hover {
		color: var(--secondary-color);
	}

</style>
