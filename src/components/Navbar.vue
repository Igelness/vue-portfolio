<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-6 col-xl-9">
          <div><a class="header__mobile-btn" v-on:click="toggleMenu"></a></div>
          <div class="header__content">
            <div class="header__logo">
              <router-link class="header__logo-link" to="/">Anton Vorobyov</router-link>
            </div>
            <nav class="header__menu" id="menu" >
              <ul>
                <li v-for="item in navLinks">
                  <router-link
                    exact
                    active-class="active"
                    :to=item.url
                  >{{ item.text }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 col-xl-3">
          <div class="header__contacts" id="contacts">
            <div class="header__phone"><a href="tel:+79006295729">+7 (900) 629-57-29</a></div>
            <div class="header__email"><a href="mailto:a.a.vorobyev0@gmail.com">a.a.vorobyev0@gmail.com</a></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    name: "Navbar",
    data: () => ({
      navLinks: [
        {
          url: '/',
          text: 'Главная'
        },
        {
          url: '/portfolio-vue',
          text: 'Примеры Vue'
        },
        {
          url: '/portfolio-layout',
          text: 'Примеры статической верстки'
        },
      ]
    }),
    methods: {
      toggleMenu () {
        const menu = document.getElementById("menu");
        const contacts = document.getElementById("contacts");
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'
        contacts.style.display = (contacts.style.display ===  'block') ? 'none' : 'block'
      }
    }
  }
</script>

<style scoped>

</style>