<template>
    <div class="container">
        <h1 class="title">Bienvenue sur mon <u>Portfolio</u> !</h1>
        <div class="content">
            <div class="raw">
                <p class="column text-justify">
                    Je me présente, <b>Bradley BARBIER</b>.<br>
                    J'adore développer, d'où mon cursus d'apprentissage. <router-link to="/career" class="link">(Voir Parcours)</router-link><br>
                    J'aimerai me spécialiser dans le développement Back End, car j'aime travailler sur la logique d'un algorithme, mais aussi accessoirement car je suis très nul en design.
                </p>
                <div class="column game-pong">
                    <div class="player"></div>
                    <div class="ball"></div>
                    <div class="wall"></div>
                    <p class="score" v-html="number"></p>
                </div>
            </div>
        </div>
    </div>
</template>




<script>

export default {
    data(){
        return {
            number: 0,
        }
    },
    created() {
        setTimeout( () => {
            this.number++;

            setInterval( () => {
                this.number++;
            }, 1750);
        },875)
    }
}
</script>