<template>
  <div class="nav__wrapper" v-bind:class="{isShown: isActive}">
    <div class="overlay"></div>
    <ul>
      <li class="close">Fermer</li>
      <li v-for="link in links" :key="link.label">
        <a :href="link.url">{{link.label}}</a>
      </li>
    </ul>
    <div class="burger" v-on:click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      links: [
        {
          label: 'Accueil',
          url: '/'
        },
        {
          label: 'À propos',
          url: '/apropos'
        },
        {
          label: 'Mes projets',
          url: '/projects'
        },
        {
          label: 'Contact',
          url: '/contact'
        }
      ],
      isActive: false
    }
  },
  methods: {
    showMenu: function () {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>

  .close {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  ul li a {
    font-family: var(--third-font);
    color: var(--secondary-color);
    transition: all 0.35s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  ul li a:hover {
    color: #fff;
  }

  @media (max-width : 1023px) {

    .burger {
      position: fixed;
      top: 0;
      right: 0;
      height: 40px;
      width: 40px;
    }

    .burger span {
      display: block;
      background-color: #fff;
      width: 20px;
      height: 2px;
      margin: 5px auto;
    }

    .nav__wrapper {
      position: fixed;
      z-index: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      right: 0;
      /*pointer-events: none;*/
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 0;
      background: rgba(56, 75, 99, .3);
      transition: all 0.3s ease-in-out;
    }

    .nav__wrapper.isShown .overlay {
      width: 100%;
      pointer-events: all;
    }

    .nav__wrapper ul {
      position: relative;
      width: 100%;
      max-width: 320px;
      height: 100%;
      background: #384B63;
      transform: translate3d(-100%, 0, 0);
      transition: all 0.3s ease-in-out;
      margin: 0;
      list-style-type: none;
    }

    .nav__wrapper.isShown ul {
      transform: translate3d(0, 0, 0);
      pointer-events: all;
    }

    .nav__wrapper ul a {
      padding: 1em 0;
      display: inline-block;
      color: white;
      text-decoration: none;
    }

    .close {
      color: white;
      display: flex;
      justify-content: flex-end;
    }

  }



</style>
