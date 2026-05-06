<template>
  <div class="relative min-h-screen">
    <ThreeBackground />

    <div class="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </div>
  </div>
</template>

<script setup>
import Hero from '../sections/Hero.vue'
import About from '../sections/About.vue'
import Projects from '../sections/Projects.vue'
import Skills from '../sections/Skills.vue'
import Experience from '../sections/Experience.vue'
import Education from  '../sections/Education.vue'
import Achievements from '../sections/Pricing.vue'
import Contact from '../sections/Contact.vue'
import ThreeBackground from '../sections/ThreeBackground.vue'
</script>