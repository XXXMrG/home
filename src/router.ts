import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/Phone.vue'
import BMView from './components/BM.vue'

const routes = [
  { path: '/bm', component: BMView },
  { path: '/', component: HomeView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})