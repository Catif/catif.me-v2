<template>
    <div v-if="techno.none != 'none'" class="card">
        <img :src="'/img/technologies/' + techno.file + '.webp'">
        <div class="card-name">{{ techno.name }}</div>
    </div>
    
</template>




<script>
    export default {
        props: {
            techno: {
                type: Object,
                default: {
                    "none" : "none"
                }
            }
        }
    }
</script>




<style scoped>
.card{
    position: relative;
    width: 200px;
    height: 152px;
    border-radius: 20px;
}
.card:hover{
    cursor: default;
}

.card img{
    width: 200px;
    height: 152px;
    object-fit: cover;
    border-radius: 20px;
}

.card .card-name{
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    opacity: 0;

    top: 0;
    left: 0;

    color: #fff;
    font-size: 25px;
    text-align: center;

    border-radius: 20px;
    background-color: hsla(210, 100%, 5%, 0.7);

    transition: opacity .2s ease
}

.card .card-name:hover, .card .card-name:focus {
    opacity: 1;
}
</style>