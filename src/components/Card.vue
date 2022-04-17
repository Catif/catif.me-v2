<template>
    <div v-if="name != 'none'" class="card">
        <img :src="'/src/assets/img/technologies/' + name + '.webp'">
        <div class="card-name">{{name}}</div>
    </div>
</template>




<script>
    export default {
        props: {
            name: {
                default: "none"
            }
        }
    }
</script>




<style scoped>
.card{
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

    font-size: 25px;
    text-align: center;

    top: 0;
    left: 0;

    border-radius: 20px;
    background-color: hsla(0, 0%, 0%, .7);
}

.card:hover .card-name{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>