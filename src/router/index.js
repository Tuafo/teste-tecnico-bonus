import { createRouter, createWebHistory } from 'vue-router'
import FinanceCard from '../components/FinanceCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FinanceCard
    }
  ]
})

export default router
