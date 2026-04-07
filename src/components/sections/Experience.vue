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
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20
                       hover:scale-[1.02]"
              >
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
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20
                       hover:scale-[1.02]"
              >
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
    company: 'Remote Dev',
    role: 'Fullstack Mobile Application Developer',
    start: '2022',
    end: 'Present',
    highlights: [
      'Built and maintained responsive mobile apps using React Native and modern frameworks.',
      'Collaborated using GitHub for version control, code reviews, and team workflows.',
      'Worked with cloud platforms (AWS/OCI) and tools like Docker Compose to streamline app deployment.',
      'Focused on clean, user-friendly UI to improve overall user experience.'
    ]
  },
  {
    company: 'Zb Bank Rusape',
    role: 'AI & Security Engineer',
    start: '2023',
    end: '2024',
    highlights: [
      'Developed AI-driven systems to support data-driven decision-making.',
      'Implemented secure application architectures and enforced best security practices.',
      'Used GitHub for structured collaboration and version control across teams.',
      'Worked closely with data teams to improve model performance and reliability.'
    ]
  },
  {
    company: 'Sakiso Digital',
    role: 'Web Developer',
    start: '2024',
    end: '2025',
    highlights: [
      'Improved website performance, SEO, and loading speed for better user engagement.',
      'Collaborated on projects using GitHub for efficient development workflows.',
      'Deployed web applications using Docker and managed hosting environments.',
      'Translated user requirements into scalable and maintainable web solutions.'
    ]
  },
  {
    company: 'Data Age Solutions',
    role: 'Mobile Developer',
    start: '',
    end: '',
    highlights: [
      'Developed mobile applications with a focus on performance and usability.',
      'Integrated APIs and backend services for seamless functionality.',
      'Used GitHub for version control and collaboration with development teams.',
      'Containerised supporting services using Docker to ensure consistent environments.'
    ]
  }
]
</script>