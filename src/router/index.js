import { createRouter, createWebHistory } from 'vue-router';
import BlankLayout from '../layout/blank-layout.vue';
import DefaultLayout from '../layout/default-layout.vue';
import HomePage from '../page/home.vue';
import RoadMapDetail from '../page/roadmap-detail.vue';
import RoadMapHome from '../page/roadmap-home.vue';
import TimelineCreate from '../page/timeline-create.vue';
import TimeLineDetail from '../page/timeline-detail.vue';
import TimeLineHome from '../page/timeline-home.vue';

const routes = [
    {
        path: '/', component: DefaultLayout, children: [
            {
                path: '/',
                component: HomePage,
            },
            {
                path: '/timeline',
                component: TimeLineHome,
            },
            {
                path: '/knowlage',
                component: RoadMapHome,
            }
        ]
    },
    {
        path: '/', component: BlankLayout, children: [
            {
                path: '/timeline/:id',
                component: TimeLineDetail,
                props: true
            },
            {
                path: '/timelinecreate',
                component: TimelineCreate,
            },
            {
                path: '/knowlage/:id',
                component: RoadMapDetail,
                props: true
            }
        ]
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
