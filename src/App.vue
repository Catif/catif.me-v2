<template>
    <Navbar/>
    
    <router-view v-slot="{ Component }">
        <transition name="router" mode="out-in">
                <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script> 
import Navbar from './components/navbar.vue'

export default {
    name: 'App',
    components: {
        Navbar
    },
};

</script>





<style>
@import './assets/base.css';

/* route transitions */
.router-enter-from,
.router-leave-to{
    opacity: 0;
}

.router-enter-active,
.router-leave-active {
    transition: all .2s ease-out;
}

.router-enter-from{
    transform: translateY(-50px);
}

.router-leave-to{
    transform: translateY(50px);
}
</style>