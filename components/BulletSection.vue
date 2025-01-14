<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <p class="underline">{{ props.title }}</p>
  <ul>
    <slot />
  </ul>
</template>
