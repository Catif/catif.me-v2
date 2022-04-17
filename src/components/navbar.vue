<template>
    <nav>
        <span class="nav-logo">Bradley BARBIER</span>
        <div class="nav-items">
            <router-link to="/" class="nav-item hover-underline">Accueil</router-link>
            <router-link to="/projects" class="nav-item hover-underline">Projets</router-link>
            <router-link to="/career" class="nav-item hover-underline">Parcours</router-link>
            <router-link to="/contact" class="nav-item hover-underline">Contact</router-link>
        </div>
    </nav>
</template>





<style scoped>
nav{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;

    width: 100%;
    height: 100px;

    background-color: var(--color-nav-background);
}

.nav-logo{
    font-size: 25px;
    font-weight: 400;
}

.nav-items{
    display: flex;
    gap: 45px;
}

.nav-item{
    display: flex;
    
    align-items: center;
    font-size: 25px;
    font-weight: 200;
}
</style>