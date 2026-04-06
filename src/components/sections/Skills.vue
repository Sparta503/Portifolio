<template>
  <section id="skills" class="py-24 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

      <!-- LEFT SIDE (Text) -->
      <div>
        <h2 class="text-5xl font-bold mb-6">What I do?</h2>

        <p class="text-blue-100 leading-relaxed mb-4">
          I specialize in designing user experiences, crafting engaging interfaces,
          and building robust web and mobile applications that deliver value and usability.
        </p>

        <p class="text-blue-100 leading-relaxed mb-6">
          My approach combines creativity and technical expertise to deliver
          solutions that are visually appealing and highly functional.
        </p>
   
       <a href="https://api.whatsapp.com/send?phone=263776452802&text=Hello" 
             target="_blank" 
             rel="noopener noreferrer"    
             > 
          <button class="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg shadow-lg transition">
            Say Hello!
          </button>
        </a>
      </div>

      <!-- RIGHT SIDE (STACKED CARDS) -->
      <div class="space-y-6">

        <!-- CARD -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">User Experience (UX)</h3>
          <p class="text-sm text-gray-600">
            I design intuitive and enjoyable experiences by understanding user needs,
            conducting research, and creating wireframes and prototypes.
          </p>
        </div>

        <!-- CARD -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">User Interface (UI)</h3>
          <p class="text-sm text-gray-600">
            I craft visually appealing and consistent interfaces, focusing on layout,
            color, and typography to ensure a seamless experience.
          </p>
        </div>

        <!-- CARD -->
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <h3 class="font-semibold text-lg mb-2">Web and Mobile Development</h3>
          <p class="text-sm text-gray-600">
            I build responsive and high-performance web and mobile applications using modern
            technologies, ensuring scalability and maintainability.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// UI only
</script>