import HomePage from '../page/home.vue';
import RoadMap from '../page/road-map.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: HomePage },
    { path: '/knowlage/:id', component: RoadMap },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
