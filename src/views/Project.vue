<template>
    <div>
        <div class="container">
            <h1>Mes <span class="font-important">Projets</span></h1>
        </div>
        <div class="list">
            <router-link v-for="project in projects" :key="project.team + '_' + project.url" class="box" :to="'/projects/' + project.team + '/' + project.url">
                <div class="title">
                    <div>{{ project.title_primary }}</div>
                    <div v-if="project.title_secondary != ''">{{ project.title_secondary }}</div>
                </div>
                <img :src="'/img/projects/' + project.team + '/' + project.url + '-main.webp'">
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
                    'title_primary' : 'Banqueroute',
                    'title_secondary' : 'TP SIO2 - 2022',
                    'url'  : 'Banqueroute',
                    'team' : 'study'
                }, {
                    'title_primary' : 'Formulaire de Compétence - C#',
                    'title_secondary' : 'TP SIO2 - 2022',
                    'url'  : 'Formulaire-De-Competence_CS',
                    'team' : 'study'
                }, {
                    'title_primary' : 'Formulaire de Compétence - PHP',
                    'title_secondary' : 'TP SIO2 - 2022',
                    'url'  : 'Formulaire-De-Competence_PHP',
                    'team' : 'study'
                }, {
                    'title_primary' : 'Parc Informatique',
                    'title_secondary' : 'Challenge SIO2 - 2021',
                    'url'  : 'Parc-Informatique',
                    'team' : 'study'
                }, { 
                    'title_primary' : 'Catif.me',
                    'title_secondary' : 'Version 1 - 2021',
                    'url'  : 'Catif-1',
                    'team' : 'perso'
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
                    'title_primary' : 'Jeu des balles',
                    'title_secondary' : 'Challenge SIO1 - 2021',
                    'url'  : 'Jeu-des-Balles',
                    'team' : 'study'
                }
            ]
        }
    }
}
</script>

<style>

.list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 50px;
    margin: 0px 10px;
}

.box{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 476px;
    height: 300px;

    background-color: var(--color-container-background);
    border-radius: 20px;

    transition: transform .2s ease;
    border: 1px solid  var(--color-text-important);
}

.box:hover{
    z-index: 1000;
    transform: scale(1.1);
}

.box .title{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 60px;
    width: 100%;

    font-size: 15px;
    /* border-bottom: 1px solid  var(--color-text-important); */
}

.box .title div:first-child{
    font-weight: 600;
    font-size: 20px;
    
    color: var(--color-text-important);
}

.box img{
    width: 100%;
    height: calc(100% - 60px);

    border-radius: 0 0 20px 20px;
    object-fit: cover;
}

</style>