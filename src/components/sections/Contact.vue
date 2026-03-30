<template>
  <section id="contact" class="py-24 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">

      <!-- LEFT SIDE (FORM) -->
      <div class="bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-800">

        <h2 class="text-2xl font-bold mb-6">Send a Message</h2>

        <form @submit.prevent="handleSubmit" class="grid gap-5">

          <input 
            v-model="name"
            type="text" 
            placeholder="Your Name"
            class="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            v-model="email"
            type="email" 
            placeholder="Your Email"
            class="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea 
            v-model="message"
            rows="5"
            placeholder="Your Message"
            class="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button 
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition shadow-lg"
          >
            Send Message 🚀
          </button>

        </form>

      </div>

      <!-- RIGHT SIDE (CARDS) -->
      <div class="space-y-6">

        <!-- Address -->
        <div class="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
          <div class="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-lg text-xl">
            📍
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Address</h3>
            <p class="text-sm text-gray-600">
              123 Harare Street, Zimbabwe
            </p>
          </div>
        </div>

        <!-- Email -->
        <div class="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
          <div class="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-lg text-xl">
            ✉️
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">My Email</h3>
            <p class="text-sm text-gray-600">
              youremail@example.com
            </p>
          </div>
        </div>

        <!-- Phone -->
        <div class="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
          <div class="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-lg text-xl">
            📞
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Call Me Now</h3>
            <p class="text-sm text-gray-600">
              +263 77 123 4567
            </p>
          </div>
        </div>

        <!-- Website -->
        <div class="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
          <div class="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-lg text-xl">
            🌐
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Website</h3>
            <p class="text-sm text-gray-600">
              www.yourportfolio.com
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// reactive form fields
const name = ref<string>("")
const email = ref<string>("")
const message = ref<string>("")

// submit handler
const handleSubmit = () => {
  console.log("Form submitted:", {
    name: name.value,
    email: email.value,
    message: message.value
  })

  // reset form
  name.value = ""
  email.value = ""
  message.value = ""

  alert("Message sent successfully 🚀")
}
</script>