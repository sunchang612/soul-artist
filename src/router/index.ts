import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/editor',
    name: 'Editor',
    // route level code-splitting
    // this generates a separate chunk (editor.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "editor" */ '../views/Editor.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
