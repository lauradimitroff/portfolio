<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
  @import './assets/css/normalize.css';
  @import './assets/css/vars.css';
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&family=Open+Sans+Condensed:wght@300;700&family=Rufina&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-size: cover;
    color: var(--primary-color);
  }

  * {
    font-family: var(--main-font);
    font-weight: 300;
  }

</style>
