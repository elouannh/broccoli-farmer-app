<script setup lang="ts">
import { useGameStore } from "~/stores/game";
import {storeToRefs} from "pinia";

const store = useGameStore();

const { count } = storeToRefs(store);
const { increment, sell } = store;
</script>

<template>
  <main class="broccoli-counter-main">
    <h1>Click to summon some broccoli. 🥦</h1>
    <h1 class="broccoli-count">{{ Math.ceil(count) }}</h1>
    <button class="broccoli-summoner" @click="increment">+🥦</button>
    <button class="broccoli-seller" @click="sell">Sell</button>
  </main>
</template>

<style scoped>
* {
  font-family: 'Roboto', monospace;
}

.broccoli-counter-main {
  color: white;
  background-color: #5a5a5a;
  margin: 10px;
  padding: 10px;

  .broccoli-count {
    font-size: 100px;
  }

  .broccoli-summoner, .broccoli-seller {
    width: 70px;
    height: 60px;
    font-size: 20px;
  }
}
</style>