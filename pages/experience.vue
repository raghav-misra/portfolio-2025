<script setup lang="ts">
import { experiences } from "~/content/experiences";
</script>

<template>
  <div class="main">
    <ExperienceSection
      v-for="experience in experiences"
      :experience="experience"
    />
  </div>
</template>
