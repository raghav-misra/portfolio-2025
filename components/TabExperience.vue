<script setup lang="ts">
import type { TabEmits } from "~/types";
import { experiences } from "~/content/experiences";

const emit = defineEmits<TabEmits>();
</script>

<template>
  <div class="main">
    <ExperienceSection
      v-for="experience in experiences"
      :experience="experience"
    />
  </div>
</template>
