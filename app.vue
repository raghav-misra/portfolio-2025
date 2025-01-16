<script setup lang="ts">
const route = useRoute();

const currentTab = computed(() => {
  const choices = ["experience", "projects"];

  for (let choice of choices) {
    if (route.path.includes(choice)) return choice;
  }

  return "overview";
});
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
        @click="navigateTo('/')"
        :class="currentTab === 'overview' && 'active'"
      >
        Overview
      </button>
      <button
        @click="navigateTo('/experience')"
        :class="currentTab === 'experience' && 'active'"
      >
        Experience
      </button>
      <button
        @click="navigateTo('/projects')"
        :class="currentTab === 'projects' && 'active'"
      >
        Projects
      </button>
    </nav>

    <Transition name="slide-fade" mode="out-in">
      <NuxtPage />
    </Transition>
  </main>
</template>
