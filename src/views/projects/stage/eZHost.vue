<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">eZHost</span></h1>
            <h3 class="subtitle">Stage SIO1 - 2021</h3>
        </div>
        <div class="container">
            <p>
                Ce projet a été créé durant mon <span class="font-important">stage d'étude en première année de BTS SIO</span>.<br>
                C'était la première mission du stage pour l'association eZCorporation, la seconde étant <router-link class="link" to="/projects/stage/eZHub">eZHub</router-link>.<br>
                <br>
                <span class="font-important">L'objectif de ce projet est de créer un site présentant des offres</span>, un endroit, où se trouvent toutes les offres proposées par l'association.<br>

            </p>
        </div>
        <Images :tab_Image="tab_Image" />
        <Technologies :tab_Techno="tab_Techno" />
        <ProjectBtn :tab_Button="tab_Button" />
    </div>
</template>

<script>
import Images from '@/components/Images.vue'
import Technologies from '@/components/Technologies.vue'
import ProjectBtn from '@/components/ProjectBtn.vue'

export default {
    components: {Images, Technologies, ProjectBtn},
    data(){
        return {
            tab_Image: {
                1: "/stage/eZHost/1",
                2: "/stage/eZHost/2",
                3: "/stage/eZHost/3",
                4: "/stage/eZHost/4",
                5: "/stage/eZHost/5",
            },
            tab_Techno: {
                "Techno": {
                    1: { "name": "VueJS", "file": "vuejs" },
                    2: { "name": "Bootstrap", "file": "bootstrap" },
                    3: { "name": "Sass", "file": "sass" },
                    4: { "name": "Strapi", "file": "strapi" }
                },
                "Software": {
                    1: { "name": "Visual Studio Code", "file": "visual-code" },
                }
            },
            
            tab_Button: {
                "site"   : "none",
                "github" : "none"
            }
        }
    }
}
</script>