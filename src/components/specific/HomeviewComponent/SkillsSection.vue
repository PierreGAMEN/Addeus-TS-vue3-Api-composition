<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import dataStacks from "./Hero/dataStacks";

// Variables réactives pour les données
const dataStacksRef = ref(dataStacks);

// Fonctions calculées pour les stacks
const frontStacks = computed(() => dataStacksRef.value.filter((stack) => stack.category === "front"));
const backStacks = computed(() => dataStacksRef.value.filter((stack) => stack.category === "back"));
const otherStacks = computed(() => dataStacksRef.value.filter((stack) => stack.category === "other"));

// Gestion du scroll
const handleScroll = () => {
  calculateImageDistance();
};

// Calcul de la distance des éléments et application des styles
const calculateImageDistance = () => {
  const divElement = document.querySelector(".title");
  const imgElement = document.querySelector(".container-img");
  const t2 = document.querySelector(".t2");
  const t3 = document.querySelector(".t3");
  const iceberg = document.querySelector(".iceberg");
  const fontImg = document.querySelectorAll(".front-img");
  const backImg = document.querySelectorAll(".back-img");
  const otherImg = document.querySelectorAll(".other-img");

  if (divElement && imgElement && t2 && t3 && iceberg) {
    const divTop = divElement.getBoundingClientRect().top;
    const imgTop = imgElement.getBoundingClientRect().top;
    const t2Top = t2.getBoundingClientRect().top;
    const t3Top = t3.getBoundingClientRect().top;

    // Calcul des distances entre les éléments
    const distanceFromT2Top = t2Top - divTop;
    const distanceFromT3Top = t3Top - divTop;
    const distanceFromDivTop = imgTop - divTop;
    const distanceBeetwenT2AndImg = distanceFromT2Top - distanceFromDivTop;
    const distanceBeetwenT3AndImg = distanceFromT3Top - distanceFromDivTop;

    // Application des classes CSS en fonction des distances calculées
    if (distanceBeetwenT3AndImg < 50) {
      iceberg.classList.add("fullsize");
      iceberg.classList.remove("back-end");
      fontImg.forEach((img) => img.classList.remove("resizing"));
      otherImg.forEach((img) => img.classList.add("apparition"));
    } else if (distanceBeetwenT2AndImg < 0) {
      iceberg.classList.remove("fullsize");
      iceberg.classList.add("back-end");
      fontImg.forEach((img) => img.classList.add("resizing"));
      backImg.forEach((img) => img.classList.add("apparition"));
      otherImg.forEach((img) => img.classList.remove("apparition"));
    } else if (distanceBeetwenT2AndImg < 150) {
      iceberg.classList.remove("back-end");
      backImg.forEach((img) => img.classList.remove("apparition"));
    } else {
      iceberg.classList.remove("back-end");
      fontImg.forEach((img) => img.classList.remove("resizing"));
      backImg.forEach((img) => img.classList.remove("apparition"));
    }
  }
};

// Ajout de l'écouteur de scroll au montage et nettoyage au démontage
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section id="skills" class="skills">
    <h2 class="title">Mes compétences techniques</h2>
    <div class="container-skills">
      <div class="left">
        <div class="text t1">
          <h3>Développeur front-end</h3>
          <p>
            J'utilise principalement <strong>React</strong> et
            <strong>Sass</strong> dans la majorité de mes projets front-end,
            mais ma curiosité m'amène souvent à explorer d'autres technologies
            comme <strong>VueJs</strong> ou à travailler avec JavaScript sans
            librairie. Ce que j'apprécie particulièrement, c'est la liberté de
            créer des interfaces uniques tout en optimisant l'expérience
            utilisateur.
          </p>
          <br />

          <p><strong>Ce site web est réalisé en VueJs.</strong></p>
        </div>

        <div class="text t2">
          <h3>Développeur Back-end</h3>
          <p>
            En back-end, je me concentre principalement sur
            <strong>Node.js</strong> et <strong>Express</strong> pour créer des
            API performantes, avec <strong>PostgreSQL</strong> pour la gestion
            des bases de données. Cependant, ma curiosité m'incite à explorer
            d'autres outils et approches, ce qui me permet d'adapter les
            solutions aux besoins spécifiques des projets.
          </p>
        </div>

        <div class="text t3">
          <h3>Développeur Fullstack</h3>
          <p>
            En tant que développeur fullstack, j'allie mes compétences en
            front-end avec React et Vue.js, et en back-end avec Node.js et
            PostgreSQL, pour créer des applications complètes.
          </p>
          <a href="https://github.com/PierreGAMEN/Lets_send_client"
            >LETS SEND - Projet fullstack</a
          >
        </div>
      </div>
      <div class="right">
        <div class="container-img">
          <img class="iceberg" src="/iceberg.png" alt="Iceberg" />

          <!-- Section front -->
          <div class="front">
            <img
              class="front-img"
              v-for="(stack, index) in frontStacks"
              :key="index"
              :src="stack.img"
              :alt="stack.alt"
            />
          </div>

          <!-- Section back -->
          <div class="back">
            <img
              class="back-img"
              v-for="(stack, index) in backStacks"
              :key="index"
              :src="stack.img"
              :alt="stack.alt"
            />
          </div>
          <div class="other">
            <img
              class="other-img"
              v-for="(stack, index) in otherStacks"
              :key="index"
              :src="stack.img"
              :alt="stack.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../../../styles/variables.scss";

