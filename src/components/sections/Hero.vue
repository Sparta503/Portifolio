<template>
  <section
    class="h-[90vh] flex items-center justify-center text-white relative overflow-hidden"
    :style="{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- LEFT EMAIL -->
    <div class="hidden md:flex flex-col items-center absolute left-6 top-1/2 -translate-y-1/2 z-30 left-side">
      <div class="rotate-[-90deg] text-lg md:text-xl font-semibold tracking-[0.2em] text-white/80 hover:text-white transition">
        Chomunodisaa68@gmail.com
      </div>
    </div>

    <!-- CONTENT -->
    <div class="w-full max-w-7xl px-6 relative z-10 mx-auto">
      <div class="grid md:grid-cols-2 gap-10 items-center">

        <!-- LEFT TEXT -->
        <div class="flex flex-col justify-center md:max-w-xl">
          <p class="text-lg md:text-xl text-white/80 tracking-widest hero-anim hero-anim-1">
            Hi there! <span class="wave-hand text-3xl">👋</span> I’m ABEL CHOMUNODISA
          </p>

          <h1 class="mt-4 leading-none hero-anim hero-anim-2">
            <span class="block text-5xl md:text-7xl font-extrabold">CREATIVE</span>

            <span class="block text-5xl md:text-7xl italic font-semibold">
              <span class="typing-text"></span><span class="cursor">|</span>
            </span>
          </h1>

          <div class="mt-5 flex items-center gap-3 text-sm text-white/70 hero-anim hero-anim-3">
            <span class="h-1.5 w-1.5 bg-white/50 rounded-full"></span>
            BASED IN AFRICA ZIMBABWE
          </div>

          <!-- 🔮 ONLY CHANGE: GLASS PARAGRAPH -->
          <p class="mt-6 hero-anim hero-anim-4 glass-paragraph">
            I build scalable web and mobile apps with clean UI while leveraging cloud services,
            data pipelines, and machine learning to deliver high-performance solutions.
          </p>

          <!-- BUTTONS (UNCHANGED) -->
          <div class="mt-8 flex gap-4 hero-anim hero-anim-5">
            <a href="#projects"
              class="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 transition">
              View My Works
            </a>

            <a href="#contact"
              class="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 transition">
              Contact Me
            </a>
          </div>
        </div>

        <!-- RIGHT EMPTY -->
        <div></div>
      </div>
    </div>

    <!-- BLENDED IMAGE (UNCHANGED) -->
    <div class="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 hero-anim hero-anim-6">
      <div class="relative profile-wrapper">

        <div class="absolute inset-0 flex justify-center items-end pointer-events-none">
          <div class="w-[520px] h-[520px] bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>

        <div class="absolute inset-0 pointer-events-none cloud-overlay"></div>

        <img
          :src="profileImg"
          alt="Profile"
          class="profile-img w-[500px] md:w-[600px] object-contain"
        />

      </div>
    </div>

    <!-- SOCIAL ICONS (UNCHANGED) -->
    <div class="hidden md:flex flex-col items-center gap-10 absolute top-1/2 right-20 -translate-y-1/2 z-30">
      <div class="w-px h-16 bg-white/30"></div>

      <a href="https://www.instagram.com/achomunodisa/?hl=en" target="_blank" class="social-icon">
        <i class="fab fa-instagram fa-3x"></i>
      </a>

      <a href="https://x.com/chomunodisaa68" target="_blank" class="social-icon">
        <i class="fab fa-twitter fa-3x"></i>
      </a>

      <a href="https://www.facebook.com/TakuInnovations" target="_blank" class="social-icon">
        <i class="fab fa-facebook fa-3x"></i>
      </a>

      <a href="https://wa.me/263780488779" target="_blank" class="social-icon">
        <i class="fab fa-whatsapp fa-3x"></i>
      </a>

      <a href="mailto:takunda@example.com" class="social-icon">
        <i class="fas fa-envelope fa-3x"></i>
      </a>

      <a href="https://www.linkedin.com/in/abel-chomunodisa-765280270/" target="_blank" class="social-icon">
        <i class="fab fa-linkedin fa-3x"></i>
      </a>

      <a href="https://github.com/Sparta503" target="_blank" class="social-icon">
        <i class="fab fa-github fa-3x"></i>
      </a>
    </div>

  </section>
