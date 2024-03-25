import { createRouter, createWebHistory } from 'vue-router';

import BMView from './components/BM.vue';
import DayOffView from './components/DayOff.vue';
import HomeView from './components/Phone.vue';

const routes = [
    { path: '/day-off', component: DayOffView },
    { path: '/bm', component: BMView },
    { path: '/', component: HomeView },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
