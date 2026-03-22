<template>
  <nav class="grid grid-cols-[auto_1fr_auto] items-center px-6 py-4 bg-blue-600 text-white shadow">
    <div class="flex items-center">
      <a href="/" class="inline-flex items-center bg-transparent hover:bg-transparent">
        <img :src="tkayLogo" alt="Tkay" class="h-12 w-24 rounded-md object-contain bg-transparent transition-transform duration-200 hover:-translate-y-0.5" />
      </a>
    </div>

    <ul class="flex justify-center gap-6">
      <li><a class="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200" href="/">Home</a></li>
      <li><a class="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200" href="#about">About</a></li>
      <li><a class="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200" href="#projects">Projects</a></li>
      <li><a class="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200" href="#skills">Skills</a></li>
      <li><a class="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200" href="#experience">Experience</a></li>
      <li><a class="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200" href="#education">Education</a></li>
      <li><a class="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200" href="#achievements">Achievements</a></li>
      <li><a class="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200" href="#contact">Contact</a></li>
    </ul>

    <div class="flex items-center gap-3 ml-10 mr-40">
      <div class="hidden sm:flex items-center gap-2 border border-white/30 rounded-lg px-3 py-2 bg-white/10">
        <svg class="h-4 w-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          class="w-40 bg-transparent outline-none text-sm placeholder:text-white/70"
        />
      </div>

      <a href="tel:+0000000000" class="p-2 rounded-lg hover:bg-white/10" aria-label="Phone">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import tkayLogo from '../assets/tkay.png'
</script>