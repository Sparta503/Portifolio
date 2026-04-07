import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../components/Views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      if (from.matched.length === 0) {
        return { top: 0 }
      }
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

router.afterEach((to, from) => {
  if (from.matched.length === 0 && to.hash && typeof window !== 'undefined') {
    window.history.replaceState(null, '', to.path)
  }
})

export default router