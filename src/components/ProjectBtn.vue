<template>
    <div>
        <div class="container">
        </div>
        <div class="list-btn">
            <a class="btn-project" :href="tab_Button.site">Lien vers le projet</a>
            <a class="btn-github" :href="tab_Button.github">Lien vers le github</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tab_Button : {
            type: Object,
            default: {
                default: 'Aucune'
            }
        }
    },
}
</script>

<style>

</style>