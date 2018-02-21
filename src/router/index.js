import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
