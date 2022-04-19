<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">Parc Informatique</span></h1>
            <h3 class="subtitle">Challenge SIO2 - 2021</h3>
        </div>
        <div class="container">
            <p>
                Ce projet à été créer durant mon <span class="font-important">cursus d'étude en BTS SIO</span>.<br>
                <span class="font-important">Nous avions une semaine pour développer un site web en binôme</span> mettant en oeuvre nos compétences en <span class="font-important">requête SQL et de création de base de donnée MySQL</span>.<br>
                <br>
                <span class="font-important">L'objectif de ce projet était de créer un parc informatique</span>, un endroit où les étudiants pouvaient informer le lycée des différents appareils informatique qu'ils possédaient.<br>
                Les professeurs auraient eu accées à différentes informations/statistiques sur leurs classes.<br>
                <br>
                Par exemple : <br> 
                Un professeur pouvait regarder :
            </p>
            <ul>
                <li>le nombre d'étudiants ayant une connexion internet à la maison;</li>
                <li>le nombre d'étudiants possédant un ordinateur portable;</li>
                <li>et d'autres informations...</li>
            </ul>
            <p>
                <br>
                Nous avons donc dû gérer les roles des utilisateurs <span class="font-important">(étudiant, professeur, administrateur...)</span>, créer différentes interfaces pour chaque type d'utilisateur. <br>
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
                    1: "MySQL",
                    2: "Bootstrap",
                    3: "PHP"
                },
                "Software": {
                    1: "Figma",
                    2: "WinDesign"
                }
            },
            tab_Image: {
                1: "/study/Formulaire-De-Competence",
                2: "/study/Parc-Informatique",
                3: "/stage/eZHost",
                4: "/stage/eZHub",
            },
            tab_Button: {
                "site"   : "https://google.com",
                "github" : "https://github.com"
            }
        }
    }
}
</script>