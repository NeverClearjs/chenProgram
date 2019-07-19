import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import '../assets/css/iconfont.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      name: 'search',
      path: '/search',
      component: resolve => require(['../components/search.vue'], resolve)
    },
  ]
})
