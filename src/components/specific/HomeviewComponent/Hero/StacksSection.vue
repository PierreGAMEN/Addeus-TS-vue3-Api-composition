<script setup lang="ts">

import dataStacks from './dataStacks';

interface dataStacks {
  img: string,
  alt: string,
  category: string,
}

</script>

<template>
  <div class="stacks">
    <div v-for="(stack, index) in dataStacks" :key="index" class="stack-item">
      <img :src="stack.img" :alt="stack.alt" />
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../../styles/variables.scss";

.stacks {
  background-color: $primary-background-color;
  color: $secondary-color;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  overflow-x: scroll;
  align-items: center;
  height: 30vh;

  .stack-item {
    margin: 0.5rem 0;
    padding: 0.5rem;
  }

  img {
    width: 80px;
    min-width: 80px;
  }
}

@media (min-width: 1120px) {
  .stacks {
    overflow: none;
    justify-content: space-around;
    height: 40vh;
  }
}
</style>
