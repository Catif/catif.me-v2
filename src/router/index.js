import { createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import Project from '@/views/Project.vue';

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
        name: 'Contact',
        path: '/contact',
        component: Contact,
        meta: {
            title: 'Contact - Catif'
        }
    }, {
        name: 'Project',
        path: '/projects',
        component: Project,
        meta: {
            title: 'Projets - Catif'
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