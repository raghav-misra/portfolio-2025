<script setup lang="ts">
import type { ExperienceData } from "~/types";

const props = defineProps<{ experience: ExperienceData }>();
</script>

<template>
  <div class="experience">
    <div class="company-role-date">
      <img
        class="company-logo"
        :src="`/img/${props.experience.company
          .toLowerCase()
          .replaceAll(' ', '')}.jpg`"
      />
      <h3 class="serif">
        <b class="serif">{{ props.experience.company }}</b
        ><br />
        {{ props.experience.role }}
        <br />
      </h3>
      <i
        >{{ props.experience.dateRange[0] }} —
        {{ props.experience.dateRange[1] }}</i
      >
    </div>
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

.company-role-date {
  display: flex;
  gap: 0.75rem;
}

.company-role-date .serif {
  margin-right: auto;
}

.company-logo {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 5px;
  border: 1px solid var(--shadow);
}
</style>
