import Vue from 'vue'
import Router from 'vue-router'
import Carton from './components/Carton'
import Welfare from '../public/Welfare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Carton',
      component: Carton
    },
    {
      path: '/welfare',
      name: 'Welfare',
      component: Welfare
    }
  ]
})
