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

        <div v-if="tab_Image.default != 'Aucune'" @click="closeModal" class="modal">
            <div class="modal-content">
                <div class="modal-btn left" v-show="imageModal > 1" @click="imageModal--">
                    <fa :icon="['fas', 'arrow-left']" />
                </div>
                <img v-show='id == imageModal' v-for="(image, id) in tab_Image" :key="id" :src="'/src/assets/img/projects' + image + '.png'">
                <div class="modal-btn right" v-show="imageModal < Object.keys(tab_Image).length" @click="imageModal++">
                    <fa :icon="['fas', 'arrow-right']" />
                </div>
                <div class="modal-count">{{ imageModal }}/{{ Object.keys(tab_Image).length }}</div>
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
            document.body.style.overflowY= "hidden";
            this.$el.querySelector('.modal').classList.add('active')
        },

        closeModal(event){
            var modal = this.$el.querySelector('.modal');
            if(event.target == modal){
                this.imageModal = 1
                document.body.style.overflowY= "scroll";
                modal.classList.remove('active')
            }
        }
    }
}
</script>

<style>
.preview {
    background-color: var(--color-container-background);
    overflow-x: auto;
    display: flex;
    gap: 10px;
    
    width: 1000px;
    
    border: 1px solid  var(--color-text-important);
    border-radius: 10px;

    margin: auto;
    padding: 10px 10px;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.preview::-webkit-scrollbar {
    margin: 0px 10px;
}
.preview::-webkit-scrollbar-track {
    border-radius: 10px;
}
.preview::-webkit-scrollbar-thumb{
    border-radius: 10px;
}


.preview img{
    width: 476px;
    height: 240px;
    
    border-radius: 8px;

    transition: .2s;
    border: 1px solid  var(--color-text-important);
}

.preview img:hover{
    cursor: pointer;
    transform: scale(1.025);
}


.test{
    position: relative;
}

.modal{
    display: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.modal.active{
    position: fixed;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 999;
    background-color: hsla(216, 28%, 7%, .5);
}

.modal-content{
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80%;
    width: auto;
}

.modal-count{
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-container-background);
    border: 1px solid  var(--color-text-important);
    border-radius: 20px;

    top: 55px;

    font-size: 25px;

    width: 70px;
    height: 55px;

    color: var(--color-text-important);

}

.modal-btn{
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;
    margin: 0px 40px;

    background-color: var(--color-container-background);
    border: 1px solid  var(--color-text-important);
    border-radius: 100%;

    font-size: 3.5em;
    color: var(--color-text-important);

    cursor: pointer;
}

.modal-btn.left{
    left: 0
}


.modal-btn.right{
    right: 0
}

.modal img{
    height: 100%;
    max-width: 1500px;
    border-radius: 20px;
    border: 1px solid  var(--color-text-important);
}
</style>