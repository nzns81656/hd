import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/login/index'
import map from '@/view/login/map'

Vue.use(Router)

export default new Router({
  // mode: 'Hash',
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/Login/index'
    },
    {
      path: '/login/index',
      name: 'index',
      component: index
    },
    {
      path: '/login/map',
      name: 'map',
      component: map
    }
  ]
})
