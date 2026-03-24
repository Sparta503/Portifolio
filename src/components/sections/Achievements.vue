<template>
  <section id="achievements" class="py-20 bg-gray-950 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Achievements</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Award Winner</h3>
          <p class="text-gray-400 mb-4">Top 10 best student in my batch</p>
        </div>

        <div class="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Technical Skills</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs bg-gray-800 px-2 py-1 rounded">Vue</span>
            <span class="text-xs bg-gray-800 px-2 py-1 rounded">TypeScript</span>
            <span class="text-xs bg-gray-800 px-2 py-1 rounded">TailwindCSS</span>
            <span class="text-xs bg-gray-800 px-2 py-1 rounded">Node.js</span>
          </div>
        </div>

        <div class="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Projects</h3>
          <p class="text-gray-400 mb-4">I have worked on several projects for clients and universities</p>

          <a href="#projects" class="text-blue-500 hover:underline">
            View Projects →
          </a>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Add any logic for achievements if needed
</script>