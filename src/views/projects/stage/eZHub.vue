<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">eZHub</span></h1>
            <h3 class="subtitle">Stage SIO1 - 2021</h3>
        </div>
        <div class="container">
            <p>
                Ce projet a été créé durant mon <span class="font-important">stage d'étude en première année de BTS SIO</span>.<br>
                C'était la seconde mission du stage, la première étant <router-link class="link" to="/projects/stage/eZHost">eZHost</router-link>.<br>
                <br>
                <span class="font-important">L'objectif de ce projet est de créer un hub</span>, un endroit, où se trouvent tous les liens utiles de l'entreprise, utilisé par les clients ou les développeurs.<br>
                <span class="font-important">Les liens et les images sont stockés dans une API</span> à disposition des administrateurs du domaine.<br>

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
            tab_Techno: {
                "Techno": {
                    1: { "name": "VueJS", "file": "vuejs" },
                    2: { "name": "Bootstrap", "file": "bootstrap" },
                    3: { "name": "Sass", "file": "sass" },
                    4: { "name": "MockAPI", "file": "mockapi" }
                },
                "Software": {
                    1: { "name": "Visual Studio Code", "file": "visual-code" },
                }
            },
            tab_Image: {
                1: "/stage/eZHub/1",
                2: "/stage/eZHub/2"
            },
            tab_Button: {
                "site"   : "https://hub.ezcorp.io",
                "github" : "none"
            }
        }
    }
}
</script>