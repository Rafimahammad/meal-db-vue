import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MealDetails from '../components/MealDetails'
import Search from '../components/Search'
import PageNotFound from '../components/PageNotFound'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mealdetails/:id',
    name: 'MealDetails',
    component: MealDetails
  },
  {
    path: '/search',
    name: 'Search',
    component: Search

  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path:'*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
