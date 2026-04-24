<template>
  <section id="about" class="scroll-mt-24 py-24 relative overflow-hidden bg-[#2563eb]">
    
    <div class="max-w-[50vw] mx-auto px-6">
      
      <!-- MAIN CARD -->
      <div class="bg-white rounded-2xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-x-8 items-start">

        <!-- LEFT -->
        <div class="flex justify-center">
          <div class="bg-white p-4 rounded-xl shadow-inner">
            <img
              :src="tkayLogo"
              alt="Tkay"
              class="rounded-lg object-contain w-[280px] h-[300px] tkay-logo"
            />

            <!-- SOCIALS -->
            <div class="flex justify-center gap-6 mt-6 bg-[#2563eb] shadow-md py-2 rounded-lg">
              <a href="https://www.facebook.com/TakuInnovations" target="_blank" class="social-icon">
                <i class="fa-brands fa-facebook fa-3x"></i>
              </a>
              <a href="https://wa.me/263780488779" target="_blank" class="social-icon">
                <i class="fa-brands fa-whatsapp fa-3x"></i>
              </a>
              <a href="https://www.instagram.com/achomunodisa/?hl=en" target="_blank" class="social-icon">
                <i class="fa-brands fa-instagram fa-3x"></i>
              </a>
              <a href="https://x.com/chomunodisaa68" target="_blank" class="social-icon">
                <i class="fa-brands fa-twitter fa-3x"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="mt-4 md:mt-0">
          
          <h2 class="text-3xl md:text-4xl font-bold text-blue-950">
            A FULL STACK SOFTWARE DEVELOPER
          </h2>

          <!-- INFO CARD -->
          <div class="info-card mt-6 p-6 rounded-2xl">
            <p class="mb-4">
              Creative Software Developer with 5+ years of experience building scalable apps.
            </p>
            <p class="mb-4">
              Skilled in Cloud, Data Pipelines, and Machine Learning.
            </p>
            <p>
              Focused on building reliable, future-ready applications.
            </p>
          </div>

          <!-- BUTTONS -->
          <div class="mt-6 flex gap-4">
            <a href="#projects" class="glow-btn">⬇ My Projects</a>
            <a href="#" class="glow-btn">⬇ Download CV</a>
          </div>
        </div>

      </div>

      <!-- STATS -->
      <div ref="statsRef" class="stats-card mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div class="stat-box">
          <h3 class="stat-number">{{ stats.awards }}</h3>
          <p class="stat-label">Awards</p>
        </div>

        <div class="stat-box">
          <h3 class="stat-number">{{ stats.contracts }}</h3>
          <p class="stat-label">contracts</p>
        </div>

        <div class="stat-box">
          <h3 class="stat-number">{{ stats.projects }}</h3>
          <p class="stat-label">Projects</p>
        </div>

        <div class="stat-box">
          <h3 class="stat-number">{{ stats.clients }}</h3>
          <p class="stat-label">Clients</p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import tkayLogo from "../../assets/tkay.png"

const statsRef = ref<HTMLElement | null>(null)

const stats = ref({
  awards: 0,
  contracts: 0,
  projects: 0,
  clients: 0
})

const target = {
  awards: 5,
  contracts: 20,
  projects: 15,
  clients: 25
}

const animateCount = (key: keyof typeof target, end: number) => {
  let start = 0
  const duration = 2000
  const stepTime = 16
  const increment = end / (duration / stepTime)

  const counter = setInterval(() => {
    start += increment

    if (start >= end) {
      stats.value[key] = end
      clearInterval(counter)
    } else {
      stats.value[key] = Math.floor(start)
    }
  }, stepTime)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      Object.keys(target).forEach((key) => {
        animateCount(key as keyof typeof target, target[key as keyof typeof target])
      })
      observer.disconnect()
    }
  }, { threshold: 0.4 })

  if (statsRef.value) observer.observe(statsRef.value)
})
</script>

<style scoped>
section::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(35, 122, 236, 0.15), transparent),
    radial-gradient(circle at 80% 60%, rgba(29, 102, 220, 0.2), transparent);
  pointer-events: none;
}

.tkay-logo {
  transition: transform 0.3s ease;
}
.tkay-logo:hover {
  transform: scale(1.1);
}

.glow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 9999px;
  background: #2563eb;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 10px 25px rgba(37, 99, 235, 0.35),
    0 0 20px rgba(37, 99, 235, 0.25);
  transition: all 0.35s ease;
}

.glow-btn:hover {
  transform: translateY(-8px) scale(1.08);
  background: #1e4fd6;
  box-shadow:
    0 20px 50px rgba(37, 99, 235, 0.65),
    0 0 40px rgba(37, 99, 235, 0.45);
}

.info-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.75),
    rgba(37, 99, 235, 0.15)
  );
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.15),
    0 0 25px rgba(37, 99, 235, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.stats-card {
  background: linear-gradient(
    135deg,
    rgba(240, 236, 236, 0.99),
    rgba(211, 239, 242, 0.8)
  );

  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.35);

  border-radius: 20px;
  padding: 30px;

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.2),
    0 0 25px rgba(110, 179, 236, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);

  transition: all 0.5s ease;
}

.stats-card:hover {
  transform: translateY(-10px) scale(1.02);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
}

.stat-label {
  color: #444;
  font-size: 0.9rem;
}

.social-icon {
  color: white;
  transition: 0.3s;
}
.social-icon:hover {
  transform: translateY(-8px) scale(1.2);
}

/* 🔥 ONLY ADDITION — REAL GLASS HOVER EFFECT */
.info-card p {
  transition: all 0.35s ease;
  border-radius: 12px;
}

.info-card:hover p {
  transform: translateY(-4px) scale(1.02);
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
</style>