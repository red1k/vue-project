import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/test', name: 'Test', component: Test }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
