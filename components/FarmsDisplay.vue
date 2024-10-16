<script setup lang="ts">
import {useGameStore} from "~/stores/game";
import {storeToRefs} from "pinia";

const store = useGameStore();

const { count, farms } = storeToRefs(store);
const { upgradeFarm } = store;
</script>

<template>
  <main class="farms-display-main">
    <h1>Broccoli farms 🚜</h1>
    <div v-for="farm in farms" :key="farm.id" class="farm-element">
      <p class="farm-id">Farm {{ farm.id }}</p>
      <p>Capacity: {{ farm.capacity }}</p>
      <button class="upgrade-farm" :disabled="count < (farm.capacity + 1) * 10" @click="upgradeFarm(farm.id)">Upgrade</button>
    </div>
  </main>
</template>

<style scoped>
* {
  font-family: 'Roboto', monospace;
}

.farms-display-main {
  color: white;
  background-color: #5a5a5a;
  margin: 10px;
  padding: 10px;

  .farm-element {
    font-size: 120%;
    height: 100px;
    width: 100px;
    background-color: #7e7e7e;

    .farm-id {
      font-size: 20px;
    }

    .upgrade-farm {
      height: 50px;
      font-size: 20px;
    }
  }
}
</style>