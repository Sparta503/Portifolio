<template>
  <section id="pricing" class="py-24 bg-transparent text-white relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 relative z-10">

      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-semibold text-white">Pricing Plans</h2>
        <p class="text-white/70 mt-2">Simple, flexible pricing for your needs</p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-6">

        <!-- BASIC -->
        <div class="pricing-card">
          <h3 class="text-xl font-bold">Basic</h3>
          <p class="text-white/70 mt-2">Perfect for starters</p>

          <div class="text-4xl font-extrabold mt-6">
            $50<span class="text-lg font-normal text-white/70">/project</span>
          </div>

          <ul class="mt-6 space-y-2 text-white/80 text-sm">
            <li>✔ Simple landing page</li>
            <li>✔ Responsive design</li>
            <li>✔ Basic UI setup</li>
          </ul>

          <a href="#contact" class="pricing-btn mt-8 inline-block">
            Get Started
          </a>
        </div>

        <!-- STANDARD -->
        <div class="pricing-card featured">
          <h3 class="text-xl font-bold">Standard</h3>
          <p class="text-white/70 mt-2">Best for most clients</p>

          <div class="text-4xl font-extrabold mt-6">
            $150<span class="text-lg font-normal text-white/70">/project</span>
          </div>

          <ul class="mt-6 space-y-2 text-white/80 text-sm">
            <li>✔ Full website (5–7 pages)</li>
            <li>✔ API integration</li>
            <li>✔ Mobile Development</li>
            <li>✔ Authentication system</li>
          </ul>

          <a href="#contact" class="pricing-btn mt-8 inline-block">
            Choose Plan
          </a>
        </div>

        <!-- PREMIUM -->
        <div class="pricing-card">
          <h3 class="text-xl font-bold">Premium</h3>
          <p class="text-white/70 mt-2">For advanced systems</p>

          <div class="text-4xl font-extrabold mt-6">
            $300+<span class="text-lg font-normal text-white/70">/project</span>
          </div>

          <ul class="mt-6 space-y-2 text-white/80 text-sm">
            <li>✔ Fullstack application</li>
            <li>✔ Backend + database</li>
             <li>✔ Mobile Development</li>
              <li>✔ Web and Mobile Hosting</li>
            <li>✔ Cloud deployment</li>
          </ul>

          <a href="#contact" class="pricing-btn mt-8 inline-block">
            Contact Me
          </a>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* 🔥 base card */
.pricing-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 18px;
  padding: 28px;
  text-align: center;

  backdrop-filter: blur(12px);
  transform: perspective(1000px) translateY(0px);

  transition: all 0.5s ease;
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

/* 🚀 hover lift + glow */
.pricing-card:hover {
  transform: translateY(-12px) scale(1.05);
  box-shadow:
    0 25px 60px rgba(0,0,0,0.4),
    0 0 25px rgba(59,130,246,0.4);
  border-color: rgba(59,130,246,0.6);
}

/* 🌟 featured middle card */
.featured {
  background: rgba(59,130,246,0.25);
  border: 1px solid rgba(59,130,246,0.5);
  transform: scale(1.05);
}

/* 🔘 button glow */
.pricing-btn {
  padding: 10px 18px;
  border-radius: 999px;
  background: #2563eb;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;
}

/* 💥 button hover glow */
.pricing-btn:hover {
  transform: translateY(-4px) scale(1.08);
  box-shadow:
    0 0 20px rgba(59,130,246,0.6),
    0 10px 25px rgba(0,0,0,0.3);
  background: #1d4ed8;
}
</style>