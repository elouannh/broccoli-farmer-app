<script setup lang="ts">
defineProps<{ content: string; }>();
</script>

<template>
  <button>
    {{ content}}
  </button>
</template>

<style scoped>

</style>