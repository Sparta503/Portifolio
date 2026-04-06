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
          class="grid grid-cols-3 py-6 items-center 
                 transition-all duration-300 ease-out
                 hover:bg-white/10 hover:-translate-y-1 hover:scale-[1.01] 
                 hover:shadow-lg hover:shadow-black/10 rounded-lg px-4"
        >
          <!-- LEFT -->
          <p class="text-white font-medium transition">
            {{ item.title }}
          </p>

          <!-- CENTER -->
          <p class="text-white/80 text-sm transition">
            {{ item.category }}
          </p>

          <!-- RIGHT -->
          <p class="text-right text-white/80 transition">
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