<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">Catif.me</span></h1>
            <h3 class="subtitle">Version 1 - 2021</h3>
        </div>
        <div class="container">
            <p>
                Ce projet est la <span class="font-important">première version de mon site portfolio</span>. <router-link class="link" to="/projects/stage/eZHost">Seconde version ici</router-link><br>
                <br>
                <span class="font-important">L'objectif de ce projet est de créer un portfolio personnel</span>, un endroit où se trouve tous les projets auquels j'ai participé.<br>
                Il me permet aussi de présenter aux entreprises ce que j'ai fait par le passé et <span class="font-important">montrer mes compétences par des actions</span>.

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
                    1: { "name": "PHP", "file": "php" },
                    2: { "name": "CSS Vanilla", "file": "css" },
                    3: { "name": "PHPMailer", "file": "phpmailer" },
                },
                "Software": {
                    1: { "name": "Visual Studio Code", "file": "visual-code" },
                }
            },
            tab_Image: {
                1: "/perso/Catif-1/1",
                2: "/perso/Catif-1/2",
                3: "/perso/Catif-1/3",
                4: "/perso/Catif-1/4",
                5: "/perso/Catif-1/5",
            },
            tab_Button: {
                "site"   : "https://hub.ezcorp.io",
                "github" : "https://github.com"
            }
        }
    }
}
</script>