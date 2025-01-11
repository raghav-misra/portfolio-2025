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
      <button class="active">Overview</button>
      <button>Projects</button>
      <button>Contact</button>
    </nav>

    <p class="underline">Current interests!</p>
    <ul>
      <li>Accelerating my software development with more software—</li>
      <ul>
        <li>generating UI markup and styling from natural language;</li>
        <li>scaffolding <i>typed</i> CRUD API code from DB schemas;</li>
        <li>many more random things!</li>
      </ul>
      <li>Data and infrastructure engineering (particularly ML infra right now).</li>
      <li>Following TC39 proposals.</li>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://tc39.es/proposal-temporal/docs/index.html"
            >Temporal</a
          >!!
          <a href="https://github.com/tc39/proposal-decorators" target="_blank"
            >Decorators</a
          >!!
        </li>
      </ul>
    </ul>

    <p class="underline">What am I up to?</p>
    <ul>
      <li>
        Undergraduate student at UMD studying computer science and mathematics.
      </li>
      <li>
        Building <b>StudyKit</b> (<a target="_blank" href="https://studykit.app"
          >studykit.app</a
        >), a platform helping <i>40k+ students</i> build study habits through
        AI-powered learning customization.
      </li>
    </ul>

    <p class="underline">What have I done?</p>
    <ul>
      <li>
        <i>[Sept 2024 - Dec 2024]</i> — SWE intern at
        <b>Palantir Technologies</b>
        doing frontend and performance engineering to empower
        <a target="_blank" href="https://www.palantir.com/platforms/gotham/"
          >unique defense workflows</a
        >.
      </li>
      <li>
        <i>[May 2024 - Aug 2024]</i> — SDE intern at
        <b>Amazon Web Services</b> doing backend, infrastructure, and low-level
        development on
        <a
          href="https://docs.aws.amazon.com/ebs/latest/APIReference/Welcome.html"
          >EBS direct APIs</a
        >.
      </li>
      <li>
        <i>[May 2024 - Aug 2024]</i> — Researching agentic AI systems to drive
        data science and analytics with natural language.
      </li>
      <li>
        Extensive professional experience is on my
        <a target="_blank" href="https://www.linkedin.com/in/raghav--misra/"
          >LinkedIn</a
        >!
      </li>
    </ul>
  </main>
</template>

<style>
:root {
  font-size: 16px;
  padding: 2rem;

  --dark: #333333;
  --light: #eff9f0;
  --link: #6883ba;
  --shadow: #33333328;

  background: var(--light);
}

@media screen and (max-width: 550px) {
  :root {
    padding: 1rem;
  }
}

@media screen and (max-width: 410px) {
  :root {
    font-size: 14px;
  }
}

* {
  margin: 0;
  padding: 0;
  font-family: "Figtree", Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  color: var(--dark);
}

b {
  font-weight: 600;
}

.serif {
  font-family: "PT Serif", "Times New Roman", Times, serif;
}

main {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

ul {
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

nav {
  display: flex;
  border: 1px var(--dark) solid;
  border-left: none;
  border-right: none;
  padding: 0.5rem;
  gap: 0.25rem;
  justify-content: space-around;
}

nav button {
  background: none;
  border: none;
  font-weight: 600;
  font-size: 1.125rem;
}

nav button.active {
  color: var(--link);
}

nav button:hover {
  color: var(--link);
  text-decoration: underline;
}

.underline {
  text-decoration: underline solid var(--shadow);
}

a {
  color: var(--link);
}

a:hover {
  text-shadow: var(--shadow) 1px 1px 1px;
}
</style>
