import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 路由懒加载
const HelloWorld = () => import(/* webpackChunkName: HelloWorld */ '@/components/HelloWorld')
const user = () => import(/* webpackChunkName: user */ '@/components/user')
const userhome = () => import(/* webpackChunkName: userhome */ '@/components/userhome')
const profile = () => import(/* webpackChunkName: profile */ '@/components/profile')
const posts = () => import(/* webpackChunkName: posts */ '@/components/posts')

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/:id',
      component: user,
      // props: true,
      children: [
        {
          path: '',
          component: userhome
        },
        {
          path: '/profile',
          component: profile
        },
        {
          path: 'profile',
          component: profile
        },
        {
          path: 'posts',
          component: posts
        }
      ]
    }
  ]
})
