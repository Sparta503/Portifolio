<template>
  <section id="education" class="py-20 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Education</h2>

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

              <p class="text-sm text-gray-400 sm:text-right">{{ item.start }} - {{ item.end }}</p>
            </div>

            <p v-if="item.details" class="mt-4 text-gray-300 leading-relaxed">{{ item.details }}</p>

            <div v-if="item.highlights.length" class="mt-4">
              <ul class="grid gap-2 text-gray-300">
                <li v-for="point in item.highlights" :key="point" class="leading-relaxed">
                  {{ point }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>

      <div class="my-12 h-px bg-white/10"></div>

      <div id="education-categories" class="scroll-mt-28">
        <h3 class="text-2xl font-bold mb-6">Categories</h3>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a href="#education-all-posts" class="bg-gray-800/60 border border-white/5 rounded-xl px-5 py-4 hover:bg-gray-800/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">Education</a>
          <a href="#education-all-posts" class="bg-gray-800/60 border border-white/5 rounded-xl px-5 py-4 hover:bg-gray-800/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">Certifications</a>
          <a href="#education-all-posts" class="bg-gray-800/60 border border-white/5 rounded-xl px-5 py-4 hover:bg-gray-800/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">Projects</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
    details: 'Delving deep into the realm of software engineering, web development, and Mobile Development to unlock the power of innovative solutions.',
    highlights: ['Currently pursuing degree', 'Building multiple ML and AI projects and Problem solving']
  }
]
</script>
