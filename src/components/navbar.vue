<template>
    <nav>
        <router-link to="/" class="nav-logo">Bradley BARBIER</router-link>
        <div class="nav-items">
            <router-link to="/" class="nav-item hover-underline">Accueil</router-link>
            <router-link to="/projects" class="nav-item hover-underline">Projets</router-link>
            <router-link to="/career" class="nav-item hover-underline">Qui suis-je ?</router-link>
        </div>

        <div class="nav-phone" @click="openNav()">
            <fa class="bars" :icon="['fas', 'bars']" />
        </div>
        <div v-if="navOpen" class="nav-phone-open" @click="closeNav()">
            <router-link to="/" class="nav-item hover-underline">Accueil</router-link>
            <router-link to="/projects" class="nav-item hover-underline">Projets</router-link>
            <router-link to="/career" class="nav-item hover-underline">Qui suis-je ?</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            navOpen: false,
        }
    },
    methods: {
        openNav(){
            document.body.style.overflowY= "hidden"
            this.navOpen = true
        },
        closeNav(){
            document.body.style.overflowY= "auto"
            this.navOpen = false
        }
    }
}
</script>




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

.nav-phone{
    display: none;
    cursor: pointer;
}

.nav-phone-open{
    position: fixed;
    z-index: 1000;

    width: 100vw;
    height: 100vh;

    top: 0;
    left: 0;
    
    display: flex;
    justify-content: center;
    gap: 12%;
    align-items: center;
    flex-direction: column;
}
.nav-phone-open::before{
    content: '';
    position: fixed;
    
    width: 100vw;
    height: 100vh;
    
    top: 0;
    left: 0;

    background-color: hsla(216, 28%, 7%, .93);
}

.nav-phone-open .nav-item{
    display: flex;
    justify-content: center;
    font-size: 35px;
    height: 70px;
}

.nav-phone-open .hover-underline::after{
    top: 53px;
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


@media screen and (max-width: 768px) {
  nav{
      justify-content: space-around;
      gap: 0px;
  }
  .nav-items{
      display: none;
  }

  .nav-logo{
      display: flex;
      justify-content: center;
      width: 100%;
      margin-left: 20px;
  }

  .nav-phone{
      display: flex;
      justify-content: flex-end;
      margin-right: 20px;
      
      width: 50%;
      font-size: 20px;
  }
  .nav-phone .bars{ 
      padding: 15px 20px;

      border: 1px solid  var(--color-text-important);
      border-radius: 10px;
  }
}
</style>