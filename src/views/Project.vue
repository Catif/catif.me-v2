<template>
    <div>
        <div class="container">
            <h1>Les projets auquel j'ai participé :</h1>
        </div>
        <div class="list">
            <Card v-for="(project, id) in projects" :key="id" :title_primary="project.title_primary" :title_secondary="project.title_secondary" :image="project.img" :url="project.url"/>
        </div>
    </div>
</template>




<script>
import Card from '@/components/project-card.vue';

export default {
    components: {
        Card,
    },
    data(){
        return {
            projects: [
                {
                    'title_primary' : 'Catif.me',
                    'title_secondary' : 'Version 2 - 2022',
                    'img'  : 'perso_Catif-2.jpg',
                    'url'  : 'perso_Catif-2'
                }, {
                    'title_primary' : 'Formulaire de Compétence',
                    'title_secondary' : 'TP SIO2 - 2022',
                    'img'  : 'etud_Formulaire-De-Competence.png',
                    'url'  : 'etud_Formualire-De-Competence'
                }, {
                    'title_primary' : 'Parc Informatique',
                    'title_secondary' : 'Challenge SIO2 - 2021',
                    'img'  : 'etud_Parc-Informatique.png',
                    'url'  : 'etud_Parc-Informatique'
                }, {
                    'title_primary' : 'eZHost',
                    'title_secondary' : 'Stage SIO1 - 2021',
                    'img'  : 'stage_eZHost.png',
                    'url'  : 'stage_eZHost'
                }, { 
                    'title_primary' : 'eZHub',
                    'title_secondary' : 'Stage SIO1 - 2021',
                    'img'  : 'stage_eZHub.png',
                    'url'  : 'stage_eZHub'
                }, { 
                    'title_primary' : 'Catif.me',
                    'title_secondary' : 'Version 1 - 2021',
                    'img'  : 'perso_Catif-1.png',
                    'url'  : 'perso_Catif-1'
                }
            ]
        }
    }
}
</script>