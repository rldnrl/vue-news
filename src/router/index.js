import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import UserView from '../views/UserView'
import AskDetailView from '../views/AskDetailView'
import bus from '../utils/bus'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: async (to, from, next) => {
        bus.$emit('start:spinner')
        await store.dispatch('FETCH_LIST', to.name)
        next()
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: async (to, from, next) => {
        bus.$emit('start:spinner')
        await store.dispatch('FETCH_LIST', to.name)
        next()
      }
    },
    {
      path: '/item/:id',
      component: AskDetailView
    },
    {
      path: '/user/:id',
      component: UserView
    }
  ]
})

export default router