.skills {
  padding-top: 5vh;

  h2 {
    font-size: 3rem;
    margin-bottom: 5vh;
    text-align: center;
    color: $fourth-color;
  }
  .container-skills {
    display: flex;
    padding: 5%;
    height: 200vh;
    width: 90%;
    gap: 2rem;

    strong {
      color: $primary-color;
      font-weight: 100;
    }

    .left,
    .right {
      width: 90%;
      display: flex;
      flex-direction: column;
    }

    .left {
      padding-bottom: 30vh;
    }

    .right {
      padding-bottom: 10vh;
    }

    .text {
      position: sticky;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 700px;
      gap: 1rem;
      top: 150px;
      background-color: white;
      line-height: 40px;
      text-align: justify;

      a {
        padding: 1rem;
        background-color: $primary-color;
        border: 3px solid $primary-color;
        color: white;
        width: 50%;
        text-decoration: none;
        text-align: center;
        border-radius: 10px;
        margin-top: 1rem;
        font-size: 1.2rem;
        transition: 0.5s;

        &:hover {
          background-color: rgba(32, 32, 32, 0);
          color: black;
          color: $primary-color;
        }
      }

      h3 {
        font-size: 3rem;
        color: $fourth-color;
      }

      p {
        font-size: 1.5rem;
        color: $third-color;
      }
    }

    .t1 {
      top: 250px;
      justify-content: flex-start;
    }

    .container-img {
      width: 700px;
      height: 500px;

      background-color: rgb(249, 231, 227);
      position: sticky;
      top: 250px;
      border-radius: 10px;
      transition: 1s;
      overflow: hidden;

      .front-img {
        position: absolute;
        z-index: 2;
        top: 10px;
        width: 60px;
        transition: 1s;

        &:nth-child(1) {
          transform: translate(50px, 150px);
        }
        &:nth-child(2) {
          transform: translate(150px, 100px);
        }
        &:nth-child(3) {
          transform: translate(250px, 50px);
          background-color: rgba(255, 255, 255, 0.521);
        }
        &:nth-child(4) {
          transform: translate(550px, 150px);
        }
        &:nth-child(5) {
          transform: translate(600px, 100px);
        }
        &:nth-child(6) {
          transform: translate(500px, 50px);
        }
      }

      .resizing {
        opacity: 0;
        transition: 1s;
      }

      .back-img {
        position: absolute;
        z-index: 2;
        bottom: 10px;
        width: 60px;
        transition: 1.5s;
        opacity: 0;

        &:nth-child(1) {
          transform: translate(50px, -150px);
        }
        &:nth-child(2) {
          transform: translate(150px, -100px);
        }
        &:nth-child(3) {
          transform: translate(250px, -50px);
        }
        &:nth-child(4) {
          transform: translate(550px, -150px);
        }
        &:nth-child(5) {
          transform: translate(600px, -100px);
        }
        &:nth-child(6) {
          transform: translate(500px, -50px);
        }
      }

      .other-img {
        position: absolute;
        z-index: 2;
        bottom: 10px;
        width: 60px;
        transition: 1.5s;
        opacity: 0;

        &:nth-child(1) {
          transform: translate(200px, -200px);
        }
        &:nth-child(2) {
          transform: translate(320px, -200px);
        }
        &:nth-child(3) {
          transform: translate(450px, -200px);
        }
      }

      .apparition {
        opacity: 1;
      }

      .iceberg {
        width: 100%;
        transform: scale(2);
        transform-origin: top center;
        transition: 1s;
      }

      .fullsize {
        transform: scale(1);
      }

      .back-end {
        transform: scale(1.5);
        transform-origin: bottom center;
      }
    }

    .color_anim1 {
      opacity: 0.6;
    }

    .color_anim2 {
      background-color: rgb(226, 211, 250);
    }
  }
}

