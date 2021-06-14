<template>
  <main>
    <Header/>
    <div class="wrapper">
      <router-view/>
    </div>
    <Footer/>
  </main>
</template>

<script>
import Header from './_partials/header/Header'
import Footer from './_partials/footer/Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>


</style>
