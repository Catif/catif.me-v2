<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">Jeu de Balles</span></h1>
            <h3 class="subtitle">Challenge SIO2 - 2021</h3>
        </div>
        <div class="container">
            <p>
                Ce projet a été créé durant ma<span class="font-important"> première année de BTS SIO</span>.<br>
                <span class="font-important">Nous avions une semaine pour développer un site web en binôme</span> mettant en œuvre nos compétences en <span class="font-important">JavaScript et HTML5</span>.<br>
                <br>
                <span class="font-important">L'objectif de ce projet est de créer un jeu de balle</span>, un jeu qui teste notre agilité à la souris en cliquant sur des balles.<br>
                Le jeu nous teste sur <span class="font-important">différentes difficultés de 1 à 5</span>, 5 étant la plus dure avec des balles très petites et une vitesse élevée.<br>
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
                1: "/study/Jeu-de-Balles/1",
                2: "/study/Jeu-de-Balles/2",
                3: "/study/Jeu-de-Balles/3",
            },
            tab_Techno: {
                "Techno": {
                    1: { "name": "HTML Vanilla", "file": "html" },
                    2: { "name": "CSS Vanilla", "file": "css" },
                    3: { "name": "Jquery", "file": "jquery" },
                },
                "Software": {
                    1: { "name": "Visual Studio Code", "file": "visual-code" }
                }
            },
            tab_Button: {
                "site"   : ["https://asci6.sms-formation.fr/Jeu_des_Balles/", "url"],
                "github" : "https://github.com/Catif/BTS-SIO1_Jeu-des-Balles"
            },
        }
    }
}
</script>