<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 py-4 bg-blue-600 text-white shadow"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <a href="#" class="inline-flex items-center">
        <img
          :src="tkayLogo"
          alt="Tkay"
          class="h-12 w-24 rounded-md object-contain transition-transform duration-200 hover:-translate-y-0.5"
        />
      </a>
    </div>

    <!-- Navigation Links -->
    <ul class="hidden lg:flex justify-center gap-6">
      <li>
        <a href="#" class="nav-link">Home</a>
      </li>
      <li>
        <a href="#about" class="nav-link">About</a>
      </li>
      <li>
        <a href="#projects" class="nav-link">Projects</a>
      </li>
      <li>
        <a href="#skills" class="nav-link">Skills</a>
      </li>
      <li>
        <a href="#experience" class="nav-link">Experience</a>
      </li>
      <li class="relative group">
        <a href="#education" class="nav-link inline-flex items-center gap-2" aria-haspopup="menu" aria-expanded="false">
          Blog
          <svg class="h-4 w-4 opacity-80 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>

        <div class="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 z-50">
          <ul class="min-w-48 rounded-xl border border-black/10 bg-white text-gray-900 shadow-lg overflow-hidden" role="menu">
            <li>
              <a href="#education-all-posts" class="block px-4 py-3 text-sm hover:bg-gray-100" role="menuitem">All Posts</a>
            </li>
            <li>
              <a href="#education-categories" class="block px-4 py-3 text-sm hover:bg-gray-100" role="menuitem">Categories</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#pricing" class="nav-link">Pricing</a>
      </li>
      <li>
        <a href="#contact" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- Right Side -->
    <div class="flex items-center justify-end gap-2 sm:gap-3 ml-4 sm:ml-10 mr-0 sm:mr-10">
      <!-- Mobile Menu Toggle -->
      <button
        type="button"
        class="lg:hidden p-2 rounded-lg hover:bg-white/10"
        aria-label="Open menu"
        :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg v-if="!isMobileMenuOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      
      <!-- Search -->
      <div class="hidden sm:flex items-center gap-2 border border-white/30 rounded-lg px-3 py-2 bg-white/10">
        <svg class="h-4 w-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          class="w-40 bg-transparent outline-none text-sm placeholder:text-white/70"
        />
      </div>

      <!-- Phone -->
      <a href="tel:+263780488779" class="p-2 rounded-lg hover:bg-white/10" aria-label="Phone">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden absolute left-0 right-0 top-full bg-blue-600/95 backdrop-blur-md border-t border-white/10"
    >
      <div class="px-4 sm:px-6 py-4">
        <div class="grid gap-2">
          <a href="#" class="mobile-link" @click="isMobileMenuOpen = false">Home</a>
          <a href="#about" class="mobile-link" @click="isMobileMenuOpen = false">About</a>
          <a href="#projects" class="mobile-link" @click="isMobileMenuOpen = false">Projects</a>
          <a href="#skills" class="mobile-link" @click="isMobileMenuOpen = false">Skills</a>
          <a href="#experience" class="mobile-link" @click="isMobileMenuOpen = false">Experience</a>
          <a href="#education" class="mobile-link" @click="isMobileMenuOpen = false">Education</a>
          <a href="#pricing" class="mobile-link" @click="isMobileMenuOpen = false">Pricing</a>
          <a href="#contact" class="mobile-link" @click="isMobileMenuOpen = false">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"
import tkayLogo from "../assets/tkay.png"

const isMobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply inline-flex items-center px-3 py-2 rounded-lg font-bold text-base text-white/90 
         hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] 
         hover:-translate-y-0.5 transition-all duration-200;
}

.mobile-link {
  @apply w-full inline-flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-white/95
         hover:bg-white/10 transition-all duration-200;
}
</style>