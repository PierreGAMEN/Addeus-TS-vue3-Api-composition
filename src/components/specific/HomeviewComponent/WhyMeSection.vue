<script setup lang="ts">
import dataWhyMe from '../../../data/dataWhyMe'
import { setElementVisibilityStatus } from '@/utils';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)
const itemAreVisible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  setElementVisibilityStatus('.container-text', { isVisible }, 'isVisible')
  setElementVisibilityStatus('.why-me-container', { itemAreVisible }, 'itemAreVisible', 250)
}
</script>

<template>
  <section id="why-me" class="why-me">
    <div class="container-text">
      <h2 class="fade-in-up" :class="{ 'fade-in-up-active': isVisible }">
        Pourquoi choisir Pierre GAMEN ?
      </h2>
      <p class="fade-in-up" :class="{ 'fade-in-up-active': isVisible }">
        Un développeur web passionné, prêt à contribuer pleinement au succès d'Addeus avec une
        motivation sans faille.
      </p>
    </div>
    <div class="why-me-container">
      <div
        v-for="(item, index) in dataWhyMe"
        :key="index"
        :class="['why-me-item', `item-${index}`, { 'item-animation': itemAreVisible }]"
      >
        <img :src="item.img" :alt="item.alt" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.paragraph }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../../../styles/variables.scss';
.why-me {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: $secondary-background-color;
  padding: 1rem;
  align-items: center;

  .container-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    max-width: 600px;
    text-align: center;
    margin-top: 5vh;
    overflow: hidden;

    h2 {
      color: $fourth-color;
    }

    p {
      color: $third-color;
    }
  }

  .why-me-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
  }

  .why-me-item {
    flex: 1 1 calc(33.33% - 20px);
    padding: 4rem;
    background-color: $third-background-color;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;
    border: 3px solid white;
    opacity: 0;
    transition:
      opacity 1s ease-in-out,
      transform 1s ease-in-out;
    line-height: 25px;
  }

  .item-0,
  .item-2 {
    transform: translateY(-550px);
  }

  .item-1 {
    transform: translateY(550px);
  }

  .item-animation {
    transform: translateY(0);
    opacity: 1;
  }

  .why-me-item img {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
  }

  .why-me-item h3 {
    margin-bottom: 20px;
    font-size: 1.5em;
  }

  .why-me-item p {
    font-size: 1em;
    color: $third-color;
  }
}

@media (min-width: 700px) {
  .why-me {
    .container-text {
      h2 {
        font-size: 2rem;
      }
    }
  }
}

@media (min-width: 1000px) {
  .why-me {
    .container-text {
      max-width: none;

      h2 {
        font-size: 3rem;
      }
      p {
        font-size: 1.5rem;
      }
    }

    .why-me-container {
      flex-direction: row;
      padding-bottom: 10vh;

      .why-me-item:hover {
        border: 3px solid $primary-color;
      }
    }
  }
}
</style>
