<template>
    <div>
        <div class="container">
            <h1>Les projets auquel j'ai participé :</h1>
        </div>
        <div class="list">
            <router-link v-for="project in projects" :key="project.team + '_' + project.url" class="box" :to="'/projects/' + project.team + '/' + project.url">
                <div class="title">
                    <div>{{ project.title_primary }}</div>
                    <div v-if="project.title_secondary != ''">{{ project.title_secondary }}</div>
                </div>
                <img :src="'/src/assets/img/projects/' + project.team + '/' + project.url + '.png'">
            </router-link>
        </div>
    </div>
</template>




<script>

export default {
    data(){
        return {
            projects: [
                {
                    'title_primary' : 'Catif.me',
                    'title_secondary' : 'Version 2 - 2022',
                    'url'  : 'Catif-2',
                    'team' : 'perso'
                }, {
                    'title_primary' : 'Formulaire de Compétence',
                    'title_secondary' : 'TP SIO2 - 2022',
                    'url'  : 'Formulaire-De-Competence',
                    'team' : 'study'
                }, {
                    'title_primary' : 'Parc Informatique',
                    'title_secondary' : 'Challenge SIO2 - 2021',
                    'url'  : 'Parc-Informatique',
                    'team' : 'study'
                }, {
                    'title_primary' : 'eZHost',
                    'title_secondary' : 'Stage SIO1 - 2021',
                    'url'  : 'eZHost',
                    'team' : 'stage'
                }, { 
                    'title_primary' : 'eZHub',
                    'title_secondary' : 'Stage SIO1 - 2021',
                    'url'  : 'eZHub',
                    'team' : 'stage'
                }, { 
                    'title_primary' : 'Catif.me',
                    'title_secondary' : 'Version 1 - 2021',
                    'url'  : 'Catif-1',
                    'team' : 'perso'
                }
            ]
        }
    }
}
</script>