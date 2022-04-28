<template>
    <div class="btn" v-if="tab_Button.site[1] != 'none' && tab_Button.github != 'none'">
        <a class="btn-project" :class="(tab_Button.github == 'none') ? 'alone' : ''" :href="tab_Button.site[0]" target="_blank">{{ text_button }}</a>
        <a v-if="tab_Button.github != 'none'"  class="btn-github" :class="(tab_Button.site[1] == 'none') ? 'alone' : ''" :href="tab_Button.github" target="_blank"><fa :icon="['fab', 'github']" /></a>
    </div>
</template>






<script>
export default {
    props: {
        tab_Button : {
            type: Object,
            default: {
                default: 'Aucune',
            }
        }
    },
    data(){
        return {
            text_button: 'Voir le site du projet',
        }
    },
    mounted(){
        if(this.tab_Button.site[1] == 'url'){
            this.text_button = 'Voir le site'
        } else if (this.tab_Button.site[1] == 'file'){
            this.text_button = 'Télécharger le projet'
        }
    }
}
</script>






<style>
.btn{
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: auto;
    margin-top: 50px;

    width: 1000px;
    height: 100px;

    background: var(--color-container-background);
    
    border: 1px solid  var(--color-text-important);
    border-radius: 20px;

}

.btn-project{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    border-radius: 18px 0px 0px 18px;

    background-color: var(--color-text-important);
    font-size: 2em;
    color: var(--color-text);

    transition: all .2s ease;
    border-right: 1px solid  var(--color-text-important);
}
.btn-project.alone{
    border-radius: 18px;
}
.btn-project:hover{
    background-color: hsl(210, 100%, 30%);
}

.btn-github{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 25%;
    height: 100%;

    background-color: hsl(216, 28%, 10%);

    border-left: 1px solid  var(--color-container-background);
    border-radius: 0px 20px 20px 0px;

    color: var(--color-text);
    font-size: 3em;

    transition: all .25s ease;
}
.btn-github:hover{
    background-color: hsl(216, 28%, 0%);
}
</style>