<template>
  <section id="projects" class="py-20 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6">

      <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition"
        >
          <h3 class="text-xl font-semibold mb-2">
            {{ project.title }}
          </h3>

          <p class="text-gray-600 mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
            >
              {{ tech }}
            </span>
          </div>

          <a 
            :href="project.link" 
            class="text-blue-600 font-medium hover:underline"
          >
            View Project →
          </a>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

const projects: Project[] = [
  {
    title: "Hospital System",
    description: "A full-stack hospital management system",
    tech: ["Vue", "Node.js"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal branding portfolio",
    tech: ["Vue", "Tailwind"],
    link: "#"
  }
]
</script>