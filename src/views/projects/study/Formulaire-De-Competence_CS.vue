<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">Formulaire de Compétence - C#</span></h1>
            <h3 class="subtitle">Challenge SIO2 - 2022</h3>
        </div>
        <div class="container">
            <p>
                Ce projet a été créé durant ma<span class="font-important"> seconde année de BTS SIO</span>.<br>
                <br>
                <span class="font-important">L'objectif de ce projet est d'afficher les compétences du BTS SIO</span>, un logiciel, où se trouvent toutes les compétences, les savoirs et les indicateurs.<br>
                <span class="font-important">L'utilisateur peut choisir la base de donnée qu'il souhaite utiliser</span> comme <span class="font-important">Azure DataBase</span> (Personnel ou celui de la classe), <span class="font-important">MySQL</span> (local ou PlanetHoster).
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
                    1: { "name": "C#", "file": "cs" }
                },
                "Software": {
                    1: { "name": "Visual Studio Community", "file": "visual-community" },
                }
            },
            tab_Image: {
                1: "/study/Formulaire-De-Competence_CS/1",
                2: "/study/Formulaire-De-Competence_CS/2",
                3: "/study/Formulaire-De-Competence_CS/3",
                4: "/study/Formulaire-De-Competence_CS/4",
            },
            tab_Button: {
                "site"   : ["/doc/projet/BTS-SIO2_Formulaire-de-Competence_Csharp.rar", "file"],
                "github" : "https://github.com/Catif/BTS-SIO2_Formulaire-de-Competence_Csharp"
            }
        }
    }
}
</script>