<template>
	<div>
		<div class="container">
			<h1 class="title">Projet : <span class="font-important">Tips.Catif.me</span></h1>
			<h3 class="subtitle">Version 1 - 2022</h3>
		</div>
		<div class="container">
			<p>
				Ce projet a été créé durant mes<span class="font-important"> vacances après mon BTS SIO</span>.<br />
				<br />
				<span class="font-important">L'objectif de ce projet est de présenter mes "Tips"</span>, un site, où se trouvent
				<span class="font-important">toutes les astuces que j'ai trouvées</span>, ainsi que mes
				<span class="font-important">solutions à des problèmes/bugs</span>.<br />
				Il me permet de partager mes connaissances et
				<span class="font-important">pouvoir aider les personnes ayant les mêmes problèmes que moi</span>.
			</p>
		</div>
		<Images :tab_Image="tab_Image" />
		<Technologies :tab_Techno="tab_Techno" />
		<ProjectBtn :tab_Button="tab_Button" />
	</div>
</template>

<script>
import Images from "@/components/Images.vue";
import Technologies from "@/components/Technologies.vue";
import ProjectBtn from "@/components/ProjectBtn.vue";

export default {
	components: { Images, Technologies, ProjectBtn },
	data() {
		return {
			tab_Techno: {
				Techno: {
					1: { name: "VueJS", file: "vuejs" },
					2: { name: "CSS Vanilla", file: "css" },
					3: { name: "Strapi", file: "strapi" },
				},
				Software: {
					1: { name: "Visual Studio Code", file: "visual-code" },
				},
			},
			tab_Image: {
				1: "/perso/Tips-de-Catif/1",
				2: "/perso/Tips-de-Catif/2",
				3: "/perso/Tips-de-Catif/3",
				4: "/perso/Tips-de-Catif/4",
				5: "/perso/Tips-de-Catif/5",
				6: "/perso/Tips-de-Catif/6",
			},
			tab_Button: {
				site: ["", "none"],
				github: "https://github.com/Catif/tips.catif.me",
			},
		};
	},
};
</script>
