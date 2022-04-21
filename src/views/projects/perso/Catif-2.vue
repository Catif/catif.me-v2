<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : Catif.me</h1>
            <h3 class="subtitle">Version 2 - 2022</h3>
        </div>
        <div class="container">
            <p>
                Ce projet est la <span class="font-important">seconde version de mon site portfolio</span>. <router-link class="link" to="/projects/perso/Catif-1">Première version ici</router-link><br>
                <br>
                <span class="font-important">L'objectif de ce projet est de créer un portfolio personnel</span>, un site, où se trouvent <span class="font-important">tous les projets auxquels j'ai participé</span>, ainsi que mes <span class="font-important">informations personnelles pour me contacter ou me connaître</span>.<br>
                Il me permet de présenter aux entreprises ce que j'ai fait par le passé et <span class="font-important">montré mes compétences par des actions</span>.
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
                    2: { "name": "CSS Vanilla", "file": "css" },
                },
                "Software": {
                    1: { "name": "Visual Studio Code", "file": "visual-code" }
                }
            },
            tab_Image: {
                1: "/perso/Catif-2/1",
                2: "/perso/Catif-2/2",
                3: "/perso/Catif-2/3",
                4: "/perso/Catif-2/4",
                5: "/perso/Catif-2/5",
                6: "/perso/Catif-2/6",
                7: "/perso/Catif-2/7",

            },
            tab_Button: {
                "site"   : "https://v2.catif.me",
                "github" : "https://github.com/Catif/catif.me-v2"
            }
        }
    }
}
</script>