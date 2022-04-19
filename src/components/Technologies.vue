<template>
    <div>
        <div class="container">
            <h1>Technologies :</h1>
        </div>
        <div class="list-card">
            <Card v-for="(techno, id) in tab_Techno.Techno" :key="id" :name="techno" />
        </div>


        <div class="container">
            <h1>Logiciels :</h1>
        </div>
        <div class="list-card">
            <Card v-for="(soft, id) in tab_Techno.Software" :key="id" :name="soft"/>
        </div>
    </div>
</template>





<script>
import Card from '@/components/Card.vue'
    export default {
        components: {Card},
        props: {
            tab_Techno : {
                type: Object,
                default: {
                    "Techno": {
                        1: "Aucune"
                    },
                    "Software": {
                        1: "Aucun"
                    }
                }
            }
        }
    }
</script>



<style>
.list-card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    gap: 40px;
    margin: 0px 10px;

    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>