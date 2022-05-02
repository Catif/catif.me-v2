<template>
    <div>
        <div class="container">
            <h1 class="title">Projet : <span class="font-important">Banqueroute</span></h1>
            <h3 class="subtitle">Challenge SIO2 - 2022</h3>
        </div>
        <div class="container">
            <p>
                Ce projet a été créé durant ma<span class="font-important"> seconde année de BTS SIO</span>.<br>
                <br>
                <span class="font-important">L'objectif de ce projet est de créer une application de banque</span>, un logiciel, où il serait possible de gérer les comptes de différentes personnes.<br>
                Les actions possibles sont variées, <span class="font-important">il est possible d'effectuer des créations de compte, virement entre deux personnes, dépôt/retrait d'argent et autre...</span>
                
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
                1: "/study/Banqueroute/1",
                2: "/study/Banqueroute/2",
                3: "/study/Banqueroute/3",
                4: "/study/Banqueroute/4",
                5: "/study/Banqueroute/5",
                6: "/study/Banqueroute/6",
                7: "/study/Banqueroute/7",
            },
            tab_Button: {
                "site"   : ["/doc/projet/BTS-SIO2_Banqueroute.rar", "file"],
                "github" : "https://github.com/Catif/BTS-SIO2_TP-BanqueRoute"
            }
        }
    }
}
</script>