</template>

<script setup lang="ts">
import heroBg from '@/assets/Heroo.png'
import profileImg from '@/assets/pro.jpeg'
import { onMounted } from 'vue'

const text = "MIND SET AND FULL STACK DEVELOPER"

onMounted(() => {
  const el = document.querySelector(".typing-text") as HTMLElement

  let i = 0
  let isDeleting = false

  const typeSpeed = 90
  const deleteSpeed = 50
  const pauseTime = 1200

  function loop() {
    if (!el) return

    if (!isDeleting) {
      el.textContent = text.substring(0, i++)
      if (i > text.length) {
        isDeleting = true
        setTimeout(loop, pauseTime)
        return
      }
    } else {
      el.textContent = text.substring(0, i--)
      if (i < 0) {
        isDeleting = false
        i = 0
      }
    }

    setTimeout(loop, isDeleting ? deleteSpeed : typeSpeed)
  }

  loop()
})
</script>

<style scoped>
.hero-anim {
  opacity: 0;
  transform: translateY(14px);
  animation: fadeUp 0.8s ease forwards;
}

.hero-anim-1 { animation-delay: 2.5s }
.hero-anim-2 { animation-delay: 3.5s }
.hero-anim-3 { animation-delay: 5.5s }
.hero-anim-4 { animation-delay: 7.5s }
.hero-anim-5 { animation-delay: 8.5s }
.hero-anim-6 { animation-delay: 9.5s }

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* 🔮 NEW GLASS PARAGRAPH */
.glass-paragraph {
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.14),
    rgba(59,130,246,0.10)
  );

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255,255,255,0.18);

  padding: 14px 18px;
  border-radius: 14px;

  color: rgba(255,255,255,0.85);

  box-shadow:
    0 10px 30px rgba(0,0,0,0.25),
    inset 0 1px 0 rgba(255,255,255,0.15);

  transition: all 0.3s ease;
}

.glass-paragraph:hover {
  transform: translateY(-3px);
  box-shadow:
    0 18px 45px rgba(0,0,0,0.35),
    0 0 25px rgba(59,130,246,0.25);
}

/* EVERYTHING BELOW UNTOUCHED */
.left-side {
  opacity: 0;
  animation: fadeIn 3s forwards;
  animation-delay: 1.5s;
}

@keyframes fadeIn {
  to { opacity: 5; }
}

.social-icon {
  color: white;
  opacity: 0.7;
  transition: 0.3s;
}

.social-icon:hover {
  opacity: 1;
  transform: translateY(-4px) scale(1.1);
  color: #3b82f6;
}

.wave-hand {
  display: inline-block;
  animation: wave 1.5s infinite;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
}

.profile-img {
  opacity: 0.95;
  -webkit-mask-image:
    radial-gradient(circle at center, black 60%, transparent 100%),
    linear-gradient(to top, transparent 0%, black 15%),
    linear-gradient(to bottom, transparent 0%, black 15%),
    linear-gradient(to left, transparent 0%, black 35%),
    linear-gradient(to right, transparent 0%, black 55%);
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  filter:
    blur(0.2px)
    brightness(1.05)
    contrast(1.05)
    drop-shadow(0 25px 60px rgba(0, 0, 0, 0.4));
}

.cloud-overlay {
  background:
    radial-gradient(circle at 50% 85%, rgba(146, 179, 232, 0.06), transparent 60%),
    radial-gradient(circle at 30% 75%, rgba(203, 160, 242, 0.035), transparent 45%),
    radial-gradient(circle at 70% 75%, rgba(154, 186, 237, 0.035), transparent 45%);
  filter: blur(28px);
  opacity: 0.22;
  mix-blend-mode: screen;
}

.profile-wrapper::before {
  content: "";
  position: absolute;
  inset: -40px;
  background: radial-gradient(circle, rgba(88, 145, 236, 0.25), transparent 30%);
  filter: blur(50px);
  z-index: -1;
}

.cursor {
  display: inline-block;
  animation: blink 0.8s infinite;
  color: #3b82f6;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>