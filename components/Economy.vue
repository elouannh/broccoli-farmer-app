<script setup lang="ts">
import { useGameStore } from "~/stores/game";

const store = useGameStore();

const { economy } = storeToRefs(store);
</script>

<template>
  <main class="economy-main">
    <h1>Economy 💰</h1>
    <p>Wallet:</p>
    <h2>${{ economy.wallet.toFixed(2) }}</h2>
    <p>Base price per broccoli:</p>
    <h3>${{ economy.sellingPrice }}/u</h3>
  </main>
</template>

<style scoped>
* {
  font-family: 'Roboto', monospace;
}

.economy-main {
  color: white;
  background-color: #5a5a5a;
  margin: 10px;
  padding: 10px;
}
</style>