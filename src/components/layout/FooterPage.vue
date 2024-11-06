<script setup lang="ts">
</script>

<template>
  <footer>
    <img
      src="https://cdn.prod.website-files.com/6448e2b9572c7f1509a7dbfa/644b86dfcbad9589a1c42a96_addeus_188_67_color_white.png"
      alt=""
    />
    <div class="footer-detail">
      <p>
        Site original :
        <a href="https://www.addeus.ai/">Addeus.ai</a>
      </p>
      <p>Réinterpreté par : Pierre GAMEN</p>
      <p>Site réalisé avec VueJS et déployé avec Vite</p>
    </div>
    <p className="copyright">Pierre GAMEN 2024 ©</p>
  </footer>
</template>

<style lang="scss">
@import "../../styles/variables.scss";

footer {
    background-color: $primary-background-color;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;

    a{
        text-decoration: none;
        color: white;
    }


    img{
        width: 150px;

    }

    .copyright {
        font-size: 0.8rem;
    }
}

@media (min-width: 650px) {

    footer {
        align-items: center;
    }
    p {
        font-size: 1.3rem;
    }
}
</style>
