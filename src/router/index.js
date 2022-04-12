import { createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Project from '@/views/Project.vue';
import Career from '@/views/Career.vue';
import Contact from '@/views/Contact.vue';

import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Accueil - Catif'
        }
    }, {
        name: 'Project',
        path: '/projects',
        component: Project,
        meta: {
            title: 'Projets - Catif'
        }
    }, {
        name: 'Career',
        path: '/career',
        component: Career,
        meta: {
            title: 'Parcours - Catif'
        }
    }, {
        name: 'Contact',
        path: '/contact',
        component: Contact,
        meta: {
            title: 'Contact - Catif'
        }
    }, {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: 'Error 404 - Catif'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to) => {
    document.title = to.meta.title;
})

export default router;