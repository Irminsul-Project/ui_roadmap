import { createRouter, createWebHistory } from 'vue-router';
import BlankLayout from '../layout/blank-layout.vue';
import DefaultLayout from '../layout/default-layout.vue';
import HomePage from '../page/home.vue';
import LoginPage from '../page/login.vue';
import ForumHome from '../page/forum-home.vue';
import ForumCreate from '../page/forum-create.vue';
import ForumDetail from '../page/forum-detail.vue';
import ResearchCreate from '../page/research-create.vue';
import TimeLineDetail from '../page/research-detail.vue';
import TimeLineHome from '../page/research-home.vue';

const routes = [
    {
        path: '/', component: DefaultLayout, children: [
            {
                path: '/',
                component: HomePage,
            },
            {
                path: '/research',
                component: TimeLineHome,
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
                path: '/researchcreate',
                component: ResearchCreate,
            },
            {
                path: '/forum/:id',
                component: ForumDetail,
                props: true
            },
            {
                path: '/forumcreate',
                component: ForumCreate,
            }
        ]
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
