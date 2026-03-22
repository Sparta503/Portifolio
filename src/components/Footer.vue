<template>
  <footer class="bg-gray-900 text-gray-300 py-10 mt-16">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">

        <!-- Brand -->
        <div class="text-center md:text-left">
          <h1 class="text-2xl font-bold text-white">Tkay.dev</h1>
          <p class="text-sm mt-2 text-gray-400">
            Building modern web experiences.
          </p>
        </div>

        <!-- Links -->
        <ul class="flex gap-6 text-sm">
          <li><a href="#about" class="hover:text-white transition">About</a></li>
          <li><a href="#projects" class="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" class="hover:text-white transition">Contact</a></li>
        </ul>

        <!-- Socials -->
        <div class="flex gap-4">
          <a href="#" class="hover:text-white transition">GitHub</a>
          <a href="#" class="hover:text-white transition">LinkedIn</a>
          <a href="#" class="hover:text-white transition">Twitter</a>
        </div>

      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 my-6"></div>

      <!-- Bottom -->
      <div class="text-center text-sm text-gray-500">
        © {{ year }} Tkay. All rights reserved.
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year: number = new Date().getFullYear()
</script>