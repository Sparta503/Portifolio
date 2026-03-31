<template>
  <section id="achievements" class="py-24 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="flex items-center justify-between mb-12">
        <h2 class="text-3xl font-semibold text-white">
          Our Awards
        </h2>

        <a 
          href="#projects"
          class="text-blue-200 hover:text-white hover:underline font-bold transition"
        >
          View My Work →
        </a>
      </div>

      <!-- List -->
      <div class="divide-y divide-white/20">

        <!-- Row -->
        <div 
          v-for="item in achievements"
          :key="item.title"
          class="grid grid-cols-3 py-6 items-center hover:bg-white/10 transition-all duration-300"
        >
          <!-- LEFT -->
          <p class="text-white font-medium">
            {{ item.title }}
          </p>

          <!-- CENTER -->
          <p class="text-white/80 text-sm">
            {{ item.category }}
          </p>

          <!-- RIGHT -->
          <p class="text-right text-white/80">
            {{ item.year }}
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type Achievement = {
  title: string
  category: string
  year: string
}

const achievements: Achievement[] = [
  {
    title: "Site Of The Day",
    category: "CSS & Animation",
    year: "2018"
  },
  {
    title: "Best Business Model",
    category: "New Strategy",
    year: "2019"
  },
  {
    title: "Motion Graphic",
    category: "3D & Visual Effect",
    year: "2020"
  },
  {
    title: "Video Design",
    category: "CSS & Animation",
    year: "2022"
  }
]
</script>