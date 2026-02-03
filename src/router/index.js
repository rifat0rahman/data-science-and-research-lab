import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/landing.vue'
import About from '../views/about.vue'
import Training from '../views/training.vue'
import Research from '../views/research.vue'
import Services from '../views/services.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/training',
      name: 'training',
      component: Training,
    },
    {
      path: '/research',
      name: 'research',
      component: Research,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    }
  ],
})

export default router
