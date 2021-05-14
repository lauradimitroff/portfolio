<template>
	<div class="btn-container">
		<button>
			<a :href="btn">{{btnText}}</a>
		</button>
	</div>
</template>

<script>
	export default {
		name: "Btn",
		props: ['data'],
		data() {
			return {
				...this.data
			}
		},
	}
</script>

<style scoped>

	button {
		overflow: hidden;
		display: inline-block;
		background: linear-gradient(to right, var(--secondary-color) 50%, var(--primary-color) 50%) border-box,linear-gradient(#FFF,#FFF) padding-box left;
		background-position: right bottom;
		background-size: 205% 100%;
		border-radius: 7px;
		border: none;
		color: #fff;
		transition: all 0.5s ease-in-out;
		margin: 0.5em 0;
		padding: 0.75em 1.5em;
	}

	button:hover {
		background-position: left bottom;
		color: #fff;
	}

	button a {
		font-family: var(--third-font);
		font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));
	}

	button:hover a {
		color: var(--primary-color);
	}

</style>
