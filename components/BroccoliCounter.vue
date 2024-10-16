<script setup lang="ts">
import { useGameStore } from "~/stores/game";
import {storeToRefs} from "pinia";
import ClassicButton from "~/components/buttons/ClassicButton.vue";

const store = useGameStore();

const { farming, economy } = storeToRefs(store);
const { increment, sell } = store;
</script>

<template>
  <main class="broccoli-counter-main">
    <h1>Click to summon some broccoli. 🥦</h1>
    <h1 class="broccoli-count">{{ Math.ceil(farming.count) }}</h1>
    <classic-button content="+🥦" :onclick="increment"/>
    <classic-button :content="`Sell 💰 (+$${(farming.count * economy.sellingPrice).toFixed(2)})`" :onclick="sell"/>
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
}
</style>