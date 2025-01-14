<script setup lang="ts">
import type { TabEmits } from "~/types";
import { projects } from "~/content/projects";

const emit = defineEmits<TabEmits>();
</script>

<template>
  <div class="main">
    <ProjectSection v-for="project of projects" :project="project" />
  </div>
</template>
