<script setup lang="ts">
import type { ExperienceData } from "~/types";

const props = defineProps<{ experience: ExperienceData }>();
</script>

<template>
  <div class="experience">
    <h3>
      {{ props.experience.role }} @ <b>{{ props.experience.company }}</b>
    </h3>
    <i
      >{{ props.experience.dateRange[0] }} —
      {{ props.experience.dateRange[1] }}</i
    >
    <ul>
      <li>{{ props.experience.content }}</li>
    </ul>
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
