<template>
  <div id="app">
    <Loader v-if="loading"/>
    <div class="content" v-else>
      <Navbar v-if="['Home','portfolio-layout', 'portfolio-vue'].indexOf($route.name) > -1"/>
        <router-view />
        <div>
          <a class="upbtn" v-on:click="scrollUp">
            <span></span>
          </a>
        </div>
      <Footer v-if="['Home','portfolio-layout', 'portfolio-vue'].indexOf($route.name) > -1 "/>
    </div>
  </div>
</template>


<script>
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
  import Loader from "./components/Loader";

  export default {
    components: {
      Navbar,
      Footer,
      Loader
    },
    data: () => ({
      loading: true,
    }),
    methods: {
      scrollUp() {
        window.scroll(0, 0);
      },
    },
    created() {
      setTimeout(() => this.loading = false, 1000);
    }
  }

</script>

<style >
  @import "~bootstrap/dist/css/bootstrap.min.css";
  @import "~bootstrap-vue/dist/bootstrap-vue.min.css";
  @import "assets/style.min.css";
  @import "assets/styles-portfolio-layout.css";
  @import "assets/media.css";
</style>
