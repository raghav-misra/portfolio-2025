<script setup lang="ts">
import type { TabName } from "./types";

const currentTab = ref<TabName>("overview");

const goto = (newTab: TabName) => {
  currentTab.value = newTab;
};
</script>

<template>
  <main>
    <h1 class="serif">Hi, I'm Raghav!</h1>

    <p>
      <a target="_blank" href="https://www.linkedin.com/in/raghav--misra/"
        >LinkedIn</a
      >
      —
      <a target="_blank" href="https://github.com/raghav-misra">GitHub</a>
      —
      <a target="_blank" href="mailto:raghav.m2014@gmail.com"
        >raghav.m2014@gmail.com</a
      >
    </p>
    <nav>
      <button
        @click="goto('overview')"
        :class="currentTab === 'overview' && 'active'"
      >
        Overview
      </button>
      <button
        @click="goto('experience')"
        :class="currentTab === 'experience' && 'active'"
      >
        Experience
      </button>
      <button
        @click="goto('projects')"
        :class="currentTab === 'projects' && 'active'"
      >
        Projects
      </button>
    </nav>

    <Transition name="slide-fade" mode="out-in">
      <TabOverview v-if="currentTab === 'overview'" @tab-changed="goto" />
      <TabExperience
        v-else-if="currentTab === 'experience'"
        @tab-changed="goto"
      />
      <TabProjects v-else @tab-changed="goto" />
    </Transition>
  </main>
</template>
