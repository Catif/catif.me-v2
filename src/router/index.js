import { createRouter, createWebHistory} from 'vue-router';


import Home from '@/views/Home.vue';
import Project from '@/views/Project.vue';
    // Projects
        // Perso
        import Perso_Catif_1 from '@/views/projects/perso/Catif-1.vue';
        import Perso_Catif_2 from '@/views/projects/perso/Catif-2.vue';

        // Etude
        import Study_Jeu_des_Balles from '@/views/projects/study/Jeu-des-Balles.vue';
        import Study_Parc_Informatique from '@/views/projects/study/Parc-Informatique.vue';
        import Study_Formulaire_De_Competence_PHP from '@/views/projects/study/Formulaire-De-Competence_PHP.vue';
        import Study_Formulaire_De_Competence_CS from '@/views/projects/study/Formulaire-De-Competence_CS.vue';
        import Banqueroute from '@/views/projects/study/Formulaire-De-Competence_CS.vue';

        // Stage
        import Stage_eZHost from '@/views/projects/stage/eZHost.vue';
        import Stage_eZHub from '@/views/projects/stage/eZHub.vue';


import Career from '@/views/Career.vue';

import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        path: '/', component: Home,
        meta: {
            title: 'Accueil - Catif'
        }
    }, {
        path: '/projects', component: Project,
        meta: {
            title: 'Projets - Catif'
        }
    }, 
    // Projects
        // Perso
        { path: '/projects/perso/Catif-1', component: Perso_Catif_1, meta: {title: 'Projets - Catif'}}, 
        { path: '/projects/perso/Catif-2', component: Perso_Catif_2, meta: {title: 'Projets - Catif'}}, 

        // Study
        { path: '/projects/study/Jeu-des-Balles', component: Study_Jeu_des_Balles, meta: {title: 'Projets - Catif'}}, 
        { path: '/projects/study/Parc-Informatique', component: Study_Parc_Informatique, meta: {title: 'Projets - Catif'}}, 
        { path: '/projects/study/Formulaire-De-Competence_PHP', component: Study_Formulaire_De_Competence_PHP, meta: {title: 'Projets - Catif'}}, 
        { path: '/projects/study/Formulaire-De-Competence_CS', component: Study_Formulaire_De_Competence_CS, meta: {title: 'Projets - Catif'}}, 
        { path: '/projects/study/Banqueroute', component: Banqueroute, meta: {title: 'Projets - Catif'}}, 
        
        // Stage
        { path: '/projects/stage/eZHost', component: Stage_eZHost, meta: {title: 'Projets - Catif'}}, 
        { path: '/projects/stage/eZHub', component: Stage_eZHub, meta: {title: 'Projets - Catif'}}, 

    {
        path: '/career', component: Career,
        meta: {
            title: 'Parcours - Catif'
        }


    }, {
        path: '/:pathMatch(.*)', component: NotFound,
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