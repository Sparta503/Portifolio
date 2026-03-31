<template>
  <footer class="bg-gray-900 text-gray-300 py-10">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">

        <!-- Brand -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl font-bold text-white">Tkay.dev</h1>
          <p class="text-lg mt-2 text-gray-400">
            Building modern web experiences.
          </p>
        </div>

        <!-- Contact -->
        <div class="text-center md:text-left text-lg text-gray-200">
          <p class="font-semibold mb-4">Contact</p>
          <div class="grid gap-2">
            <p class="text-gray-400">Harare, Zimbabwe</p>
            <a href="mailto:Chomunodisaa68@gmail.com" class="inline-flex items-center justify-center md:justify-start text-gray-300 hover:text-white hover:-translate-y-0.5 transition-all duration-200">Chomunodisaa68@gmail.com</a>
            <a href="tel:+263780488779" class="inline-flex items-center justify-center md:justify-start text-gray-300 hover:text-white hover:-translate-y-0.5 transition-all duration-200">+263 780 48 8779</a>
          </div>
        </div>

        <!-- Links -->
        <ul class="flex gap-8 text-lg">
          <li><a href="#about" class="inline-flex hover:text-white hover:-translate-y-0.5 transition-all duration-200">About</a></li>
          <li><a href="#projects" class="inline-flex hover:text-white hover:-translate-y-0.5 transition-all duration-200">Projects</a></li>
          <li><a href="#contact" class="inline-flex hover:text-white hover:-translate-y-0.5 transition-all duration-200">Contact</a></li>
        </ul>

        <!-- Socials -->
        <div class="flex gap-6 text-lg">
          <a href="#" class="inline-flex hover:text-white hover:-translate-y-0.5 transition-all duration-200">GitHub</a>
          <a href="#" class="inline-flex hover:text-white hover:-translate-y-0.5 transition-all duration-200">LinkedIn</a>
          <a href="#" class="inline-flex hover:text-white hover:-translate-y-0.5 transition-all duration-200">Twitter</a>
        </div>

      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 my-6"></div>

      <!-- Bottom -->
      <div class="text-center text-xl font-medium text-gray-500">
        &copy; {{ year }} Tkay. All rights reserved.
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year: number = new Date().getFullYear()
</script>