<template>
    <nav>
        <router-link to="/" class="nav-logo">Bradley BARBIER</router-link>
        <div class="nav-items">
            <router-link to="/" class="nav-item hover-underline">Accueil</router-link>
            <router-link to="/projects" class="nav-item hover-underline">Projets</router-link>
            <router-link to="/career" class="nav-item hover-underline">Qui suis-je ?</router-link>
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

    color: var(--color-nav-text);
    background-color: var(--color-nav-background);

    border-bottom: 1px solid  var(--color-text-important);
}
nav a{
    color: var(--color-nav-text);
}

.nav-logo{
    font-size: 25px;
    font-weight: 400 !important;

    color: var(--color-text-important);
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

.hover-underline{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.hover-underline::after{
    content: "";
    position: absolute;

    top: 30px;

    width: 20px;
    height: 1px;

    border-radius: 10px;

    background-color: var(--color-text-important);
    transition: all .15s ease;
}

.hover-underline:hover::after{
    width: 70%;
}

.router-link-active{
    font-weight: 300;
}
.router-link-active.hover-underline::after, 
.router-link-active.hover-underline:hover::after{
    width: 90%;
    height: 2px;
}
</style>