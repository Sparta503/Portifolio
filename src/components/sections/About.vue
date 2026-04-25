<template>
  <section id="about" class="scroll-mt-24 py-24 relative overflow-hidden">

    <!-- 🔥 3D BACKGROUND -->
    <ThreeBackground class="absolute inset-0 z-0" />

    <div class="max-w-[50vw] mx-auto px-6 relative z-10">

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

          <!-- 🧊 GLASS PARAGRAPHS -->
          <div class="info-card mt-6 rounded-2xl">

            <p>
              Creative Software Developer with 5+ years of experience building scalable apps.
            </p>

            <p>
              Skilled in Cloud, Data Pipelines, and Machine Learning.
            </p>

            <p>
              Focused on building reliable, future-ready applications.
            </p>

          </div>

          <!-- BUTTONS -->
          <div class="mt-6 flex gap-4">
            <a href="#projects" class="glow-btn">⬇ My Projects</a>

            <a
              href="/Abel_Chomunodisa_Resume.pdf"
              class="glow-btn"
              @click.prevent="downloadCv"
            >
              <span v-if="isDownloading">⏳ Downloading...</span>
              <span v-else>
                {{ isDownloaded ? '✅ Downloaded' : '⬇ Download CV' }}
              </span>
            </a>
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
          <p class="stat-label">Contracts</p>
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
import ThreeBackground from "./threeBackground.vue"

const isDownloading = ref(false)
const isDownloaded = ref(false)

/* unchanged JS */
const downloadCv = async () => {
  if (isDownloading.value) return

  isDownloading.value = true
  isDownloaded.value = false

  const res = await fetch("/Abel_Chomunodisa_Resume.pdf")
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = "Abel_Chomunodisa_Resume.pdf"
  a.click()

  URL.revokeObjectURL(url)

  isDownloading.value = false
  isDownloaded.value = true

  setTimeout(() => (isDownloaded.value = false), 2000)
}

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

/* IMAGE */
.tkay-logo {
  transition: transform 0.3s ease;
}
.tkay-logo:hover {
  transform: scale(1.1);
}

/* BUTTON */
.glow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 9999px;
  background: #2563eb;
  color: white;
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
}

/* 🧊 INFO GLASS */
.info-card {
  background: rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.55);

  padding: 18px;

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.18),
    0 0 40px rgba(37, 99, 235, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.65);

  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 🔥 REDUCED HEIGHT (THIS IS THE FIX) */
.info-card p {
  margin: 0;
  padding: 12px 16px;   /* ⬅ reduced from 20px */
  line-height: 1.35;    /* ⬅ tighter text */

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.22);

  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);

  border: 1px solid rgba(255, 255, 255, 0.65);

  color: rgba(10, 15, 25, 0.95);

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.25),
    0 0 35px rgba(37, 99, 235, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  transition: all 0.35s ease;
}

.info-card p:hover {
  transform: translateY(-5px) scale(1.02);

  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.35),
    0 0 60px rgba(37, 99, 235, 0.45);
}

/* STATS */
.stats-card {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(30px);
  border-radius: 26px;
  padding: 35px;
}

.stat-box {
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.4);
  transition: all 0.35s ease;
}

.stat-box:hover {
  transform: translateY(-10px) scale(1.06);
}

.social-icon {
  color: white;
  transition: 0.3s;
}

.social-icon:hover {
  transform: translateY(-8px) scale(1.2);
}

</style>