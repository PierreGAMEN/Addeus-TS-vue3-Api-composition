<script setup lang="ts">
import { ref } from 'vue'

// Déclaration des propriétés réactives
const isActive = ref(true)
const pictureSrc = ref('/photo-PG-removebg-preview.png')

// Fonction de bascule pour `isActive`
const toggle = () => {
  isActive.value = !isActive.value

  if (isActive.value) {
    pictureSrc.value = '/photo-PG-removebg-preview.png'

    const amps = document.querySelectorAll<HTMLElement>('.amp')
    amps.forEach((amp) => {
      amp.style.boxShadow = '1px 1px 10px 2px #fff'
      amp.style.backgroundColor = '#ff2d7e'
    })

    const button = document.querySelector<HTMLElement>('.handle_anim')
    if (button) {
      button.style.backgroundColor = '#696969'
      button.style.border = '1px solid #fffc65'
      button.style.color = '#fffc65'
    }
  } else {
    pictureSrc.value = '/photo-PG.png'

    const amps = document.querySelectorAll<HTMLElement>('.amp')
    amps.forEach((amp) => {
      amp.style.boxShadow = 'none'
      amp.style.backgroundColor = '#696969'
    })

    const button = document.querySelector<HTMLElement>('.handle_anim')
    if (button) {
      button.style.backgroundColor = '#fffc65'
      button.style.border = '1px solid black'
      button.style.color = 'black'
    }
  }
}
</script>

<template>
  <div class="hero">
    <div class="hero_text">
      <h1>Sam ? Moi c'est Pierre !</h1>
      <p>Laissez moi vous expliquer qui je suis dans ce site de motivation.</p>
      <a href="https://pierre-gamen.netlify.app/" class="portfolio">Portfolio</a>
    </div>
    <div class="container-element-anim">
      <img class="picture" :src="pictureSrc" alt="Pierre Gamen Picture" />
      <div class="amp amp2" :class="{ active: isActive }">Front</div>
      <div class="amp amp1" :class="{ active: isActive }">Back</div>
      <div class="charge">
        <div class="segment sg1">
          <div class="block bl1" :style="{ opacity: isActive ? 1 : 0 }"></div>
        </div>
        <div class="segment sg2">
          <div class="block bl2" :style="{ opacity: isActive ? 1 : 0 }"></div>
        </div>
      </div>
      <button class="handle_anim" @click="toggle">
        {{ isActive ? 'Éteindre' : 'Allumer' }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../styles/variables.scss';

.hero {
  background-color: $primary-background-color;
  color: $secondary-color;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;

  h1,
  p,
  .handle_anim,
  a {
    opacity: 1;
    transform: translateY(200px);
    animation: fadeInUp 0.8s ease-in-out forwards;
  }

  &_text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: hidden;

    h1 {
      font-size: 1.5rem;
      margin-top: 10vh;
    }

    a {
      background-color: $primary-color;
      padding: 1rem;
      color: white;
      text-align: center;
      font-size: 1rem;
      border-radius: 10px;
      text-decoration: none;
    }
  }

  .container-element-anim {
    position: relative;
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transform: translateY(500px);
    animation: fadeInUp 0.8s ease-in-out forwards;

    .picture {
      width: 200px;
      transition: 1s;
      z-index: 3;
      position: relative;
      left: 17%;
    }

    .amp {
      width: 50px;
      height: 50px;
      position: absolute;
      opacity: 1;
      background-color: $primary-color;
      border-radius: 10px;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 10px 2px #fff;
      transition: 1.5s;

      &1 {
        top: 100px;
        right: -20px;
      }
      &2 {
        top: 100px;
        left: -20px;
      }
    }

    .charge {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 100px;
      position: absolute;
      top: 100px;
      right: 0;
      z-index: 1;
      gap: 40px;

      .segment {
        width: 70px;
        height: 1.5px;
        background-color: grey;
        position: relative;
        top: 30px;

        .block {
          position: relative;
          height: 1.5px;
          width: 5px;
          background-color: white;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .bl1 {
          left: 70px;
          animation: animBlock1 1.5s infinite;
        }
        .bl2 {
          animation: animBlock2 1.5s infinite;
        }
      }
    }
  }

  .handle_anim {
    width: 50%;
    margin: 0 auto;
    border-radius: 10px;
    padding: 0.5rem;
    background-color: #fffc65;
    color: rgb(0, 0, 0);
    border: 1px solid rgb(2, 2, 2);
    transition: 1s;
    cursor: pointer;
  }
}

@keyframes animBlock1 {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateX(-70px);
  }
}

@keyframes animBlock2 {
  0% {
  }
  100% {
    transform: translateX(67px);
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 990px) {
  .hero {
    flex-direction: row;
    align-items: center;
    padding-top: 10vh;
    padding-bottom: 5vh;

    &_text {
      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }
}

@media (min-width: 1300px) {
  .hero {
    padding-left: 5vw;
    padding-right: 5vw;

    .container-element-anim {
      width: 500px;

      .picture {
        width: 340px;
      }

      .amp {
        width: 100px;
        height: 100px;
      }

      .charge {
        .segment {
          top: 50px;
          height: 3px;
          .block {
            height: 3px;
          }
        }
      }
    }
  }
}
</style>
