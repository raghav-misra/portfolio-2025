<script setup lang="ts">
import { projects } from "~/content/projects";
</script>

<template>
  <div class="main">
    <ProjectSection v-for="project of projects" :project="project" />
  </div>
</template>
