<template>
  <section id="experience" class="py-20 bg-gray-950 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Experience</h2>

      <div class="grid gap-6">
        <article
          v-for="item in experience"
          :key="item.company + item.role"
          class="bg-gray-900 border border-white/5 rounded-xl p-6"
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 class="text-xl font-semibold">{{ item.role }}</h3>
              <p class="text-gray-400">{{ item.company }}<span v-if="item.location"> · {{ item.location }}</span></p>
            </div>

            <p class="text-sm text-gray-400 sm:text-right">{{ item.start }} - {{ item.end }}</p>
          </div>

          <ul class="mt-4 grid gap-2 text-gray-300">
            <li v-for="point in item.highlights" :key="point" class="leading-relaxed">
              {{ point }}
            </li>
          </ul>

          <div v-if="item.tech.length" class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tech in item.tech"
              :key="tech"
              class="text-xs bg-gray-800 px-2 py-1 rounded"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ExperienceItem = {
  company: string
  role: string
  location?: string
  start: string
  end: string
  highlights: string[]
  tech: string[]
}

const experience: ExperienceItem[] = [
  {
    company: 'Your Company',
    role: 'Frontend Developer',
    location: 'Remote',
    start: '2024',
    end: 'Present',
    highlights: [
      'Built responsive UI components and reusable layouts in Vue 3.',
      'Improved performance and accessibility across key pages.',
      'Collaborated with design and backend to deliver features end-to-end.'
    ],
    tech: ['Vue', 'TypeScript', 'TailwindCSS']
  }
]
</script>