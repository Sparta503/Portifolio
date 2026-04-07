<template>
  <section id="education" class="py-20 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Education</h2>

      <!-- EDUCATION LIST -->
      <div id="education-all-posts" class="scroll-mt-28">
        <h3 class="text-2xl font-bold mb-6">All Posts</h3>
        <div class="grid gap-6">
          <article
            v-for="item in education"
            :key="item.school + item.program"
            class="bg-gray-800/60 border border-white/5 rounded-xl p-6 hover:-translate-y-1 hover:bg-gray-800/70 hover:shadow-lg transition-all duration-200"
          >
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h4 class="text-xl font-semibold">{{ item.program }}</h4>
                <p class="text-gray-300">{{ item.school }}</p>
                <p v-if="item.location" class="text-gray-400">{{ item.location }}</p>
              </div>

              <p class="text-sm text-gray-400 sm:text-right">
                {{ item.start }} - {{ item.end }}
              </p>
            </div>

            <p v-if="item.details" class="mt-4 text-gray-300 leading-relaxed">
              {{ item.details }}
            </p>

            <div v-if="item.highlights.length" class="mt-4">
              <ul class="grid gap-2 text-gray-300">
                <li v-for="point in item.highlights" :key="point">
                  • {{ point }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>

      <div class="my-12 h-px bg-white/10"></div>

      <!-- HIGHLIGHTS -->
      <div id="education-categories" class="scroll-mt-28">
        <h3 class="text-2xl font-bold mb-6">Highlights</h3>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <!-- Current News -->
          <div class="bg-gray-800/60 border border-white/5 rounded-xl p-5 hover:bg-gray-800/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center gap-3 mb-3">
              <Newspaper class="w-6 h-6 text-blue-400" />
              <h4 class="font-semibold text-lg">Current Focus</h4>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">
              Currently pursuing Cloud Computing & IoT while building AI systems,
              mobile apps, and scalable backend solutions.
            </p>
          </div>

          <!-- Certifications -->
          <div class="bg-gray-800/60 border border-white/5 rounded-xl p-5 hover:bg-gray-800/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center gap-3 mb-3">
              <Award class="w-6 h-6 text-yellow-400" />
              <h4 class="font-semibold text-lg">Certifications</h4>
            </div>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>• Oracle Cloud Infrastructure (OCI) Foundations</li>
              <li>• DevOps & Cloud Deployment Practices</li>
              <li>• AI & Machine Learning Fundamentals</li>
            </ul>
          </div>

          <!-- Tech Stack -->
          <div class="bg-gray-800/60 border border-white/5 rounded-xl p-5 hover:bg-gray-800/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center gap-3 mb-3">
              <Wrench class="w-6 h-6 text-green-400" />
              <h4 class="font-semibold text-lg">Tech Stack</h4>
            </div>

            <div class="grid grid-cols-2 gap-3 text-sm text-gray-300">

              <div class="flex items-center gap-2">
                <Code class="w-4 h-4 text-blue-300" />
                <span>React / Vue</span>
              </div>

              <div class="flex items-center gap-2">
                <Smartphone class="w-4 h-4 text-pink-300" />
                <span>React Native</span>
              </div>

              <div class="flex items-center gap-2">
                <Server class="w-4 h-4 text-green-300" />
                <span>Node.js</span>
              </div>

              <div class="flex items-center gap-2">
                <Brain class="w-4 h-4 text-purple-300" />
                <span>Python (AI/ML)</span>
              </div>

              <div class="flex items-center gap-2">
                <Database class="w-4 h-4 text-yellow-300" />
                <span>PostgreSQL / MongoDB</span>
              </div>

              <div class="flex items-center gap-2">
                <Github class="w-4 h-4 text-white" />
                <span>GitHub</span>
              </div>

              <div class="flex items-center gap-2">
                <Box class="w-4 h-4 text-blue-400" />
                <span>Docker</span>
              </div>

              <div class="flex items-center gap-2">
                <Cloud class="w-4 h-4 text-cyan-300" />
                <span>AWS / OCI</span>
              </div>

              <div class="flex items-center gap-2">
             <Coffee class="w-4 h-4 text-orange-400" />
             <span>Java</span>
               </div>

             <div class="flex items-center gap-2">
            <Layers class="w-4 h-4 text-red-400" />
            <span>Angular</span>
              </div>

            <div class="flex items-center gap-2">
             <AppWindow class="w-4 h-4 text-sky-400" />
              <span>Flutter</span>
           </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Newspaper,
  Award,
  Wrench,
  Code,
  Smartphone,
  Server,
  Brain,
  Database,
  Github,
  Box,
  Cloud
} from 'lucide-vue-next'

type EducationItem = {
  school: string
  program: string
  location?: string
  start: string
  end: string
  details?: string
  highlights: string[]
}

const education: EducationItem[] = [
  {
    school: 'University of Zimbabwe',
    program: 'B.Sc. Cloud Computing And Internet Of Things',
    location: 'Harare, Zimbabwe',
    start: '2023',
    end: '2026',
    details:
      'Focused on cloud systems, IoT, and software development while building real-world AI and mobile solutions.',
    highlights: [
      'Currently pursuing degree',
      'Building AI/ML and fullstack projects',
      'Strong focus on problem solving and system design'
    ]
  }
]
</script>