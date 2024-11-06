<script setup lang="ts">
import { setElementVisibilityStatus } from '@/utils';
import {ref, onMounted, onBeforeUnmount} from "vue";


const p1 = ref(false);
const p2 = ref(false);
const p3 = ref(false);


  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  })

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  })


const handleScroll = () => {
  setElementVisibilityStatus(".cta-mini-title", {p1}, "p1");
  setElementVisibilityStatus(".cta-heading", {p2}, "p2");
  setElementVisibilityStatus(".cta-detail", {p3}, "p3");
}

</script>

<template>
  <div class="container-cta">
    <div class="cta-mini-title">
      <div class="fade-in-up" :class="{ 'fade-in-up-active': p1 }">
        Let's try
      </div>
    </div>
    <div class="cta-heading wrapper">
      <h2 class="fade-in-up" :class="{ 'fade-in-up-active': p2 }">
        Découvrez mes avantages en me contactant dès aujourd'hui.
      </h2>
    </div>
    <div class="cta-detail wrapper">
      <p class="fade-in-up" :class="{ 'fade-in-up-active': p3 }">
        Confiez-moi l'intégration de SAM et concentrez-vous pleinement sur le
        développement du business d'Addeus.
      </p>
    </div>
    <div class="cta-button">
      <a href="https://www.linkedin.com/in/pierre-gamen/">Contactez-moi</a>
    </div>
    <img
      class="cta-img"
      src="https://cdn.prod.website-files.com/6448e2b9572c7f1509a7dbfa/6448e2b9572c7f2fe1a7dd01_cta%20section%20bg.png"
      alt=""
    />
  </div>
</template>

<style lang="scss">
@import "../../../styles/variables.scss";

.container-cta {
  color: rgb(255, 255, 255);
  width: 80vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  height: 60vh;
  border-radius: 20px;
  overflow: hidden;

  .wrapper {
    overflow: hidden;
    max-width: 650px;
    text-align: center;
  }

  .cta-mini-title {
    color: rgb(89, 230, 89);
    text-transform: uppercase;
  }

  .cta-heading {
    h2 {
      font-size: 3rem;
    }
  }

  .cta-detail {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .cta-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: contain;
    z-index: -1;
  }

  .cta-button {
    a {
      background-color: $primary-color;
      text-decoration: none;
      color: white;
      padding: 1rem;
      border-radius: 10px;
      font-size: 1.2rem;
      border: 2px solid rgba(255, 255, 255, 0);
      transition: 0.5s;

      &:hover {
        border: 2px solid white;
        background-color: rgba(255, 255, 255, 0);
      }
    }
  }
}

@media (max-width: 1000px) {
  .container-cta {
    padding: 1rem;
    gap: 1.5rem;
    height: 40vh;

    .wrapper {
      max-width: 500px;
    }

    .cta-heading {
      h2 {
        font-size: 2rem;
      }
    }
    .cta-detail {
      p {
        font-size: 1.2rem;
      }
    }
  }
}

@media (max-width: 630px) {
  .container-cta {
    padding: 1rem;
    gap: 1.5rem;
    line-height: 30px;
    width: 85vw;

    .wrapper {
      max-width: 400px;
    }

    .cta-heading {
      h2 {
        font-size: 1.5rem;
      }
    }
    .cta-detail {
      p {
        font-size: 1.1rem;
      }
    }
  }
}

@media (max-width: 480px) {
  .container-cta {
    padding: 1rem;
    gap: 1.5rem;
    line-height: 30px;
    width: 80vw;
    height: 60vh;
    margin-bottom: 5rem;

    .cta-heading {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
