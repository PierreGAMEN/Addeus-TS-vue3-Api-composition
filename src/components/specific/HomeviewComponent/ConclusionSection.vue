<template>
  <section class="conclusion">
    <div class="wrapper">
      <p class="fade-in-up" :class="{ 'fade-in-up-active': p1 }">
        Je vous remercie d'avoir pris le temps de découvrir ce site !
      </p>
    </div>
    <div class="wrapper">
      <p class="fade-in-up" :class="{ 'fade-in-up-active': p1 }">
        Je serais ravi de pouvoir vous exposer plus en détail mes compétences et
        ma motivation lors d'un entretien. Ce projet d'intégration de l'IA SAM
        représente pour moi une opportunité passionnante à laquelle je souhaite
        pleinement contribuer.
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { setElementVisibilityStatus } from '@/utils';

const p1 = ref(false);

const handleScroll = () => {
  setElementVisibilityStatus(".conclusion", { p1 }, "p1");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Vérifie initialement si l'élément est déjà visible
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style lang="scss">
@import "../../../styles/variables.scss";
.conclusion {
  background: rgb(4, 16, 38);
  background: linear-gradient(
    180deg,
    rgba(4, 16, 38, 1) 0%,
    rgba(6, 18, 56, 1) 100%
  );
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  gap: 2rem;
  padding-top: 3vh;
  padding-bottom: 3vh;

  div:nth-child(1) p {
    font-size: 4rem;
    width: 90vw;
    margin: 0 auto;
    text-align: center;
  }
  div:nth-child(2) p {
    font-size: 2rem;
    width: 90vw;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
  }
}

@media (max-width: 1024px) {
  .conclusion {
    div:nth-child(1) p {
      font-size: 2.5rem;
    }
    div:nth-child(2) p {
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 600px) {
  .conclusion {
    div:nth-child(1) p {
      font-size: 2rem;
    }
    & div:nth-child(2) p {
      font-size: 1rem;
      line-height: 25px;
    }
  }
}
</style>
