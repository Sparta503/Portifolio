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
              class="rounded-lg object-contain w-[280px] h-[300px]"
            />

            <!-- Socials -->
            <div class="flex justify-center gap-6 mt-6 bg-blue-600 shadow-md py-2 rounded-lg">
              <a href="#" target="_blank" class="text-white hover:-translate-y-1 hover:scale-110 transition"><i class="fa-brands fa-facebook fa-3x"></i></a>
              <a href="#" target="_blank" class="text-white hover:-translate-y-1 hover:scale-110 transition"><i class="fa-brands fa-whatsapp fa-3x"></i></a>
              <a href="#" target="_blank" class="text-white hover:-translate-y-1 hover:scale-110 transition"><i class="fa-brands fa-instagram fa-3x"></i></a>
              <a href="#" target="_blank" class="text-white hover:-translate-y-1 hover:scale-110 transition"><i class="fa-brands fa-twitter fa-3x"></i></a>
            </div>
          </div>
        </div>

        <!-- RIGHT: Content -->
        <div class="mt-4 md:mt-0">
          <h2 class="text-3xl md:text-4xl font-bold text-blue-950 leading-snug">
            I am a Software Developer
          </h2>

          <p class="mt-4 text-xl leading-relaxed">
            As a creative and innovative software developer, I am passionate about designing and developing
            cutting-edge web applications that cater to the needs of users. My expertise lies in leveraging modern
            technologies to create efficient and scalable solutions, always striving to deliver exceptional user
            experiences.
          </p>

          <p class="mt-4 text-xl leading-relaxed">
            I thrive in a dynamic environment, continuously pushing the boundaries of what is possible. I am
            committed to staying up-to-date with the latest trends and advancements in the industry, ensuring that my
            projects are built with the latest technologies and best practices.
          </p>

          <!-- Buttons -->
          <div class="mt-6 flex gap-4">
            <a
              href="#projects"
              class="flex items-center gap-8 border border-blue-600 bg-blue-600 px-8 py-4 rounded-full shadow hover:bg-blue-700 hover:scale-105 transition"
            >
              ⬇ My Projects
            </a>

            <a
              href="#"
              class="flex items-center gap-8 border border-blue-600 bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition duration-300"
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tkay-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>