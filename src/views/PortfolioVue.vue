<template>
  <div class="container portfolio__container">
    <div class="row">
      <div class="col-xl-12">
        <div>
          <h1 class="portfolio__title">Примеры vue</h1>
        </div>
        <div class="col-xl-12 vuePortfolio__wrapper" v-for="vueItem of vueItems" :key="vueItem.title">
          <div class="vuePortfolio__item">
            <img class="vuePortfolio__image" :src=vueItem.imageSrc :alt=vueItem.title>
            <div class="vuePortfolio__text">
              <h2>{{ vueItem.title }}</h2>
              <p class="vuePortfolio__item-description"><span class="text-primary">Описание: </span>{{ vueItem.description }}</p>
              <p class="vuePortfolio__item-features"><span class="text-primary">Функциональность: </span> {{ vueItem.features }}</p>
              <p class="vuePortfolio__item-stack"><span class="text-primary">Tech: </span>{{ vueItem.stack }}</p>
              <p class="vuePortfolio__item-github"><a :href=vueItem.githubSrc>Ссылка на Github</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "PortfolioVue",
    data: () => ({
      vueItems: [{
        imageSrc: 'https://puu.sh/F5Jhl/53b24f046d.png',
        title: 'Store Page',
        description: 'Повторение функциональности большинства интернет-магазинов',
        features: 'Добавление в избранное; поиск необходимого товара по названию; полноценная работа с корзиной: добавление товара, удаление товара, удаление категории товара; отображение товаров: всех на одной странице, с помощью пагинации; сортировка по цене: возрастание и убывание; отдельная страница для каждого товара.',
        stack: 'HTML5, CSS3, JS, Vue, Vuetify, Webpack, Git',
        githubSrc: 'https://github.com/Igelness/vue-storepage',
      }],
    })
  }
</script>

<style scoped>
  h2 {
    font-size: 24px;

  }
  .portfolio__container {
    min-height: 800px;
  }
  .vuePortfolio__image {
    max-width: 600px;
  }
  .vuePortfolio__wrapper {
    padding: 0;
    font-family: Roboto, sans-serif;
  }
  .vuePortfolio__item {
    display: flex;
    padding: 0;
  }
  .vuePortfolio__item-title {
    color: #373A3C;
  }
  .vuePortfolio__text {
    margin-left: 30px;
  }

  @media (max-width: 1203px) {
    .vuePortfolio__image {
      max-width: 400px;
      max-height: 230px;
    }
  }
  @media (max-width: 1003px) {
    .vuePortfolio__image {
      display: flex;
      justify-content: center;
      margin: auto
    }
    .vuePortfolio__item {
      display: block;
    }
    .vuePortfolio__text {
      margin-top: 30px;
    }
  }
  @media (max-width: 500px) {
    .vuePortfolio__image {
      max-width: 300px;
      max-height: 130px;
    }
  }

</style>