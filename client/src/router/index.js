import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DetailProduct from '@/components/DetailProduct'
import Carts from '@/components/Carts'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'DetailProduct',
      component: DetailProduct,
      props: true
    },
    {
      path: '/carts',
      name: 'Carts',
      component: Carts,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
