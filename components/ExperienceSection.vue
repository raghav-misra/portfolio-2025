<script setup lang="ts">
import type { ExperienceData } from "~/types";

const props = defineProps<{ experience: ExperienceData }>();
</script>

<template>
  <div class="experience">
    <h3 class="serif">
      {{ props.experience.role }} @ <b class="serif">{{ props.experience.company }}</b>
    </h3>
    <i
      >{{ props.experience.dateRange[0] }} —
      {{ props.experience.dateRange[1] }}</i
    >
    <p>{{ props.experience.content }}</p>
  </div>
</template>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--shadow);
}
</style>
