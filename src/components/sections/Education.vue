<template>
  <section id="education" class="py-20 bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Education</h2>

      <div class="grid gap-6">
        <article
          v-for="item in education"
          :key="item.school + item.program"
          class="bg-gray-800/60 border border-white/5 rounded-xl p-6"
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 class="text-xl font-semibold">{{ item.program }}</h3>
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
    school: 'Your University',
    program: 'B.Sc. Computer Science',
    location: 'Your City',
    start: '2020',
    end: '2024',
    details: 'Focused on software engineering, web development, and data structures.',
    highlights: ['Graduated with strong academic performance', 'Built multiple web projects']
  }
]
</script>
