<template>
  <section class="relative min-h-[calc(100vh-80px)] flex items-center bg-gray-950 text-white overflow-hidden">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
      <div class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
    </div>

    <div class="relative w-full max-w-6xl mx-auto px-6 py-16">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold tracking-wide text-blue-400">Software Developer</p>

        <h1 class="mt-4 text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span class="text-blue-500">Tkay</span>
        </h1>

        <p class="mt-6 text-lg text-gray-300 leading-relaxed">
          I build modern, scalable web applications with a focus on clean UI, performance, and maintainable code.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href="#projects"
            class="inline-flex items-center justify-center bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            class="inline-flex items-center justify-center border border-white/20 bg-white/5 px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>

        <div class="mt-10 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1">Vue</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1">TypeScript</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1">TailwindCSS</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1">Node.js</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
