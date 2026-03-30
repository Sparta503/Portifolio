<template>
  <section id="experience" class="py-24 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Title -->
      <h2 class="text-4xl font-bold text-center mb-16">
        Work Experience
      </h2>

      <!-- Timeline -->
      <div class="relative">

        <!-- Vertical Line -->
        <div class="absolute left-1/2 top-0 h-full w-[2px] bg-white/30 -translate-x-1/2"></div>

        <div class="space-y-16">

          <div
            v-for="(item, index) in experience"
            :key="item.company + item.role"
            class="grid grid-cols-3 items-center"
          >

            <!-- LEFT SIDE -->
            <div v-if="index % 2 === 0" class="flex justify-end pr-8">
              <div class="w-full max-w-md bg-white text-gray-800 p-6 rounded-xl shadow-xl">
                <h3 class="text-lg font-semibold">{{ item.role }}</h3>
                <p class="text-sm text-gray-500 mb-2">
                  {{ item.company }} • {{ item.start }} - {{ item.end }}
                </p>

                <ul class="text-sm text-gray-600 space-y-1">
                  <li v-for="point in item.highlights" :key="point">
                    • {{ point }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-else></div>

            <!-- CENTER DOT -->
            <div class="flex justify-center">
              <div class="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-600">
                💼
              </div>
            </div>

            <!-- RIGHT SIDE -->
            <div v-if="index % 2 !== 0" class="flex justify-start pl-8">
              <div class="w-full max-w-md bg-white text-gray-800 p-6 rounded-xl shadow-xl">
                <h3 class="text-lg font-semibold">{{ item.role }}</h3>
                <p class="text-sm text-gray-500 mb-2">
                  {{ item.company }} • {{ item.start }} - {{ item.end }}
                </p>

                <ul class="text-sm text-gray-600 space-y-1">
                  <li v-for="point in item.highlights" :key="point">
                    • {{ point }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-else></div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type ExperienceItem = {
  company: string
  role: string
  start: string
  end: string
  highlights: string[]
}

const experience: ExperienceItem[] = [
  {
    company: 'Tech Company',
    role: 'React.js Developer',
    start: '2023',
    end: 'Present',
    highlights: [
      'Built scalable front-end applications.',
      'Collaborated with backend teams.',
      'Improved UI performance and UX.'
    ]
  },
  {
    company: 'AI Lab',
    role: 'AI & Security Engineer',
    start: '2022',
    end: '2023',
    highlights: [
      'Worked on AI-driven systems.',
      'Implemented security best practices.',
      'Collaborated with data teams.'
    ]
  },
  {
    company: 'Startup Inc',
    role: 'Web Developer',
    start: '2021',
    end: '2022',
    highlights: [
      'Developed responsive websites.',
      'Improved SEO and performance.',
      'Maintained production apps.'
    ]
  },
  {
    company: 'Cloud Tech',
    role: 'Cloud & IoT Engineer',
    start: '2020',
    end: '2021',
    highlights: [
      'Built cloud-based systems.',
      'Worked with IoT integrations.',
      'Improved scalability.'
    ]
  }
]
</script>