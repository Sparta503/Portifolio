<template>
  <section id="skills" class="py-24 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

      <!-- LEFT SIDE (Text) -->
      <div>
        <h2 class="text-5xl font-bold mb-6">What I do?</h2>

        <p class="text-blue-100 text-lg leading-relaxed mb-4">
          I Specialize in Designing User Experiences, Crafting Engaging Interfaces,
          and Building Robust Web and Mobile Applications that Deliver Value and Usability.
        </p>

        <p class="text-blue-100 text-lg leading-relaxed mb-6">
          My Approach combines Creativity and Technical expertise to Deliver solutions that are
          Visually Appealing, Highly Functional, Well-tested, and Easy to maintain.

          <br><br>
          Also Experienced in Python for building data pipelines and training machine learning models.
        </p>
        <a
          href="https://wa.me/263780488779"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Say Hello on WhatsApp"
        >
          <button class="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg shadow-lg transition">
            Say Hello!
          </button>
        </a>
      </div>

      <!-- RIGHT SIDE (STACKED CARDS) -->
      <div class="space-y-6">

        <!-- CARD -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/60 hover:ring-2 hover:ring-red-500/40 transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Frontend</h3>
          <div class="flex flex-wrap gap-2 text-base">
            <span class="bg-black text-white px-3 py-1 rounded-full">Vue.js</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">React</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Next.js</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Angular</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">HTML + PHP</span>
          </div>
        </div>

        <!-- CARD -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/60 hover:ring-2 hover:ring-red-500/40 transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Backend</h3>
          <div class="flex flex-wrap gap-2 text-base">
            <span class="bg-black text-white px-3 py-1 rounded-full">Laravel</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Java</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Python</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Django</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Database Design</span>
          </div>
        </div>

        <!-- CARD -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/60 hover:ring-2 hover:ring-red-500/40 transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Mobile Development</h3>
          <div class="flex flex-wrap gap-2 text-base">
            <span class="bg-black text-white px-3 py-1 rounded-full">React Native</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Flutter</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Dart</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Figma</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Ionic</span>
          </div>
        </div>

        <!-- CARD -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/60 hover:ring-2 hover:ring-red-500/40 transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Other Technologies</h3>
          <div class="flex flex-wrap gap-2 text-base">
            <span class="bg-black text-white px-3 py-1 rounded-full">Cloud Security and Monitoring</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Wordpress</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">CI/CD</span>
            <span class="bg-black text-white px-3 py-1 rounded-full">Data Modelling and Pipelining</span>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// UI only
</script>