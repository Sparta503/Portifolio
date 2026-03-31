<template>
  <section id="contact" class="py-24 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

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
            Send Message 
          </button>
        </form>
      </div>

      <!-- RIGHT SIDE (3D SPHERE) -->
      <div class="flex justify-center items-center">
        <div ref="canvasContainer" class="w-full h-[450px]"></div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import * as THREE from "three"

// ================= FORM =================
const name = ref("")
const email = ref("")
const message = ref("")

const handleSubmit = () => {
  console.log({ name: name.value, email: email.value, message: message.value })
  name.value = ""
  email.value = ""
  message.value = ""
  alert("Message sent ")
}

// ================= 3D SPHERE =================
const canvasContainer = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!canvasContainer.value) return

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    75,
    canvasContainer.value.clientWidth / 450,
    0.1,
    1000
  )
  camera.position.z = 3

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(canvasContainer.value.clientWidth, 450)
  renderer.setPixelRatio(window.devicePixelRatio)
  canvasContainer.value.appendChild(renderer.domElement)

  // 🌍 MAIN SPHERE
  const sphereGeo = new THREE.SphereGeometry(1, 64, 64)
  const sphereMat = new THREE.MeshStandardMaterial({
    color: "#8b5cf6", // purple globe
    roughness: 0.4,
    metalness: 0.9
  })
  const sphere = new THREE.Mesh(sphereGeo, sphereMat)
  scene.add(sphere)

  // ✨ GLOW LAYER
  const glowGeo = new THREE.SphereGeometry(1.02, 64, 64)
  const glowMat = new THREE.MeshBasicMaterial({
    color: "#d8b4fe", // light purple glow
    transparent: true,
    opacity: 0.15
  })
  const glow = new THREE.Mesh(glowGeo, glowMat)
  scene.add(glow)

  // 🌀 ORBIT RINGS
  const rings: THREE.Mesh[] = []
  const ringColors = ["#3b82f6", "#a855f7", "#f43f5e", "#facc15", "#10b981", "#f97316"]

  for (let i = 0; i < 6; i++) {
    const ringGeo = new THREE.TorusGeometry(1.3, 0.06, 16, 100)
    const ringMat = new THREE.MeshStandardMaterial({
      color: ringColors[i],
      roughness: 0.2,
      metalness: 0.8
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.random() * Math.PI
    ring.rotation.y = Math.random() * Math.PI
    scene.add(ring)
    rings.push(ring)
  }

  // 💡 LIGHTING
  const light1 = new THREE.PointLight("#ffffff", 1.5)
  light1.position.set(5, 5, 5)
  const light2 = new THREE.PointLight("#3b82f6", 1)
  light2.position.set(-5, -5, -5)
  const ambient = new THREE.AmbientLight("#ffffff", 0.3)
  scene.add(light1, light2, ambient)

  // 🎬 ANIMATION
  const animate = () => {
    requestAnimationFrame(animate)
    sphere.rotation.y += 0.004
    glow.rotation.y += 0.004
    rings.forEach((ring, i) => {
      ring.rotation.x += 0.002 + i * 0.0005
      ring.rotation.y += 0.003 + i * 0.0005
    })
    renderer.render(scene, camera)
  }
  animate()

  // 📱 RESPONSIVE
  window.addEventListener("resize", () => {
    if (!canvasContainer.value) return
    const width = canvasContainer.value.clientWidth
    camera.aspect = width / 450
    camera.updateProjectionMatrix()
    renderer.setSize(width, 450)
  })
})
</script>