<template>
    <div class="container">
        <h1 class="title">Bienvenue sur mon <span class="font-important">Portfolio</span> !</h1>
        <div class="content">
            <div class="raw">
                <p class="column text-justify flex justify-center flex-column">
                    Sur ce site, vous trouverez :
                    <ul>
                        <li><router-link to="/projects" class="link">mes divers projets</router-link> ;</li>
                        <li><router-link to="/career" class="link">mon parcours professionel</router-link> ;</li>
                        <li><router-link to="/contact" class="link">une partie contact avec mes réseaux sociaux</router-link>.</li>
                    </ul>
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

<style>

.game-pong{
    position: relative;
    width: 200px;
    height: 200px;

    border: 1px solid var(--color-text);
    border-radius: 4px;

    background-color: hsla(0, 0%, 0%, .3);
}

.game-pong .player{
    position: absolute;
    width: 5px;
    height: 40px;

    top: 5px;
    left: 2px; 

    background-color: var(--color-text-important);
    border-radius: 10px;

    animation-name: player;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
}

.game-pong .ball{
    position: absolute;
    width: 10px;
    height: 10px;

    background-color: var(--color-text-important);
    border-radius: 100%;

    top: 30px;
    left: 7px;

    animation-name: ball;
    animation-duration: 3.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.game-pong .wall{
    position: absolute;
    width: 10px;
    height: 190px;

    background-color: var(--color-text-important);
    border-radius: 10px;

    bottom: 5px;
    right: 5px;
}

.game-pong .score{
    position: absolute;

    color: var(--color-text-important);
    top: 0px;
    left: 90px;
}

@keyframes player {
    from {top: 2px}
    50% {top: 150px}
    to {top: 2px}
}

@keyframes ball {
    0% {left: 7px; top: 30px}
    25% {left: 175px; top: 90px}
    50% {left: 7px; top: 150px}
    75% {left: 175px; top: 90px}
    100% {left: 7px; top: 30px}
}
</style>