import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/v1/HomeView.vue'
import HomeViewV2 from '@/views/v2/HomeViewV2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/v1',
      name: 'home_v1',
      component: HomeView
    },
    {
      path: '/v2',
      name: 'home_v2',
      component: HomeViewV2
    },
  ]
})

export default router
