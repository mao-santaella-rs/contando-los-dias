import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'conocernos'
    }
  },
  {
    path: '/de-conocernos',
    name: 'conocernos',
    component: () =>
      import(/* webpackChunkName: "conocernos" */ '../views/Conocernos.vue')
  },
  {
    path: '/para-vernos',
    name: 'vernos',
    component: () =>
      import(/* webpackChunkName: "vernos" */ '../views/Vernos.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
