<script setup lang="ts">
import { setElementVisibilityStatus } from '@/utils';
import { ref, onMounted, onBeforeUnmount } from "vue";

const src = ref("/robot1.png");
const size = ref(300);
const hue = ref(0);
const p1 = ref(false);
const p2 = ref(false);
const p3 = ref(false);

const handleScroll = () => {
  setElementVisibilityStatus(".robot-title", { p1 }, "p1");
  setElementVisibilityStatus(".container-input-button", { p2 }, "p2");
  setElementVisibilityStatus(".container-input-range", { p3 }, "p3");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <div class="robot">
    <div class="image-container">
      <div class="container-input">
        <div class="robot-title wrapper">
          <h2 class="fade-in-up" :class="{ 'fade-in-up-active': p1 }">
            Imaginer Sam, l'assistant virtuel !
          </h2>
        </div>
        <div class="wrapper">
          <p class="fade-in-up" :class="{ 'fade-in-up-active': p1 }">
            C'est une très belle mission que de faire l'intégration de Sam. Pour
            ce faire il faut s'imprégner dès a présent des valeurs de
            l'entreprise et imaginer un Sam grandeur nature. Essayez !
          </p>
        </div>
        <div class="container-input-button wrapper">
          <button
            class="fade-in-up"
            :class="{ 'fade-in-up-active': p2 }"
            @click="src = '/robot1.png'"
          >
            Robot A-24
          </button>
          <button
            class="fade-in-up"
            :class="{ 'fade-in-up-active': p2 }"
            @click="src = '/robot3.png'"
          >
            Robot B196
          </button>
          <button
            class="fade-in-up"
            :class="{ 'fade-in-up-active': p2 }"
            @click="src = '/robot2.png'"
          >
            Robot XYZ
          </button>
        </div>

        <div class="container-input-range">
          <label
            class="fade-in-up"
            :class="{ 'fade-in-up-active': p3 }"
            for="sizeRange"
            >Taille du robot : {{ Math.round(size / 1.8) }}cm</label
          >
          <input
            type="range"
            id="sizeRange"
            v-model="size"
            min="198"
            max="300"
            class="fade-in-up"
            :class="{ 'fade-in-up-active': p3 }"
          />
        </div>

        <div class="container-input-range wrapper">
          <label
            class="fade-in-up"
            :class="{ 'fade-in-up-active': p3 }"
            for="hueRange"
            >Teinte du robot
          </label>
          <input
            class="fade-in-up"
            :class="{ 'fade-in-up-active': p3 }"
            type="range"
            id="hueRange"
            v-model="hue"
            min="0"
            max="360"
          />
        </div>
      </div>

      <div class="container-image-wrapper wrapper">
        <div class="image-wrapper">
          <img
            :src="src"
            :style="{
              width: size + 'px',
              filter: 'hue-rotate(' + hue + 'deg)',
            }"
            class="dynamic-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../styles/variables.scss";
.robot {
  background-color: $secondary-background-color;
  padding-bottom: 5vh;

  h2 {
    color: $fourth-color;
    font-size: 3rem;
  }

  p {
    color: $third-color;
    font-size: 1.5rem;
    line-height: 30px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .container-input-range {
    font-size: 1.5rem;
    text-align: start;
    display: flex;
    gap: 2rem;

    label {
      width: 300px;
      color: $third-color;
    }
  }
}
.image-container {
  display: flex;
  align-items: center;
  gap: 5vw;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
}

.image-wrapper {
  max-width: 500px;
  max-height: 500px;
  width: 80vw;
  height: 60vh;
  background-color: rgb(230, 250, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url("/background-robot.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 20px;
}

.container-image-wrapper {
  display: flex;
  justify-content: center;
  width: 50%;
}

.container-input {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container-input-button {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  button {
    padding: 1rem;
    border: 2px solid white;
    border-radius: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: $primary-color;
    color: white;
    transition: 0.5s;

    &:hover {
      background-color: #ffffff00;
      color: $primary-color;
      border: 2px solid $primary-color;
    }
  }
}

.dynamic-image {
  transition: all 0.3s ease;
  position: absolute;
  bottom: 10px;
}

@media (max-width: 1200px) {
  .robot {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }

    .image-container {
      gap: 2rem;
      width: 90%;
    }
  }
}

@media (max-width: 1300px) {
  .image-container {
    flex-direction: column;
  }

  .container-input {
    width: 90%;
  }

  .container-image-wrapper {
    width: 100%;
  }
}

@media (max-width: 650px) {
  .robot {
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
      line-height: 20px;
    }
  }
  .container-input-button {
    margin-bottom: 0rem;

    button {
      font-size: 1rem;
    }
  }

  .container-input-range {
    label {
      font-size: 1rem;
    }
  }
}
</style>
