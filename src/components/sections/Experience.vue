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
              <div
                class="w-full max-w-md bg-white text-gray-800 p-6 rounded-xl shadow-lg
                       transition-all duration-300 ease-out
                       hover:scale-[1.06] hover:shadow-2xl hover:shadow-red-500/80
                       hover:ring-4 hover:ring-red-500/50"
              >
                <h3 class="text-lg font-semibold">{{ item.role }}</h3>
                <p class="text-sm text-gray-500 mb-2">
                  {{ item.company }} • {{ item.start }} - {{ item.end }}
                </p>

                <div v-if="item.tools?.length" class="flex flex-wrap gap-2 mb-3">
                  <span
                    v-for="tool in item.tools"
                    :key="tool"
                    class="bg-black text-white px-3 py-1 rounded-full text-xs"
                  >
                    {{ tool }}
                  </span>
                </div>

                <ul class="text-sm text-gray-600 space-y-1">
                  <li v-for="point in item.highlights" :key="point">
                    • {{ point }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-else></div>

            <!-- CENTER ICON -->
            <div class="flex justify-center">
              <div
                class="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-600
                       transition-transform duration-300 hover:scale-110"
              >
                💼
              </div>
            </div>

            <!-- RIGHT SIDE -->
            <div v-if="index % 2 !== 0" class="flex justify-start pl-8">
              <div
                class="w-full max-w-md bg-white text-gray-800 p-6 rounded-xl shadow-lg
                       transition-all duration-300 ease-out
                       hover:scale-[1.06] hover:shadow-2xl hover:shadow-red-500/80
                       hover:ring-4 hover:ring-red-500/50"
              >
                <h3 class="text-lg font-semibold">{{ item.role }}</h3>
                <p class="text-sm text-gray-500 mb-2">
                  {{ item.company }} • {{ item.start }} - {{ item.end }}
                </p>

                <div v-if="item.tools?.length" class="flex flex-wrap gap-2 mb-3">
                  <span
                    v-for="tool in item.tools"
                    :key="tool"
                    class="bg-black text-white px-3 py-1 rounded-full text-xs"
                  >
                    {{ tool }}
                  </span>
                </div>

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
  tools?: string[]
}

const experience: ExperienceItem[] = [
  {


    company: 'Data Age Solutions',
    role: 'Mobile Developer',
    start: '',
    end: '',
    tools: ['React Native', 'Expo', 'Dart','Django','Framer Motion'],
    highlights: [
  'Built and optimized cross-platform mobile applications using React Native and Expo.',
  'Integrated RESTful APIs and backend services.',
  'Managed source control and collaborative development workflows using Git and GitHub.',
  'Containerized supporting services using Docker.'
]
  },
  {
    company: 'ZB Bank Rusape',
    role: 'AI & Security Engineer',
    start: '2023',
    end: '2024',
    tools: ['Python', 'GitHub', 'AI/ML','Scikit-Learn'],
    highlights: [
      'Developed AI-driven systems to support data-driven decision-making.',
      'Secured app architecture using AES encryption, JWT auth, and HTTPS/TLS.',
      'Used testing and performance checks to ensure efficient and reliable applications.',
      'Worked closely with data teams to improve model performance and reliability.'
    ]
  },
  {
    company: 'Sakiso Digital',
    role: 'Web Developer',
    start: '2024',
    end: '2025',
    tools: ['Next.js', 'Node.js', 'Wordpress','Figma'],
    highlights: [
      'Converted Figma designs into responsive and accessible code, improving user experience.',
      'Collaborated on projects using WordPress for faster website design and development.',
      'Attended workshops to gain insights into user needs and requirements at the root level.',
      'Translated user requirements into scalable web solutions using a modular and maintainable approach.'
    ]
  },
  {
    company: 'Remote Dev',
    role: 'Fullstack Developer',
    start: '2022',
    end: 'Present',
    tools: ['React Native', 'Django', 'Laravel', 'Angular', 'Vue.js','ML'],
    highlights: [
      'Developed and deployed machine learning models to solve complex problems and improve prediction accuracy.',
      'Designed and implemented data pipelines to streamline data processing, transformation, and analysis, including testing and performance checks.'
    ]
  }
]
</script>