<template>
  <div>
    <div class="home">
      <main class="main">
        <div class="container">
          <HomeJumbotron />
          <hr>
          <HomeForm />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import HomeForm from "../components/HomeForm";
import HomeJumbotron from "../components/HomeJumbotron";

export default {
  name: 'home',
  components: {HomeJumbotron, HomeForm},
}
</script>

<style scoped></style>
