<template>
<div class="NotFound">
    <h2>Oups.. La page que vous cherchez n'existe pas</h2>
    <img src="/robot1.png" alt="robot picture">
    <a href="/">Retourner à la page d'accueil</a>
</div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
@import "../../../styles/variables.scss";
.NotFound {
    background-color: $primary-background-color;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 1rem;
    text-align: center;
    gap: 2rem;
    padding-top: 20vh;
    min-height: 80vh;

    a {
        background-color: $primary-color;
        padding: 1rem;
        border-radius: 10px;
        text-decoration: none;
        color: white;
    }
    img {
        height: 50vw;
        max-height: 600px;
    }
}

</style>
