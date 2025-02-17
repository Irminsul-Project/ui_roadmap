import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../page/home.vue';
import RoadMapDetail from '../page/roadmap-detail.vue';
import RoadMapHome from '../page/roadmap-home.vue';
import TimeLineHome from '../page/timeline-home.vue';
import TimeLineDetail from '../page/timeline-detail.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/timeline', component: TimeLineHome },
    { path: '/timeline/:id', component: TimeLineDetail },
    { path: '/knowlage', component: RoadMapHome },
    { path: '/knowlage/:id', component: RoadMapDetail },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
