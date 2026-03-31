<template>
  <section id="projects" class="py-20 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Title -->
      <h2 class="text-4xl font-bold text-center mb-4">Portfolio</h2>
      <p class="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
        Here's a selection of my recent work, showcasing my skills in creating
        user-centric and visually appealing interfaces.
      </p>

      <!-- GRID -->
      <div class="grid gap-12 grid-cols-1 lg:grid-cols-3">

        <div 
          v-for="project in projects" 
          :key="project.title"
          class="shadow-lg hover:-translate-y-4 hover:shadow-2xl transition bg-white/0"
        >
          
          <!-- IMAGE -->
          <div class="relative h-48">
            <img 
              :src="project.image" 
              alt="project"
              class="absolute bottom-0 left-0 w-full h-full object-cover"
            />
          </div>

          <!-- CONTENT -->
          <div class="p-6 flex flex-col flex-1 bg-white text-gray-800">
            
            <p class="text-sm text-gray-400 uppercase mb-2">
              UI-UX DESIGN
            </p>

            <h3 class="text-2xl font-semibold mb-2 line-clamp-2">
              <span class="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                {{ project.title }}
              </span>
            </h3>

            <p class="text-base text-gray-600 mb-4 line-clamp-4">
              {{ project.description }}
            </p>

            <a 
              :href="project.link"
              class="mt-auto inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-transparent hover:text-blue-500 transition text-white rounded-lg px-4 py-3 shadow-lg shadow-blue-500/50"
            >
              <span class="mr-2">Case Study →</span>
              <span class="bg-blue-500/20 text-blue-500 rounded-full px-1">
                <span class="animate-pulse bg-blue-500/60 rounded-full w-2 h-2"></span>
              </span>
            </a>

          </div>

        </div>

      </div>

      <div class="mt-16 text-center">
        <a href="#contact" class="bg-black hover:bg-gray-900 transition text-white rounded-lg px-4 py-3 shadow-lg shadow-gray-900/50">
          More Projects 
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import img1 from "../../assets/Heroo.png"
import img2 from "../../assets/Heroo.png"
import img3 from "../../assets/Heroo.png"
import img4 from "../../assets/Heroo.png"
import img5 from "../../assets/Heroo.png"
import img6 from "../../assets/Heroo.png"

interface Project {
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  { title: "Project 1", description: "Smooth, responsive interfaces. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia.", image: img1, link: "#" },
  { title: "Project 2", description: "Intuitive dashboards. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia.", image: img2, link: "#" },
  { title: "Project 3", description: "Modern admin panels. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia.", image: img3, link: "#" },
  { title: "Project 4", description: "Scalable systems. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia.", image: img4, link: "#" },
  { title: "Project 5", description: "Extra large visual project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia.", image: img5, link: "#" },
  { title: "Project 6", description: "Creative UI experiments. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia.", image: img6, link: "#" }
]
</script>