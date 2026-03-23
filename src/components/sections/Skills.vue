<template>
  <section id="skills" class="py-20 bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Skills</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="bg-gray-800/60 border border-white/5 rounded-xl p-6"
        >
          <h3 class="text-xl font-semibold mb-4">{{ group.title }}</h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.items"
              :key="skill"
              class="text-xs bg-gray-900 px-2 py-1 rounded"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type SkillGroup = {
  title: string
  items: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Vue 3', 'TypeScript', 'TailwindCSS', 'HTML', 'CSS']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'REST APIs']
  },
  {
    title: 'Tools',
    items: ['Git', 'Vite']
  }
]
</script>
