import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../page/home.vue';
import RoadMapDetail from '../page/roadmap-detail.vue';
import RoadMapHome from '../page/roadmap-home.vue';
import TimeLineHome from '../page/timeline-home.vue';
import TimeLineDetail from '../page/timeline-detail.vue';

const routes = [
    {
        path: '/',
        component: HomePage,
        props: { sidebar: false }
    },
    {
        path: '/timeline',
        component: TimeLineHome,
        props: { sidebar: false }
    },
    {
        path: '/timeline/:id',
        component: TimeLineDetail,
        props: { sidebar: false }
    },
    {
        path: '/knowlage',
        component: RoadMapHome,
        props: { sidebar: false }
    },
    {
        path: '/knowlage/:id',
        component: RoadMapDetail,
        props: { sidebar: false }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
