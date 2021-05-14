<template>
  <main>
    <Header/>
    <div class="wrapper">
      <router-view/>
    </div>
  </main>
</template>

<script>
import Header from './_partials/header/Header'

export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>

<style scoped>


</style>