@media (max-width: 1420px) {
  .skills {
    .container-skills {
      .text {
        h3 {
          font-size: 2rem;
        }
        a {
          width: 80%;
        }
      }
    }
  }
}

@media (max-width: 1230px) {
  .skills {
    .container-skills {
      .text {
        height: 60vh;

        p {
          font-size: 1.2rem;
          line-height: 30px;
        }
      }

      .container-img {
        width: 500px;
        height: 400px;

        .front-img,
        .back-img,
        .other-img {
          width: 40px;
        }

        .front-img {
          &:nth-child(1) {
            transform: translate(50px, 100px);
          }
          &:nth-child(2) {
            transform: translate(120px, 100px);
          }
          &:nth-child(3) {
            transform: translate(200px, 50px);
          }

          &:nth-child(4) {
            transform: translate(400px, 100px);
          }
          &:nth-child(5) {
            transform: translate(440px, 50px);
          }
          &:nth-child(6) {
            transform: translate(380px, 30px);
          }
        }

        .back-img {
          &:nth-child(1) {
            transform: translate(50px, -100px);
          }
          &:nth-child(2) {
            transform: translate(120px, -100px);
          }
          &:nth-child(3) {
            transform: translate(200px, -50px);
          }

          &:nth-child(4) {
            transform: translate(300px, -100px);
          }
          &:nth-child(5) {
            transform: translate(430px, -50px);
          }
          &:nth-child(6) {
            transform: translate(380px, -30px);
          }
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .skills {
    width: 100%;

    h2 {
      width: 100%;
      font-size: 2rem;
    }

    .container-skills {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0;
      height: auto;
      margin-top: 10vh;

      .left {
        width: 90%;
        .text {
          max-width: 900px;
          height: 50vh;
          padding-bottom: 0vh;

          h3 {
            font-size: 1.5rem;
          }
        }
      }

      .right {
        position: block;
        top: 0;
        padding-bottom: 0vh;
        margin-top: -35vh;
        margin-bottom: 10vh;

        .container-img {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;

          .back-img {
            opacity: 1;
          }
        }

        .iceberg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media (max-width: 580px) {
  .skills {
    .container-skills {
      .left {
        .text {
          height: 65vh;
        }
      }
      .container-img {
        .front-img {
          width: 35px;
          &:nth-child(1) {
            transform: translate(50px, 20px);
          }
          &:nth-child(2) {
            transform: translate(100px, 60px);
          }
          &:nth-child(3) {
            transform: translate(180px, 50px);
          }

          &:nth-child(4) {
            transform: translate(230px, 20px);
          }
          &:nth-child(5) {
            transform: translate(280px, 80px);
          }
          &:nth-child(6) {
            transform: translate(290px, 30px);
          }
        }

        .back-img {
          width: 35px;
          &:nth-child(1) {
            transform: translate(50px, -20px);
          }
          &:nth-child(2) {
            transform: translate(100px, -60px);
          }
          &:nth-child(3) {
            transform: translate(180px, -50px);
          }

          &:nth-child(4) {
            transform: translate(230px, -20px);
          }
          &:nth-child(5) {
            transform: translate(280px, -80px);
          }
          &:nth-child(6) {
            transform: translate(290px, -30px);
          }
        }

        .other-img {
          width: 35px;
          &:nth-child(1) {
            transform: translate(75px, -200px);
          }
          &:nth-child(2) {
            transform: translate(175px, -200px);
          }
          &:nth-child(3) {
            transform: translate(300px, -200px);
          }
        }
      }
    }
  }
}
</style>
