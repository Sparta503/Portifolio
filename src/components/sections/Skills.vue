<template>
  <section id="skills" class="py-24 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

      <!-- LEFT SIDE (Text) -->
      <div>
        <h2 class="text-5xl font-bold mb-6">What I do?</h2>

        <!-- GLASS PARAGRAPH 1 -->
        <p class="glass-paragraph mb-4">
          I Specialize in Designing User Experiences, Crafting Engaging Interfaces,
          and Building Robust Web and Mobile Applications that Deliver Value and Usability.
        </p>

        <!-- GLASS PARAGRAPH 2 -->
        <p class="glass-paragraph mb-6">
          My Approach combines Creativity and Technical expertise to Deliver solutions that are
          Visually Appealing, Highly Functional, Well-tested, and Easy to maintain.

          <br><br>

          Also Experienced in Python for building data pipelines and training machine learning models.
        </p>

        <!-- 💜 PURPLE GLASS BUTTON -->
        <a
          href="https://wa.me/263780488779"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="glass-btn">
            Say Hello!
          </button>
        </a>
      </div>

      <!-- RIGHT SIDE -->
      <div class="space-y-6">

        <!-- FRONTEND -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/60 transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Frontend</h3>
          <div class="flex flex-wrap gap-2 text-base">
            <span class="glass-tag">Vue.js</span>
            <span class="glass-tag">React</span>
            <span class="glass-tag">Next.js</span>
            <span class="glass-tag">Angular</span>
            <span class="glass-tag">HTML + PHP</span>
          </div>
        </div>

        <!-- BACKEND -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/60 transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Backend</h3>
          <div class="flex flex-wrap gap-2 text-base">
            <span class="glass-tag">Laravel</span>
            <span class="glass-tag">Java</span>
            <span class="glass-tag">Python</span>
            <span class="glass-tag">Django</span>
            <span class="glass-tag">PostgreSQL</span>
          </div>
        </div>

        <!-- MOBILE -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/60 transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Mobile Development</h3>
          <div class="flex flex-wrap gap-2 text-base">
            <span class="glass-tag">React Native</span>
            <span class="glass-tag">Flutter</span>
            <span class="glass-tag">Dart</span>
            <span class="glass-tag">Figma</span>
            <span class="glass-tag">Ionic</span>
          </div>
        </div>

        <!-- OTHER -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/60 transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Other Technologies</h3>
          <div class="flex flex-wrap gap-2 text-base">
            <span class="glass-tag">Cloud Security and Monitoring</span>
            <span class="glass-tag">Wordpress</span>
            <span class="glass-tag">CI/CD</span>
            <span class="glass-tag">Data Modelling and Pipelining</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>

/* 🔮 GLASS PARAGRAPH */
.glass-paragraph {
  background: linear-gradient(
    135deg,
    rgba(247, 243, 243, 0.93),
    rgba(215, 253, 225, 0.25)
  );

  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);

  border: 1px solid rgba(255, 255, 255, 0.75);

  border-radius: 16px;

  padding: 18px 20px;

  color: rgba(15, 23, 42, 0.88);

  box-shadow:
    0 22px 55px rgba(0, 0, 0, 0.25),
    0 0 40px rgba(37, 99, 235, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);

  transition: all 0.4s ease;
}

.glass-paragraph:hover {
  transform: translateY(-4px);
  box-shadow:
    0 28px 70px rgba(0, 0, 0, 0.35),
    0 0 55px rgba(37, 99, 235, 0.45);
}

/* 🔮 GLASS TAGS */
.glass-tag {
  padding: 6px 14px;
  border-radius: 9999px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.92),
    rgba(181, 230, 245, 0.22)
  );

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.65);

  color: rgba(0, 0, 0, 0.75);
  font-size: 0.9rem;

  box-shadow:
    0 12px 24px rgba(0,0,0,0.18),
    0 0 18px rgba(37,99,235,0.25),
    inset 0 1px 0 rgba(255,255,255,0.8);

  transition: all 0.35s ease;
}

.glass-tag:hover {
  transform: translateY(-3px) scale(1.06);
  box-shadow:
    0 18px 35px rgba(0,0,0,0.28),
    0 0 30px rgba(37,99,235,0.45);
}

/* 💜 PURPLE GLASS BUTTON */
.glass-btn {
  padding: 12px 22px;
  border-radius: 14px;

  background: linear-gradient(
    135deg,
    rgba(126, 17, 106, 0.75),
    rgba(149, 44, 176, 1)
  );

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.25);

  color: white;
  font-weight: 600;

  box-shadow:
    0 12px 25px rgba(0, 0, 0, 0.25),
    0 0 25px rgba(147, 51, 234, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  transition: all 0.35s ease;
  cursor: pointer;
}

/* hover */
.glass-btn:hover {
  transform: translateY(-6px) scale(1.05);

  background: linear-gradient(
    135deg,
    rgba(214, 189, 237, 0.9),
    rgba(99, 102, 241, 0.5)
  );

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.35),
    0 0 55px rgba(168, 85, 247, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

/* click */
.glass-btn:active {
  transform: translateY(-2px) scale(0.98);
}

</style>