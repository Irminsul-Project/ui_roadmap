import { createRouter, createWebHistory } from 'vue-router';
import BlankLayout from '../layout/blank-layout.vue';
import DefaultLayout from '../layout/default-layout.vue';
import HomePage from '../page/home.vue';
import LoginPage from '../page/login.vue';
import RoadMapDetail from '../page/roadmap-detail.vue';
import RoadMapHome from '../page/roadmap-home.vue';
import ForumHome from '../page/forum-home.vue';
import ForumCreate from '../page/forum-create.vue';
import ForumDetail from '../page/forum-detail.vue';
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
            },
            {
                path: '/forum',
                component: ForumHome,
            }
        ]
    },
    {
        path: '/', component: BlankLayout, children: [
            {
                path: '/login',
                component: LoginPage
            },
            {
                path: '/research/:id',
                component: TimeLineDetail,
                props: true
            },
            {
                path: '/timelinecreate',
                component: TimelineCreate,
            },
            {
                path: '/forum/:id',
                component: ForumDetail,
                props: true
            },
            {
                path: '/forumcreate',
                component: ForumCreate,
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
