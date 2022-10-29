<template>
    <div id="Information">
        <p>
            Recherche d'un stage dans le développement Web<br>
            Durée de 10 semaines à partir d'Avril 2023
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#Information{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    padding: 20px;

    width: 94%;
    max-width: 500px;

    color: hsl(210, 30%, 100%);
    background-color: var(--color-nav-background);

    border: 1px solid var(--color-text-important);
    border-radius: 5px;

    margin: 30px auto;
}
</style>