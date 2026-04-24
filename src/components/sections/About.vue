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

        <!-- RIGHT: Content -->
        <div class="mt-4 md:mt-0">
          
          <h2 class="text-3xl md:text-4xl font-bold text-blue-950 leading-snug">
            A FULL STACK SOFTWARE DEVELOPER
          </h2>

          <!-- 🔥 MORE VISIBLE PREMIUM CARD -->
          <div class="info-card mt-6 p-6 rounded-2xl">
            
            <p class="text-lg leading-relaxed mb-4">
              Creative Software Developer with 5+ years of experience building scalable web and mobile applications, focused on clean UI and strong user experience.
            </p>

            <p class="text-lg leading-relaxed mb-4">
              Skilled in Modern Technologies, Cloud Services, Data Pipelines, and Machine Learning to deliver efficient solutions.
            </p>

            <p class="text-lg leading-relaxed">
              Thrives in Dynamic Environments and continuously adapts to new Technologies and Industry Trends.  
              Committed to applying Best Practices to build high-quality, reliable, and Future-Ready Applications.
            </p>

          </div>

          <!-- Buttons -->
          <div class="mt-6 flex gap-4">

            <a href="#projects" class="glow-btn">
              ⬇ My Projects
            </a>

            <a href="#" class="glow-btn">
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

/* =========================
   BUTTONS
========================= */
.glow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem;
  border-radius: 9999px;

  background: #2563eb;
  color: white;

  border: 1px solid rgba(37, 99, 235, 0.6);

  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);

  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.glow-btn:hover {
  transform: translateY(-8px) scale(1.08);

  background: #1d4ed8;

  box-shadow:
    0 18px 45px rgba(37, 99, 235, 0.55),
    0 0 30px rgba(37, 99, 235, 0.35),
    0 0 60px rgba(37, 99, 235, 0.15);
}

/* =========================
   SOCIAL ICONS
========================= */
.social-icon {
  color: white;
  opacity: 0.85;
  transition: all 0.35s ease;
}

.social-icon:hover {
  opacity: 1;
  transform: translateY(-10px) scale(1.2);
  color: #60a5fa;
  filter:
    drop-shadow(0 0 12px rgba(96,165,250,0.7))
    drop-shadow(0 0 25px rgba(37,99,235,0.4));
}

/* =========================
   🔥 MORE VISIBLE INFO CARD
========================= */
.info-card {
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.25),
    rgba(255, 255, 255, 0.85)
  );

  backdrop-filter: blur(14px);

  border: 1px solid rgba(37, 99, 235, 0.35);

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.15),
    0 0 25px rgba(37, 99, 235, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);

  transition: all 0.4s ease;
}

/* 🚀 stronger hover pop */
.info-card:hover {
  transform: translateY(-6px);

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.25),
    0 0 35px rgba(37, 99, 235, 0.35);
}
</style>