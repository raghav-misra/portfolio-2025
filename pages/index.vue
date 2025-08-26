<script setup lang="ts">
import { navigateTo } from "nuxt/app";
</script>

<template>
  <div class="main">
    <p><i>Welcome to my small corner of the internet!</i></p>

    <BulletSection title="What am I up to?">
      <li>
        Undergraduate student at UMD studying computer science and mathematics.
      </li>
      <li>
        Building <b>StudyKit</b> (<a target="_blank" href="https://studykit.app"
          >studykit.app</a
        >), a platform helping <i>40k+ students</i> build study habits through
        AI-powered learning customization.
      </li>
      <li>
        Director of education at UMD's <b>App Dev Club</b>: I teach students to
        build cool stuff on the web!
      </li>
    </BulletSection>

    <BulletSection title="What have I done?">
      <li>
        SWE intern @ <b>Google</b>: components and services to increase Google
        Account sign-ins on Android Automotive.
      </li>
      <li>
        SWE intern @
        <b>Palantir Technologies</b>: frontend and performance engineering for
        government data analytics workflows.
      </li>
      <li>
        SDE intern @
        <b>Amazon Web Services</b>: backend, infra, and low-level development on
        <a
          href="https://docs.aws.amazon.com/ebs/latest/APIReference/Welcome.html"
          >EBS direct APIs</a
        >.
      </li>
      <li>
        AI/ML Research @
        <b>UMD</b>: agentic AI systems to drive data science and analytics with
        natural language.
      </li>
      <li>
        ... Swap to the
        <a @click="navigateTo('/experience')" class="underline">Experience</a>
        or
        <a @click="navigateTo('/projects')" class="underline">Projects</a>
        tabs to see more!
      </li>
    </BulletSection>

    <BulletSection title="Current interests!">
      <li>Experimenting with automating my software development—</li>
      <ul>
        <li>generating UI markup and styling from natural language;</li>
        <li>scaffolding typed CRUD API code from DB schemas;</li>
        <li>other such random things!</li>
      </ul>
      <li>Data, infrastructure, and performance engineering—</li>
      <ul>
        <li>exploring MLOps and AI infrastructure at the moment;</li>
        <li>
          especially into web performance (talk to me for hours about Web
          Workers)
        </li>
      </ul>
      <li>
        Following TC39 proposals. (Nothing like waiting on the decorators
        proposal since middle school!)
      </li>
    </BulletSection>
  </div>
</template>
