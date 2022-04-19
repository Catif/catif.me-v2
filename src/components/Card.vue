<template>
    <div v-if="techno.none != 'none'" class="card">
        <img :src="'/src/assets/img/technologies/' + techno.file + '.webp'">
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
    display: none;
    position: absolute;

    width: 200px;
    height: 152px;

    color: #fff;
    font-size: 25px;
    text-align: center;

    top: 0;
    left: 0;

    border-radius: 20px;
    background-color: hsla(210, 100%, 5%, 0.7);
}

.card:hover .card-name{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>