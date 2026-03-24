<template>
  <section
    class="h-[90vh] flex items-center justify-center text-white relative overflow-visible"
    :style="{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div class="w-full max-w-7xl px-6 relative z-10 mx-auto">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        
        <!-- LEFT TEXT -->
        <div class="flex flex-col justify-center md:max-w-xl">
          <p class="text-sm md:text-base text-white/80 tracking-wide hero-anim hero-anim-1">
            Hi there! <span class="mx-2">👋</span> I’m Tkay
          </p>

          <h1 class="mt-4 leading-none hero-anim hero-anim-2">
            <span class="block text-5xl md:text-7xl font-extrabold tracking-tight">
              CREATIVE
            </span>
            <span class="block text-5xl md:text-7xl font-semibold italic tracking-tight">
              DESIGNER
            </span>
          </h1>

          <div class="mt-5 flex items-center gap-3 text-xs md:text-sm text-white/70 hero-anim hero-anim-3">
            <span class="h-1.5 w-1.5 rounded-full bg-white/50"></span>
            <span>BASED IN SOUTH AFRICA</span>
          </div>

          <p class="mt-6 text-base md:text-lg text-white/75 max-w-xl hero-anim hero-anim-4">
            I build modern, scalable web applications with clean UI and a strong focus on user experience.
          </p>

          <!-- BUTTONS -->
          <div class="mt-8 flex flex-wrap items-center gap-4 hero-anim hero-anim-5">
            <a href="#projects"
              class="px-10 py-4 rounded-full bg-blue-600 text-white 
              transition-all duration-300 ease-out
              hover:bg-blue-700 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/40">
              View My Works
            </a>

            <div class="h-7 w-7"></div> <!-- ADDED SPACING -->

            <a href="#contact"
              class="px-10 py-4 rounded-full bg-blue-600 text-white 
              transition-all duration-300 ease-out
              hover:bg-blue-700 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/40">
              Contact Me
            </a>
          </div>
        </div>

        <!-- RIGHT SIDE (EMPTY GRID SPACE FOR BALANCE) -->
        <div></div>
      </div>
    </div>

    <!-- PROFILE IMAGE -->
    <div class="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 hero-anim hero-anim-6">
      <img
        :src="profileImg"
        alt="Profile"
        class="w-[500px] md:w-[600px] object-contain drop-shadow-2xl"
      />
    </div>

    <!-- SOCIAL ICONS -->
    <div class="hidden md:flex flex-col items-center gap-10 absolute top-1/2 right-20 -translate-y-1/2 z-30">

      <div class="w-px h-16 bg-white/30"></div>

      <a href="#" class="social-icon">
        <i class="fab fa-instagram fa-3x"></i>
      </a>

      <a href="#" class="social-icon">
        <i class="fab fa-twitter fa-3x"></i>
      </a>

      <a href="#" class="social-icon">
        <i class="fab fa-facebook fa-3x"></i>
      </a>

      <a href="#" class="social-icon">
        <i class="fab fa-whatsapp fa-3x"></i>
      </a>

      <a href="#" class="social-icon">
        <i class="fas fa-envelope fa-3x"></i>
      </a>

      <a href="#" class="social-icon">
        <i class="fab fa-linkedin fa-3x"></i>
      </a>

      <a href="#" class="social-icon">
        <i class="fab fa-github fa-3x"></i>
      </a>

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

/* SOCIAL ICONS */
.social-icon {
  font-size: 18px;
  color: white;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.social-icon:hover {
  opacity: 1;
  transform: translateY(-4px) scale(1.15);
  color: #3b82f6;
}

@media (prefers-reduced-motion: reduce) {
  .hero-anim {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>