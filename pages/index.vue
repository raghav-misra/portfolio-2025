<script setup lang="ts">
import { navigateTo } from "nuxt/app";
</script>

<template>
  <div class="main">
    <p><i>Welcome to my small corner of the internet!</i></p>

    <BulletSection title="What am I up to?">
      <!--<li>
        Undergraduate student at UMD studying computer science and mathematics.
      </li>-->
      <li>
        Co-founded <b>StudyKit</b> (<a target="_blank" href="https://studykit.app"
          >studykit.app</a
        >), a platform helping <i>over 100k students</i> build study habits through
        AI-powered learning customization.
      </li>
      <li>Interested in AI agents (<i>pan to wall of Buzz Lightyears</i>), frontend performance engineering, and HPC/distributed systems!</li>
      <!--<li>
        Director of education at UMD's <b>App Dev Club</b>: I teach students to
        build cool stuff on the web!
      </li>-->
    </BulletSection>

    <BulletSection title="What have I done?">
      <li>
        (Tried to) increase user sign-ins in cars @ <b>Google</b>.
      </li>
      <li>
        Made stuff load faster in constrained ("edge") environments @ <b>Palantir</b>.
      </li>
      <li>
        Helped make more things happen at once ("throughput") @ <b>AWS</b>
      </li>
      <li>
        Researched how to make ChatGPT analyze data @ school.
        <!--AI/ML Research @
        <b>UMD</b>: agentic AI systems to drive data science and analytics with
        natural language.-->
      </li>
      <li>
        ... Swap to the
        <a @click="navigateTo('/experience')" class="underline">Experience</a>
        or
        <a @click="navigateTo('/projects')" class="underline">Projects</a>
        tabs to see more!
      </li>
    </BulletSection>
  </div>
</template>
