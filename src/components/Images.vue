<template>
    <div>
        <div class="container">
            <h1>Images du projet :</h1>
        </div>
        <div v-if="tab_Image.default != 'Aucune'" class="preview">
            <img @click="openModal(id)" v-for="(image, id) in tab_Image" :key="id" :src="'/src/assets/img/projects' + image + '.png'">
        </div>
        <div v-else class="preview">
            <img src="/src/assets/img/technologies/aucune.webp">
        </div>

        <div v-if="tab_Image.default != 'Aucune'">
            <div @click="closeModal" id="modal">
                <div class="modal-content">
                    <img v-show='id == imageModal' @click="openModals(id)" v-for="(image, id) in tab_Image" :key="id" :src="'/src/assets/img/projects' + image + '.png'">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tab_Image : {
            type: Object,
            default: {
                default: 'Aucune'
            }
        }
    },
    data(){
        return {
            imageModal: 1,
        }
    },
    methods: {
        openModal(id){
            this.imageModal = id
            document.body.style.overflow= "hidden";
            this.$el.querySelector('#modal').style.display= "block";
        },

        closeModal(event){
            var modal = this.$el.querySelector('#modal');
            if(event.target == modal){
                this.imageModal = 1
                modal.style.display= "none";
                document.body.style.overflow= "scroll";
            }
        }
    }
}
</script>

<style>
.preview {
    background-color: hsla(0, 100%, 4%, 0.85);
    overflow-x: auto;
    display: flex;
    gap: 30px;
    
    width: 1100px;
    
    border-radius: 10px;

    margin: auto;
    padding: 10px 10px;
}

.preview img{
    width: 476px;
    height: 240px;
}

.preview img:hover{
    cursor: pointer;
}



#modal{
    display: none;
    position: fixed;
    top: 0;
    left: 0;

    z-index: 1;

    width: 100%;
    height: 100%;

    padding-top: 50px;

    background-color: hsla(0, 100%, 4%, 0.8);
}

.modal-content{
    margin: auto;
    padding: 20px;
    width: 80%;

}

#modal img{

    width: 1100px;
}
</style>