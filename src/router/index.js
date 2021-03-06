import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'conocernos',
    },
  },
  {
    path: '/de-conocernos',
    name: 'conocernos',
    component: () =>
      import(/* webpackChunkName: "conocernos" */ '../views/Conocernos.vue'),
  },
  {
    path: '/juntos',
    name: 'juntos',
    component: () =>
      import(/* webpackChunkName: "juntos" */ '../views/Juntos.vue'),
  },
  {
    path: '/para-vernos',
    name: 'vernos',
    component: () =>
      import(/* webpackChunkName: "vernos" */ '../views/Vernos.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
