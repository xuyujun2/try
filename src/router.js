import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

import Search from './components/Search.vue'
import indexs from './components/common/indexs.vue'
import searchContent from './components/common/searchContent.vue'
import Detail from './components/common/detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      redirect:'/search/indexs',
      children:[
        {
          path:'indexs',
          name:'indexs',
          component:indexs
        },
        {
          path:'searchContent',
          name:'searchContent',
          component:searchContent,
        },
        {
          path:'detail',
          name:'detail',
          component:Detail
        }
      ]
    }
  ]
})
