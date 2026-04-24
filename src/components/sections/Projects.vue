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
          class="project-card shadow-lg bg-white"
        >
          
          <!-- IMAGE -->
          <div class="relative h-48">
            <img 
              :src="project.image" 
              alt="project"
              class="absolute bottom-0 left-0 w-full h-full object-cover"
            />

            <div class="absolute inset-x-0 -bottom-4 flex justify-center">
              <div class="flex flex-wrap justify-center gap-2 px-4">
                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Stack →</span>
                <span
                  v-for="lang in project.languages"
                  :key="lang"
                  class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs"
                >
                  {{ lang }}
                </span>
              </div>
            </div>
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
              class="case-btn mt-auto inline-flex items-center justify-center gap-2"
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
        <a href="#contact" class="more-btn">
          More Projects
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import img1 from "@/assets/Hospital mobile.png"
import img2 from "@/assets/facebook markting.png"
import img3 from "@/assets/Hospital Mnagement.png"
import img4 from "@/assets/DeviceTracker.png"
import img5 from "@/assets/Hospital advertisement.png"
import img6 from "@/assets/School management.png"

interface Project {
  title: string
  description: string
  image: string
  link: string
  languages: string[]
}

const projects: Project[] = [
  {
    title: "Mobile Services Hospital Application",
    description: "A mobile app designed to streamline hospital services, including patient management, appointments, and real-time communication.",
    image: img1,
    link: "https://github.com/Sparta503/hospital-mobile-app",
    languages: ["React Native", "Expo", "Firebase"]
  },
  {
    title: "Peer-to-Peer Web Application",
    description: "A decentralized web platform enabling secure peer-to-peer interactions and seamless data exchange between users.",
    image: img2,
    link: "https://github.com/Sparta503/p2p-web-app",
    languages: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    title: "Role-Based Hospital Management System",
    description: "A full-stack system with role-based access control for managing hospital operations, staff, and patient workflows.",
    image: img3,
    link: "https://github.com/Sparta503/hospital-management-system",
    languages: ["React", "Java", "MongoDB"]
  },
  {
    title: "Device Tracking Web & Mobile Application",
    description: "A cross-platform solution for tracking devices in real-time with location monitoring and reporting features.",
    image: img4,
    link: "https://github.com/Sparta503/device-tracking-app",
    languages: ["React", "React Native", "Firebase"]
  },
  {
    title: "Brand Advertisement Web Application",
    description: "A dynamic platform for managing and showcasing brand campaigns with engaging UI and analytics support.",
    image: img5,
    link: "https://advertisement-hub-git-main-sparta503s-projects.vercel.app/",
    languages: ["Angular", "Tailwind CSS"]
  },
  {
    title: "School Management System",
    description: "A comprehensive system for handling student records, academic processes, and administrative tasks efficiently.",
    image: img6,
    link: "https://github.com/Sparta503/school-management-system",
    languages: ["React", "Tailwind CSS", "Node.js"]
  }
]
</script>

<style scoped>
/* 🌊 PREMIUM PROJECT CARD (soft pricing-style hover) */
.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;

  transform: perspective(1200px) translateY(0px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

/* 🚀 soft lift + glow */
.project-card:hover {
  transform: translateY(-12px) scale(1.05);

  box-shadow:
    0 25px 60px rgba(0,0,0,0.45),
    0 0 25px rgba(59,130,246,0.35);
}

/* 🔘 case study button */
.case-btn {
  padding: 12px 16px;
  border-radius: 10px;
  background: #3b82f6;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;
}

/* glow hover */
.case-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 0 20px rgba(59,130,246,0.6),
    0 10px 25px rgba(0,0,0,0.25);
  background: #2563eb;
}

/* 🔵 bottom button */
.more-btn {
  background: black;
  padding: 12px 18px;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: inline-block;
}

/* glow hover */
.more-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 0 25px rgba(0,0,0,0.6);
}
</style>