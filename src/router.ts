import { createRouter, createWebHistory } from 'vue-router';

import BMView from './components/BM.vue';
import HomeView from './components/Phone.vue';

const routes = [
    { path: '/bm', component: BMView },
    { path: '/', component: HomeView },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
