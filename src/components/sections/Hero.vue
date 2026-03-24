<template>
  <section
    class="h-[70vh] flex items-center justify-center text-white relative overflow-hidden"
    :style="{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="w-full max-w-6xl px-6 relative z-10 mx-auto">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div class="flex flex-col justify-center md:max-w-xl">
          <p class="text-sm md:text-base text-white/80 tracking-wide hero-anim hero-anim-1">
            Hi there! <span class="mx-2">👋</span> I’m Tkay
          </p>

          <h1 class="mt-4 leading-none hero-anim hero-anim-2">
            <span class="block text-5xl md:text-7xl font-extrabold tracking-tight">CREATIVE</span>
            <span class="block text-5xl md:text-7xl font-semibold italic tracking-tight">DESIGNER</span>
          </h1>

          <div class="mt-5 flex items-center gap-3 text-xs md:text-sm text-white/70 hero-anim hero-anim-3">
            <span class="h-1.5 w-1.5 rounded-full bg-white/50"></span>
            <span>BASED IN SOUTH AFRICA</span>
          </div>

          <p class="mt-6 text-base md:text-lg text-white/75 max-w-xl hero-anim hero-anim-4">
            I build modern, scalable web applications with clean UI and a strong focus on user experience.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-4 hero-anim hero-anim-5">
            <a href="#projects" class="bg-white/10 backdrop-blur px-6 py-3 rounded-lg border border-white/15 hover:bg-white/15 transition">
              View My Works
            </a>
            <a href="#contact" class="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>

        <div class="hidden md:flex justify-end hero-anim hero-anim-6">
          <img :src="profileImg" alt="Profile" class="w-full max-w-xl max-h-96 h-auto object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroBg from '../../assets/Heroo.png'
import profileImg from '../../assets/pro.jpeg'
</script>

<style scoped>
.hero-anim {
  opacity: 0;
  transform: translateY(14px);
  animation: heroFadeUp 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-anim-1 {
  animation-delay: 80ms;
}

.hero-anim-2 {
  animation-delay: 170ms;
}

.hero-anim-3 {
  animation-delay: 260ms;
}

.hero-anim-4 {
  animation-delay: 350ms;
}

.hero-anim-5 {
  animation-delay: 440ms;
}

.hero-anim-6 {
  animation-delay: 520ms;
}

@keyframes heroFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-anim {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>