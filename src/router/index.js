import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Player from '@/components/Player'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
        Children:[
          {path:'/Home/login',component:login}
        ]
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Player',
      name: 'Player',
      component: Player
    },
  ]
})
