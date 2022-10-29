<template>
    <Navbar/>
    <Information />

    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
                <component :is="Component"></component>
        </transition>
    </router-view>

    <Footer />
</template>

<script> 
import Navbar from '@/components/Navbar.vue'
import Information from '@/components/Information.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'App',
    components: {
        Navbar, Footer, Information
    },
};

</script>





<style>
@import './assets/base.css';

html, body{
    min-height: 100vh;
}



body {
    color: var(--color-text);
    font-family: 'Anek Gujarati' ,Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    background: var(--color-background);
}


div#app{
    min-height: 100vh;
    position: relative;

    padding-bottom: 190px;
}





/* fade transitions */
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all .2s ease-out;
}

.fade-enter-from{
    transform: translateY(-50px);
}

.fade-leave-to{
    transform: translateY(50px);
}
</style>