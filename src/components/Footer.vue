<template>
    <footer>
        <div class="footer-items">
            <a href="https://github.com/Catif" target="_blank"><fa :icon="['fab', 'github']" /> Catif</a>
            <a href="https://www.linkedin.com/in/bradley-barbier/" target="_blank"><fa :icon="['fab', 'linkedin']" /> Bradley BARBIER</a>
        </div>
        <span>Copyright © 2022 Bradley BARBIER. Tous droits réservés.</span>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

footer{
    position: absolute;
    bottom: 0;
    left: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    height: 160px;

    color: var(--color-nav-text);
    background-color: var(--color-nav-background);

    border-top: 1px solid  var(--color-text-important);
}


.footer-items{
    display: flex;
    flex-direction: column;
    gap:5px;
    font-size: 19px;
}

</style>