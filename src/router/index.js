import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PortfolioLayout from "../views/PortfolioLayout";
import PortfolioVue from "../views/PortfolioVue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Сайт-портфолио начинающего веб-разработчика',
    }
  },
  {
    path: '/portfolio-layout',
    name: 'portfolio-layout',
    component: PortfolioLayout,
    meta: {
      title: 'Примеры верстки',
    }
  },
  {
    path: '/portfolio-vue',
    name: 'portfolio-vue',
    component: PortfolioVue,
    meta: {
      title: 'Примеры SPA Vue',
    }
  },
  {
    path: '/*',
    redirect: { name: 'Home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
