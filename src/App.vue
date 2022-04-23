<template>
    <Navbar/>
    
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
                <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script> 
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'App',
    components: {
        Navbar
    },
};

</script>





<style>
@import './assets/base.css';

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