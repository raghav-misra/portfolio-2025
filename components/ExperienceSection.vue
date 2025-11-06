<script setup lang="ts">
import type { ExperienceData } from "~/types";

const props = defineProps<{ experience: ExperienceData }>();
</script>

<template>
  <div class="experience">
    <div class="company-heading">
      <img
        class="company-logo"
        :src="`/img/${props.experience.company
          .toLowerCase()
          .replaceAll(' ', '')}.jpg`"
      />
      <div class="heading-text">
        <div class="company-name-date">
          <h3 class="serif">{{ props.experience.company }}</h3>
          <i
            >{{ props.experience.dateRange[0] }} —
            {{ props.experience.dateRange[1] }}</i
          >
        </div>
        {{ props.experience.role }}
      </div>
    </div>
    <!--<p>{{ props.experience.content }}</p>-->
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

.company-heading {
  display: flex;
  gap: 0.75rem;
}

.heading-text {
  flex: auto;
}

.company-name-date {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.company-name-date h3 {
  font-weight: bold;
}

.company-logo {
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  border: 1px solid var(--shadow);
}

@media screen and (max-width: 550px) {
  .company-logo {
    display: none;
  }
}
</style>
