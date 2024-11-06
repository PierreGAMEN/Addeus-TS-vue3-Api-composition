<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isActive = ref(false);
const isHomePage = ref(route.path === "/");

// Toggle menu
const toggleMenu = () => {
  if (isHomePage.value) {
    isActive.value = !isActive.value;
  }
};

// Close menu
const closeMenu = () => {
  isActive.value = false;
};

// Watch for route changes to update isHomePage
watch(
  () => route.path,
  (newPath) => {
    isHomePage.value = newPath === "/";
  }
);

// Scroll effect on mounted
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      closeMenu();

      // Extraire l'ID cible et vérifier s'il n'est pas null
      const targetId = anchor.getAttribute("href")?.slice(1);

      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          // Attendre que le DOM soit bien mis à jour avant de faire défiler
          nextTick(() => {
            window.scrollTo({
              top: target.offsetTop - window.innerHeight * 0.08,
              behavior: "smooth",
            });
          });
        }
      }
    });
  });
});
</script>


<template>
  <div class="container-header">
    <header class="header">
      <img
        src="https://cdn.prod.website-files.com/6448e2b9572c7f1509a7dbfa/644b86dfcbad9589a1c42a96_addeus_188_67_color_white.png"
        loading="lazy"
        alt="a pink and purple logo with a white background"
        class="navbar-logo"
      />
      <div class="nav-menu-icon-wrapper" @click="toggleMenu" v-if="isHomePage">
        <div class="nav-bar-menu-line top" :class="{ active: isActive }"></div>
        <div
          class="nav-bar-menu-line bottom"
          :class="{ active: isActive }"
        ></div>
      </div>

      <nav class="header-nav" :class="{ visible: isActive }" v-if="isHomePage">
        <ul>
          <li><a href="#why-me">Pourquoi me recruter ?</a></li>
          <li><a href="#skills">Mes compétences</a></li>
          <li><a href="#missions">Mes missions</a></li>
          <a href="https://pierre-gamen.netlify.app/" class="portfolio"
            >Portfolio</a
          >
          <a class="cv" href="/CV-Pierre GAMEN.pdf" target="_blank" alt="cv">
            Curriculum Vitae
          </a>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style lang="scss">
@import "../../styles/variables.scss";

.container-header {
  position: fixed;
  z-index: 100;
}
.header {
  display: flex;
  background-color: $primary-background-color;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
  align-items: center;

  &-nav {
    position: absolute;
    width: 100%;
    right: 0;
    top: 78px;
    background-color: $background-nav;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
    z-index: 3;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem;

      li {
        list-style-type: none;
        color: white;
      }

      li a {
        background-color: rgba(231, 231, 231, 0);
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

      .cv {
        background-color: rgba(255, 255, 255, 0);
        border: 2px solid white;
      }

      button {
        background-color: #ff2d7d00;
        padding: 1rem;
        color: white;
        text-align: center;
        font-size: 1rem;
        border-radius: 10px;
        border: 1px solid white;
      }
    }
  }

  &-nav.visible {
    max-height: 300px;
    z-index: 10;
  }

  img {
    width: 120px;
    height: 28px;
    margin-left: 2rem;
  }

  ul {
    align-items: none;
  }

  .nav-menu-icon-wrapper {
    background-color: $primary-color;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    height: 30px;
    cursor: pointer;
    margin-right: 1rem;

    .nav-bar-menu-line {
      width: 32px;
      height: 3px;
      background-color: $secondary-color;
      transition: transform 0.3s ease;
    }

    .bottom {
      margin-top: 12px;
    }

    .top.active {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .bottom.active {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
}

@media (min-width: 1024px) {
  .header {
    &-nav {
      position: relative;
      top: auto;
      max-height: none;
      display: flex;
      justify-content: space-between;
      background-color: transparent;

      ul {
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        align-items: center;
      }
      a,
      button {
        font-size: 1.2rem;
      }
    }

    .nav-menu-icon-wrapper {
      display: none;
    }

    img {
      width: 180px;
      height: auto;
    }
  }
}
</style>
