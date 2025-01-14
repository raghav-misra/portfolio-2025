<script setup lang="ts">
import type { ProjectData } from "~/types";

const props = defineProps<{ project: ProjectData }>();
</script>

<template>
  <div class="experience">
    <div class="title">
      <h3>
        {{ props.project.title }}
      </h3>
      <a target="_blank" :href="props.project.url[1]">{{
        props.project.url[0]
      }}</a>
    </div>

    <p>
      <i>{{ props.project.description }}</i>
    </p>
    <p v-if="props.project.award != null">
      <b>Award:</b> {{ props.project.award }}
    </p>
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

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
