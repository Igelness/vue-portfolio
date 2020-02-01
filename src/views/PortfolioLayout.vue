<template>
  <div>
    <main class="main">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div>
              <h1 class="portfolio__title">Примеры статической верстки</h1>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-4" v-for="item of portfolioItems" :key="item.title">
            <div class="portfolio__item">
              <div class="portfolio__item-content">
                <img class="portfolio__image"  :src=item.imageSrc :alt=item.title>
              </div>
              <div class="portfolio__text">
                <div class="portfolio__item-title">{{ item.title }}</div>
                <div class="portfolio__item-description">{{ item.description }}</div>
                <div class="portfolio__item-description"><a :href=item.githubSrc>Ссылка на github</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "Portfolio",
  data: () => ({
    portfolioItems: [
      {
        title: 'САЙТ ПО ОПЛАТЕ ШТРАФОВ',
        description: 'Оплата штрафов, задолженностей, пошлин',
        imageSrc: require('../images/portfolio-item2-bg.png'),
        githubSrc: 'https://github.com/Igelness/tprs-test',
      },
      {
        title: 'ИНТЕРНЕТ-МАГАЗИН МЯТА',
        description: 'Главная страница интернет-магазина',
        imageSrc: require('../images/portfolio-item1-bg.png'),
        githubSrc: 'https://github.com/Igelness/mint-onlinestore',
      },
      {
        title: 'САЙТ СТРОИТЕЛЬНОЙ КОМПАНИИ',
        description: 'Сайт-визитка',
        imageSrc: require('../images/portfolio-item3-bg.png'),
        githubSrc: 'https://github.com/Igelness/heavy-con',
      },
      {
        title: 'АГЕНТСТВО САЙТ-ВИЗИТКА',
        description: 'Landing page',
        imageSrc: require('../images/portfolio-item4-bg.png'),
        githubSrc: 'https://github.com/Igelness/Marble',
      },
      {
        title: 'ПИСЬМО-ПОРТФОЛИО',
        description: 'Верстка письма с рекламной информацией',
        imageSrc: require('../images/portfolio-item5-bg.png'),
        githubSrc: 'https://github.com/Igelness/mail-portfolio',
      },
    ],
  })
}
</script>

<style scoped>
</style>