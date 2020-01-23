<template>
  <section class="description">
    <div class="row">
      <div class="col-xl-12">
        <div class="jumbotron">
          <h1 class="jumbotron__title animated fadeInDown">{{ title }}</h1>
          <br>
          <p class="jumbotron__description animated fadeInDown delay-1s">{{ description }}</p>
          <hr class="divider">
          <div class="row">
            <div class="col md-4" >
              <ul class="jumbotron__features animated fadeInDown delay-2s">
                <li
                  v-bind:key="feature"
                  v-for="feature of features[0]"
                  class="jumbotron__features-item ">{{feature}}
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="jumbotron__features animated fadeInDown delay-2s">
                <li
                  v-bind:key="feature"
                  v-for="feature of features[1]"
                  class="jumbotron__features-item ">{{feature}}
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="jumbotron__features animated fadeInDown delay-2s">
                <li
                  v-bind:key="feature"
                  v-for="feature of features[2]"
                  class="jumbotron__features-item ">{{feature}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "HomeJumbotron",
    data: () =>  ({
      features: [
        [
          "HTML/HTML5, CSS/CSS3",
          "Adobe Photoshop, Figma, Zeplin",
          "LESS, SASS, SCSS"
        ],
        [
          "БЭМ, Git, Webpack, Gulp 4",
          "Кроссбраузерная, адаптивная верстка",
          "Bootstrap 4, Vuetify, Materialize",
        ],
        [
          "JS, jQuery, работа с DOM, событиями",
          "Спрайты, Retina, SVG",
          "Vue, Ajax (fetch, XHR)"
        ]
      ],
      title: "Anton Vorobyov's Personal Website.",
      description: `Начинающий веб-разработчик,\n специализирующийся на front-end разработке и
                  \n создании удобных сайтов с\n адаптивной версткой`
    })
  }
</script>

<style scoped>
</style>