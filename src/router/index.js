import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import post from '@/views/post'
import about from '@/views/about'

Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/post/:cid',
      name: 'post',
      component: post
    },{
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
