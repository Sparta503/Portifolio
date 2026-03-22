<template>
  <section id="contact" class="py-20 bg-gray-900 text-white">
    <div class="max-w-xl mx-auto px-6 text-center">

      <h2 class="text-3xl font-bold mb-6">Contact Me</h2>

      <p class="text-gray-400 mb-8">
        Have a project or opportunity? Let’s talk.
      </p>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">

        <input 
          v-model="name"
          type="text" 
          placeholder="Your Name"
          class="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <input 
          v-model="email"
          type="email" 
          placeholder="Your Email"
          class="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <textarea 
          v-model="message"
          placeholder="Your Message"
          rows="4"
          class="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        ></textarea>

        <button 
          type="submit"
          class="bg-blue-500 py-3 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>

      </form>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref<string>('')
const email = ref<string>('')
const message = ref<string>('')

const handleSubmit = (): void => {
  console.log({ 
    name: name.value, 
    email: email.value, 
    message: message.value 
  })

  alert('Message sent! (connect backend later)')
}
</script>