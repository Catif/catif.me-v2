<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">Parc Informatique</span></h1>
            <h3 class="subtitle">Challenge SIO2 - 2021</h3>
        </div>
        <div class="container">
            <p>
                Ce projet a été créé durant ma<span class="font-important"> seconde année de BTS SIO</span>.<br>
                <span class="font-important">Nous avions une semaine pour développer un site web en binôme</span> mettant en œuvre nos compétences en <span class="font-important">requête SQL et de création de base de données MySQL</span>.<br>
                <br>
                <span class="font-important">L'objectif de ce projet est de créer un parc informatique</span>, un endroit où les étudiants peuvent informer le lycée des différents appareils informatique qu'ils possèdent.<br>
                Les professeurs ont accès à différentes informations/statistiques sur leurs classes.<br>
                <br>
                Par exemple : <br> 
                un professeur peut savoir :
            </p>
            <ul>
                <li>le nombre d'étudiants ayant une connexion internet à la maison ;</li>
                <li>le nombre d'étudiants possédant un ordinateur portable ;</li>
                <li>et d'autres informations…</li>
            </ul><br>
            <p>
                
                Nous avons géré les droits des utilisateurs <span class="font-important">(étudiant, professeur, administrateur...)</span>, créer différentes interfaces pour chaque type d'utilisateur. <br>
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
                    2: { "name": "Bootstrap", "file": "bootstrap" },
                    3: { "name": "MySQL", "file": "mysql" },
                },
                "Software": {
                    1: { "name": "WinDesign", "file": "windesign" },
                    2: { "name": "Figma", "file": "figma" },
                    3: { "name": "Visual Studio Code", "file": "visual-code" },
                }
            },
            tab_Image: {
                1: "/study/Parc-Informatique/1",
                2: "/study/Parc-Informatique/2",
                3: "/study/Parc-Informatique/3",
                4: "/study/Parc-Informatique/4",
                5: "/study/Parc-Informatique/5",
            },
            tab_Button: {
                "site"   : ["https://projets.catif.me/etud_Parc-Informatique/", "url"],
                "github" : "none"
            }
        }
    }
}
</script>