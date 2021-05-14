<template>
	<header>
		<div class="header__wrapper">
			<div class="header__container">
				<!--      <div class="header__logo">-->
				<!--        <Logo/>-->
				<!--      </div>-->
				<div class="header__actions">
					<div class="header__menu">
						<Menu/>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import Menu from './Menu'
	// import Logo from './Logo'
	export default {
		name: 'Header',
		components: {
			Menu,
			// Logo,
		},
		data() {
			return {
				logo: 'Home'
			}
		}
	}
</script>

<style scoped>

	header {
		background: url(../../../assets/img/bg/bg-wrapper-v2.jpg) no-repeat fixed;
		background-size: contain;
		padding: 0.5em 0;
	}

	.header__container {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
      justify-content: center;
      width: 60%;
      min-height: 300px;
      margin: auto;
	}

	.header__actions {
		display: flex;
		align-items: center;
		width: 100%;
		margin: 1.5em 0;
	}

	.header__menu {
		width: 100%;
	}

</style>
