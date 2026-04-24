<template>
  <footer class="bg-gray-900 text-gray-300 py-10">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">

        <!-- Brand -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl font-bold text-white">Tkay.dev</h1>
          <p class="text-lg mt-2 text-gray-400">
           The Home of Production and Massive Hits.
          </p>
        </div>

        <!-- Contact -->
        <div class="text-center md:text-left text-lg text-gray-200">
          <p class="font-semibold mb-4">Contact</p>
          <div class="grid gap-2">
            <a href="tel:+263780488779"
              class="inline-flex items-center justify-center md:justify-start text-gray-300 hover:text-white hover:-translate-y-0.5 transition-all duration-200">
              +263 780 488779
            </a>
          </div>
        </div>

        <!-- Location -->
        <div class="text-center md:text-left text-lg text-gray-200">
          <p class="font-semibold mb-4">Location</p>
          <div class="grid gap-2">
            <p class="text-gray-400">Harare, Zimbabwe</p>
          </div>
        </div>

        <!-- LINKS -->
        <ul class="flex gap-6 text-lg">
          <li><a href="#about" class="nav-pill">About</a></li>
          <li><a href="#projects" class="nav-pill">Projects</a></li>
          <li><a href="#contact" class="nav-pill">Contact</a></li>
        </ul>

        <!-- SOCIALS (UPDATED TO MATCH NAV STYLE) -->
        <div class="flex items-center gap-4">

          <a href="https://wa.me/263780488779" target="_blank" class="icon-pill" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>

          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" class="icon-pill" aria-label="Email">
            <i class="fas fa-envelope"></i>
          </a>

          <a href="https://www.linkedin.com/in/abel-chomunodisa-765280270/" target="_blank" class="icon-pill" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>

          <a href="https://github.com/Sparta503" target="_blank" class="icon-pill" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>

        </div>

      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 my-6"></div>

      <!-- Bottom -->
      <div class="text-center text-xl font-medium text-gray-500">
        &copy; {{ year }} @ Abel. All rights reserved. Built with ❤️Vue
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year: number = new Date().getFullYear()
</script>

<style scoped>
/* 🔵 NAV PILLS */
.nav-pill {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 9999px;

  background: rgba(59, 130, 246, 0.15);
  color: #dbeafe;

  border: 1px solid rgba(59, 130, 246, 0.25);

  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

.nav-pill:hover {
  background: rgba(59, 130, 246, 0.35);
  color: white;
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 0 18px rgba(59, 130, 246, 0.6);
}

.nav-pill::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
  transition: 0.5s;
}

.nav-pill:hover::before {
  left: 100%;
}

/* 🔵 ICON PILLS (NEW MATCHING STYLE) */
.icon-pill {
  width: 44px;
  height: 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 9999px;

  background: rgba(59, 130, 246, 0.15);
  color: #dbeafe;

  border: 1px solid rgba(59, 130, 246, 0.25);

  font-size: 18px;

  transition: all 0.35s ease;

  position: relative;
  overflow: hidden;
}

/* 🚀 ICON HOVER = SAME ENERGY AS LINKS */
.icon-pill:hover {
  background: rgba(59, 130, 246, 0.4);
  color: white;

  transform: translateY(-6px) scale(1.15);

  box-shadow:
    0 0 20px rgba(59, 130, 246, 0.7),
    0 0 40px rgba(59, 130, 246, 0.25);
}

/* ✨ LIGHT SWEEP EFFECT */
.icon-pill::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: 0.5s;
}

.icon-pill:hover::before {
  left: 100%;
}
</style>