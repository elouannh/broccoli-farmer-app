<script setup lang="ts">
import {useGameStore} from "~/stores/game";
import {storeToRefs} from "pinia";
import ClassicButton from "~/components/buttons/ClassicButton.vue";
import type {Farm} from "~/types/game";
import {useDisableUpgradeButton} from "~/composables/useDisableUpgradeButton";

const store = useGameStore();

const { farming } = storeToRefs(store);
const { upgradeFarm } = store;
</script>

<template>
  <main class="farms-display-main">
    <h1>Broccoli farms 🚜</h1>
    <div class="farm-element-row">
      <div v-for="farm in farming.farms" :key="farm.id" class="farm-element">
        <p class="farm-id">Farm {{ farm.id }}</p>
        <p>Capacity: {{ farm.capacity }}</p>
        <classic-button class="upgrade-farm" :onclick="() => upgradeFarm(farm.id)" content="Upgrade" :disabled="useDisableUpgradeButton(farm)"/>
      </div>
      <div class="farm-element">
        <p class="farm-id">Unlock farm</p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
* {
  font-family: 'Roboto', monospace;
}

.farms-display-main {
  color: white;
  background-color: #5a5a5a;
  margin: 10px;
  padding: 10px;

  .farm-element-row {
    display: flex;
    flex-direction: row;
    row-gap: 30px;

    .farm-element {
      font-size: 120%;
      height: 100px;
      width: fit-content;
      padding: 20px;
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
}
</style>