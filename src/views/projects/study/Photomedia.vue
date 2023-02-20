<template>
	<div>
		<div class="container">
			<h1 class="title">Projet : <span class="font-important">Photomedia</span></h1>
			<h3 class="subtitle">Atelier n°1 - 2022</h3>
		</div>
		<div class="container">
			<p>
				Ce projet a été créé durant mon<span class="font-important"> année de Licence Pro CIASIE</span>.<br />
				<br />
				<span class="font-important">L'objectif de ce projet est de créer une copie de Pinterest</span>, un site, où se trouvent des albums
				photo. <br />
				Les utilisateurs <span class="font-important">peuvent créer des albums et uploader des images </span> dans ceux-ci.<br />
				Il y a un système d'album public/privé avec invitation, avec la possibilité de mettre des roles aux utilisateurs pour leurs donner
				des droits sur l'album.<br />
				Ce projet a permis d'utiliser pour la
				<span class="font-important"> première fois</span> en condition "réelle" le<span class="font-important"> modèle MVC</span> (Model
				View Controller) et de <span class="font-important"> découvrir l'ORM Eloquent.</span><br />
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
					1: { name: "PHP", file: "php" },
					2: { name: "Sass", file: "sass" },
					3: { name: "MySQL", file: "mysql" },
				},
				Software: {
					1: { name: "Visual Studio Code", file: "visual-code" },
					2: { name: "Figma", file: "figma" },
					3: { name: "WinDesign", file: "windesign" },
				},
			},
			tab_Image: {
				1: "/study/Photomedia/1",
				2: "/study/Photomedia/2",
				3: "/study/Photomedia/3",
				4: "/study/Photomedia/4",
				5: "/study/Photomedia/5",
				6: "/study/Photomedia/6",
				7: "/study/Photomedia/7",
			},
			tab_Button: {
				site: ["", "none"],
				github: "https://github.com/Catif/BTS-SIO2_Formulaire-de-Competence_PHP",
			},
		};
	},
};
</script>
