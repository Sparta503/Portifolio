<template>
  <section id="skills" class="py-20 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-y-12 md:gap-x-60 items-center justify-between">

      <!-- LEFT SIDE (Text) -->
      <div>
        <h2 class="text-4xl font-bold mb-6">My Skills</h2>

        <p class="text-blue-100 leading-relaxed mb-4">
          I build modern, scalable applications using cutting-edge technologies.
          My focus is on clean architecture, performance, and user experience.
        </p>

        <p class="text-blue-100 leading-relaxed">
          From frontend interfaces to backend systems, I create solutions that are
          efficient, responsive, and production-ready.
        </p>
      </div>

      <!-- RIGHT SIDE (Cards like screenshot) -->
      <div class="grid grid-cols-2 gap-6">

        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition">
          <div class="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            💻
          </div>
          <h3 class="font-semibold mb-2">1. Frontend</h3>
          <p class="text-sm text-gray-600">
            Vue, TypeScript, TailwindCSS for building responsive UI.
          </p>
        </div>

        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition">
          <div class="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            ⚙️
          </div>
          <h3 class="font-semibold mb-2">2. Backend</h3>
          <p class="text-sm text-gray-600">
            Node.js and REST APIs for scalable backend systems.
          </p>
        </div>

        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition">
          <div class="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            🛠️
          </div>
          <h3 class="font-semibold mb-2">3. Tools</h3>
          <p class="text-sm text-gray-600">
            Git, Vite and modern tooling for efficient development.
          </p>
        </div>

        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition">
          <div class="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            🚀
          </div>
          <h3 class="font-semibold mb-2">4. Deployment</h3>
          <p class="text-sm text-gray-600">
            Deploying apps with performance and scalability in mind.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// no logic needed here anymore (UI-focused section)
</script>