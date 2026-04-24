<template>
  <section id="about" class="scroll-mt-24 py-24 bg-blue-600">
    
    <div class="max-w-[50vw] mx-auto px-6">
      
      <!-- Card -->
      <div class="bg-white rounded-2xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-x-8 items-start">

        <!-- LEFT: Image -->
        <div class="flex justify-center">
          <div class="bg-white p-4 rounded-xl shadow-inner">
            <img
              :src="tkayLogo"
              alt="Tkay"
              class="rounded-lg object-contain w-[280px] h-[300px] tkay-logo"
            />

            <!-- Socials -->
            <div class="flex justify-center gap-6 mt-6 bg-blue-600 shadow-md py-2 rounded-lg">
              <a href="https://www.facebook.com/TakuInnovations" target="_blank" class="text-white hover:-translate-y-1 hover:scale-110 transition">
                <i class="fa-brands fa-facebook fa-3x"></i>
              </a>
              <a href="https://wa.me/263780488779" target="_blank" class="text-white hover:-translate-y-1 hover:scale-110 transition">
                <i class="fa-brands fa-whatsapp fa-3x"></i>
              </a>
              <a href="https://www.instagram.com/achomunodisa/?hl=en" target="_blank" class="text-white hover:-translate-y-1 hover:scale-110 transition">
                <i class="fa-brands fa-instagram fa-3x"></i>
              </a>
              <a href="https://x.com/chomunodisaa68" target="_blank" class="text-white hover:-translate-y-1 hover:scale-110 transition">
                <i class="fa-brands fa-twitter fa-3x"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT: Content -->
        <div class="mt-4 md:mt-0">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-950 leading-snug">
            A FULL STACK SOFTWARE DEVELOPER
          </h2>

          <p class="mt-4 text-xl leading-relaxed">
            Creative Software Developer with 5+ years of experience building scalable web and mobile applications, focused on clean UI and strong user experience.<br>
            Skilled in Modern Technologies, Cloud Services, Data Pipelines, and Machine Learning to deliver efficient solutions.
          </p>

          <p class="mt-4 text-xl leading-relaxed">
            Thrives in Dynamic Environments and continuously adapts to new Technologies and Industry Trends.<br>
            Committed to applying Best Practices to build high-quality, reliable, and Future-Ready Applications.
          </p>

          <!-- Buttons -->
          <div class="mt-6 flex gap-4">

            <a
              href="#projects"
              class="glow-btn"
            >
              ⬇ My Projects
            </a>

            <a
              href="#"
              class="glow-btn"
            >
              ⬇ Download CV
            </a>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import tkayLogo from "../../assets/tkay.png"
</script>

<style scoped>
.tkay-logo {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tkay-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 🔥 STRONG BUTTON GLOW + LIFT EFFECT */
.glow-btn {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  border: 1px solid #2563eb;
  background: #2563eb;
  color: white;

  padding: 1rem 2rem;
  border-radius: 9999px;

  box-shadow: 0 6px 15px rgba(37, 99, 235, 0.25);

  transition: all 0.25s ease;
}

/* 🚀 STRONG HOVER EFFECT */
.glow-btn:hover {
  transform: translateY(-6px) scale(1.1);

  box-shadow:
    0 15px 35px rgba(37, 99, 235, 0.45),
    0 0 25px rgba(37, 99, 235, 0.35);

  background: #1d4ed8;
}
</style>