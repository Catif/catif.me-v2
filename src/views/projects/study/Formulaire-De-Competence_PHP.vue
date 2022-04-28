<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">Formulaire de Compétence - PHP</span></h1>
            <h3 class="subtitle">Challenge SIO2 - 2022</h3>
        </div>
        <div class="container">
            <p>
                Ce projet a été créé durant ma<span class="font-important"> seconde année de BTS SIO</span>.<br>
                <br>
                <span class="font-important">L'objectif de ce projet est de créer un portefeuille de compétence</span>, un site, où se trouvent toutes les compétences du BTS SIO. <br>
                Les étudiants en SIO doivent <span class="font-important">inscrirent leur projets sur le site avec les savoirs et les indicateurs misent en oeuvres</span> dans celui-ci.<br>
                Les compétences sont donc générées en fonction des savoirs et des indicateurs que l'étudiant à remplis.<br>
                <br>
                <span class="font-important">Ce projet n'étant pas encore terminé</span>, il reste des fonctionnalités à ajouter, tel que :
                <ul>
                    <li>la génération des compétences en fonction des savoirs et des indicateurs ;</li>
                    <li>la génération d'un PDF avec toutes les compétences de l'étudiant ;</li>
                    <li>un panel d'administration pour créer des comptes aux utilisateurs.</li>
                </ul>
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
                    2: { "name": "PHPMailer", "file": "phpmailer" },
                    3: { "name": "CSS Vanilla", "file": "css" },
                    4: { "name": "MySQL", "file": "mysql" }
                },
                "Software": {
                    1: { "name": "Visual Studio Code", "file": "visual-code" },
                    2: { "name": "WinDesign", "file": "windesign" }
                }
            },
            tab_Image: {
                1: "/study/Formulaire-De-Competence_PHP/1",
                2: "/study/Formulaire-De-Competence_PHP/2",
                3: "/study/Formulaire-De-Competence_PHP/3",
                4: "/study/Formulaire-De-Competence_PHP/4",
                5: "/study/Formulaire-De-Competence_PHP/5",
                6: "/study/Formulaire-De-Competence_PHP/6",
                7: "/study/Formulaire-De-Competence_PHP/7",

            },
            tab_Button: {
                "site"   : ["https://asci6.sms-formation.fr/competence/", "url"],
                "github" : "https://github.com/Catif/BTS-SIO2_Formulaire-de-Competence_PHP"
            }
        }
    }
}
</script>