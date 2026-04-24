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
            class="edu-card bg-gray-800/60 border border-white/5 rounded-xl p-6 hover:scale-[1.03] hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-red-500/50 hover:ring-4 hover:ring-red-500/30 transition-all duration-500 ease-out"
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

          <!-- Dev Mindset -->
          <div class="edu-card bg-gray-800/60 border border-white/5 rounded-xl p-5 hover:bg-gray-800/80 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/50 hover:ring-4 hover:ring-red-500/30 transition-all duration-500 ease-out">
            <div class="flex items-center gap-3 mb-3">
              <Newspaper class="w-6 h-6 text-blue-400" />
              <h4 class="font-semibold text-lg">Dev MindSet</h4>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">
              I focus on more than code and design,
              I build solutions that solve real-world problems.
            </p>
          </div>

          <!-- Certifications -->
          <div class="edu-card bg-gray-800/60 border border-white/5 rounded-xl p-5 hover:bg-gray-800/80 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/50 hover:ring-4 hover:ring-red-500/30 transition-all duration-500 ease-out">
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
          <div class="edu-card bg-gray-800/60 border border-white/5 rounded-xl p-5 hover:bg-gray-800/80 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/50 hover:ring-4 hover:ring-red-500/30 transition-all duration-500 ease-out">
            <div class="flex items-center gap-3 mb-3">
              <Wrench class="w-6 h-6 text-green-400" />
              <h4 class="font-semibold text-lg">Tech Stack</h4>
            </div>

            <!-- PILL TAGS -->
            <div class="flex flex-wrap gap-2 text-sm text-gray-200">
              <span class="tech-pill">Vue</span>
              <span class="tech-pill">React Native</span>
              <span class="tech-pill">Node.js</span>
              <span class="tech-pill">Python (AI/ML)</span>
              <span class="tech-pill">Laravel</span>
              <span class="tech-pill">GitHub</span>
              <span class="tech-pill">Docker</span>
              <span class="tech-pill">Django</span>
              <span class="tech-pill">Java</span>
              <span class="tech-pill">Angular</span>
              <span class="tech-pill">Flutter</span>
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
  Wrench
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
    end: '2027',
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

<style scoped>
.edu-card {
  transform-style: preserve-3d;
  transform: perspective(1200px) translateY(0px) rotateX(2deg);

  box-shadow:
    0 10px 25px rgba(0,0,0,0.35),
    inset 0 1px 0 rgba(255,255,255,0.05);

  backdrop-filter: blur(10px);

  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.6s ease;
}

/* 🌊 softer premium hover (same vibe as pricing) */
.edu-card:hover {
  transform:
    perspective(1200px)
    translateY(-12px)
    scale(1.04);

  box-shadow:
    0 25px 60px rgba(0,0,0,0.55),
    0 0 25px rgba(239, 68, 68, 0.35),
    0 0 20px rgba(59,130,246,0.25),
    inset 0 1px 0 rgba(255,255,255,0.08);
}

/* ✨ TECH PILLS (soft premium version) */
.tech-pill {
  padding: 6px 12px;
  border-radius: 9999px;

  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);

  backdrop-filter: blur(6px);

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tech-pill:hover {
  transform: translateY(-4px) scale(1.08);

  background: rgba(59, 130, 246, 0.35);
  box-shadow:
    0 10px 25px rgba(0,0,0,0.25),
    0 0 15px rgba(59,130,246,0.6);
}
</style>