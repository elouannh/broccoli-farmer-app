<script setup lang="ts">
const props = defineProps<{
  content: string;
  onclick: () => void;
  disabled?: () => boolean;
}>();

const disabledFunc = computed(() => {
  if (props.disabled) return props.disabled();
  return false;
});
</script>
<template>
  <button class="classic-button" @click="onclick()" :disabled="disabledFunc">
    {{ content }}
  </button>
</template>

<style scoped>
.classic-button {
  border: none;
  background-color: #454545;
  color: white;
  border-radius: 3px;
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 20px;
  margin: 5px;

  &:hover {
    background-color: #4a4a4a;
    cursor: pointer;
  }

  &:disabled {
    background-color: #5e5e5e;
    color: rgba(255, 255, 255, 0.6);
    cursor: not-allowed;
  }
}
</style>