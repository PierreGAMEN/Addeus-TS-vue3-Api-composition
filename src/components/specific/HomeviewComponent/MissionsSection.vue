<script setup lang="ts">
import { setElementVisibilityStatus } from '@/utils';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const p1 = ref(false)
const p2 = ref(false)
const p3 = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  setElementVisibilityStatus('.title_mission', { p1 }, 'p1')
  setElementVisibilityStatus('.detail', { p2 }, 'p2')
  setElementVisibilityStatus('.container-animation-text', { p3 }, 'p3')
}
</script>

<template>
  <section id="missions" class="mission">
    <div class="container_mission">
      <div class="title_mission wrapper">
        <h2 class="fade-in-up" :class="{ 'fade-in-up-active': p1 }">Ma mission jusqu'en 2025</h2>
      </div>
      <div class="detail wrapper">
        <p class="fade-in-up" :class="{ 'fade-in-up-active': p2 }">
          Si j'ai la chance de vous convaincre de ma plus-value dans ce projet, voici mes objectifs
          avant d'arriver chez vous.
        </p>
      </div>

      <div class="animation t2">
        <div class="container-animation" :class="{ 'fade-in': p2 }">
          <img
            class="vueImg"
            :class="{ animImg: p2 }"
            src="https://svgl.app/library/vue.svg"
            alt="vueJS logo"
          />
          <div class="container-animation_container-text">
            <h3 class="first" :class="{ animText: p2 }">Vue</h3>
            <h3 class="second" :class="{ animText: p2 }">Master</h3>
          </div>
          <img class="belt" :class="{ anim: p2 }" src="/belt.png" alt="" />
        </div>
        <div class="container-animation-text">
          <div class="container-text t1 wrapper">
            <h2 class="fade-in-up" :class="{ 'fade-in-up-active': p3 }">
              Devenir un véritable adepte de VueJs
            </h2>
          </div>
          <div class="wrapper">
            <p class="fade-in-up" :class="{ 'fade-in-up-active': p3 }">
              Je ne suis pas encore expert dans ce domaine, mais maîtrisant très bien React, je
              m'adapterai rapidement aux concepts de
              <strong>v-bind</strong> et
              <strong>v-for.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../../../styles/variables.scss';

.mission {
  background-color: $secondary-background-color;
  padding-bottom: 10vh;

  h2 {
    font-size: 1.8rem;
    text-align: start;
  }

  .container_mission {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    gap: 2rem;
    text-align: center;
    width: 80vw;

    .container-animation-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        text-align: justify;
        margin-top: 1rem;
        line-height: 20px;
      }

      strong {
        color: $primary-color;
      }
    }

    .container-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .animation {
      display: flex;
      flex-direction: column;

      .container-animation {
        opacity: 0;
        background-color: #e9e0ff;
        transition: opacity 1s;
        height: 300px;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        flex-direction: column;
        color: rgb(65, 183, 131);
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        margin-bottom: 2rem;

        &.fade-in {
          animation-name: anim;
          animation-duration: 1s;
          animation-delay: 1s;
          animation-fill-mode: forwards;
        }

        .vueImg {
          transform: scale(0.1);
        }

        .animImg {
          animation-name: AnimImg;
          animation-duration: 2s;
          animation-delay: 1s;
          animation-fill-mode: forwards;
          transition:
            opacity 1s ease-in-out,
            transform 2s ease-in-out;
        }

        &_container-text {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;

          .first {
            transform: translateX(-200px);
            &.animText {
              animation-name: animText;
              animation-duration: 1s;
              animation-delay: 3s;
              animation-fill-mode: forwards;
            }
          }

          .second {
            transform: translateX(200px);

            &.animText {
              animation-name: animText;
              animation-duration: 1s;
              animation-delay: 3s;
              animation-fill-mode: forwards;
            }
          }
        }

        .belt {
          position: absolute;
          width: 50%;
          opacity: 0;

          &.anim {
            animation-name: anim;
            animation-duration: 1s;
            animation-delay: 4s;
            animation-fill-mode: forwards;
          }
        }
      }
    }

    .title_mission {
      text-transform: uppercase;

      margin-top: 5vh;

      h2 {
        color: rgb(117, 103, 188);
        font-size: 18px;
        font-weight: 100;
      }
    }

    p {
      color: $third-color;
    }

    h2 {
      color: $fourth-color;
    }

    .container_scene {
      height: 300px;
      width: 300px;
      margin: 0 auto;
      border-radius: 10px;
      position: relative;
      background-color: rgb(255, 186, 186);
      opacity: 0;
      transition: 1s;

      &.anim {
        animation-name: anim;
        animation-delay: 1s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }

      img {
        position: absolute;
      }
    }
  }
}

@keyframes anim {
  100% {
    opacity: 1;
  }
}

@keyframes AnimImg {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes AnimImgFullWidth {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1.2);
  }
}

@keyframes animText {
  100% {
    transform: translateX(0);
  }
}

@media (min-width: 650px) {
  .mission {
    p {
      font-size: 1.2rem;
    }
    .container_mission {
      .container-animation-text {
        p {
          line-height: 30px;
          text-align: justify;
          line-height: 30px;
          font-size: 1.2rem;
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .mission {
    p {
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    .container_mission {
      max-width: 1400px;

      .container-animation-text {
        p {
          line-height: 35px;
          text-align: justify;
          margin-top: 3rem;
          font-size: 1.5rem;
        }
      }

      .animation {
        flex-direction: row;
        gap: 5vw;
        margin-top: 5vh;
        width: 90vw;

        .container-animation {
          width: 100%;
          height: 450px;
          max-width: 800px;

          .vueImg {
            animation-name: AnimImgFullWidth;
          }

          .belt {
            width: 30%;
            max-width: 200px;
          }

          &_container-text {
            font-size: 2rem;
            .first {
              transform: translate(40vw);
              margin-top: 30px;
            }
            .second {
              transform: translate(-40vw);
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
