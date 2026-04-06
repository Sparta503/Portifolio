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
  const text = `Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
  const url = `https://wa.me/263780488779?text=${encodeURIComponent(text)}`
  window.open(url, "_blank", "noopener,noreferrer")

  name.value = ""
  email.value = ""
  message.value = ""
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

  // 🌍 MAIN SPHERE (more realistic)
  const sphereGeo = new THREE.SphereGeometry(1, 64, 64)
  const sphereMat = new THREE.MeshStandardMaterial({
    color: "#8b5cf6",
    roughness: 0.35,
    metalness: 0.85
  })
  const sphere = new THREE.Mesh(sphereGeo, sphereMat)
  scene.add(sphere)

  // ✨ GLOW
  const glowGeo = new THREE.SphereGeometry(1.05, 64, 64)
  const glowMat = new THREE.MeshBasicMaterial({
    color: "#c084fc",
    transparent: true,
    opacity: 0.18
  })
  const glow = new THREE.Mesh(glowGeo, glowMat)
  scene.add(glow)

  // 🌀 ORBITS
  const rings: THREE.Mesh[] = []
  const colors = ["#22d3ee", "#f472b6", "#facc15", "#a3e635"]
  const ringTilts = [-0.55, -0.18, 0.18, 0.55]

  for (let i = 0; i < 4; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.05, 16, 100),
      new THREE.MeshStandardMaterial({
        color: colors[i],
        metalness: 1,
        roughness: 0.2
      })
    )

    const baseX = ringTilts[i] + (Math.random() - 0.5) * 0.35
    const rotY0 = Math.random() * Math.PI * 2
    const baseZ = Math.random() * Math.PI

    ring.rotation.x = baseX
    ring.rotation.y = rotY0
    ring.rotation.z = baseZ

    ring.userData = {
      baseX,
      rotY0,
      baseZ,
      phase: Math.random() * Math.PI * 2,
      orbitSpeed: 0.9 + Math.random() * 1.3,
      wobbleSpeedX: 0.7 + Math.random() * 0.9,
      wobbleSpeedZ: 0.7 + Math.random() * 0.9,
      wobbleAmpX: 0.08 + Math.random() * 0.08,
      wobbleAmpZ: 0.06 + Math.random() * 0.08
    }

    scene.add(ring)
    rings.push(ring)
  }

  // ✨ PARTICLES (stars around sphere)
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 800

  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  )

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.01,
    color: "#ffffff"
  })

  const particlesMesh = new THREE.Points(
    particlesGeometry,
    particlesMaterial
  )
  scene.add(particlesMesh)

  // 💡 LIGHTS
  const light1 = new THREE.PointLight("#ffffff", 1.5)
  light1.position.set(5, 5, 5)

  const light2 = new THREE.PointLight("#3b82f6", 1)
  light2.position.set(-5, -5, -5)

  scene.add(light1, light2)

  // 🖱️ MOUSE INTERACTION
  let isDragging = false
  let previousMousePosition = { x: 0, y: 0 }

  renderer.domElement.addEventListener("mousedown", () => {
    isDragging = true
  })

  renderer.domElement.addEventListener("mouseup", () => {
    isDragging = false
  })

  renderer.domElement.addEventListener("mousemove", (e) => {
    if (!isDragging) return

    const deltaMove = {
      x: e.offsetX - previousMousePosition.x,
      y: e.offsetY - previousMousePosition.y
    }

    sphere.rotation.y += deltaMove.x * 0.005
    sphere.rotation.x += deltaMove.y * 0.005

    previousMousePosition = {
      x: e.offsetX,
      y: e.offsetY
    }
  })

  // 🎬 ANIMATION
  const animate = () => {
    requestAnimationFrame(animate)

    const t = performance.now() * 0.001

    sphere.rotation.y += 0.002
    glow.rotation.y += 0.002

    rings.forEach((ring) => {
      const baseX = ring.userData.baseX ?? 0
      const rotY0 = ring.userData.rotY0 ?? 0
      const baseZ = ring.userData.baseZ ?? 0
      const phase = ring.userData.phase ?? 0
      const orbitSpeed = ring.userData.orbitSpeed ?? 1.5
      const wobbleSpeedX = ring.userData.wobbleSpeedX ?? 1.2
      const wobbleSpeedZ = ring.userData.wobbleSpeedZ ?? 1.1
      const wobbleAmpX = ring.userData.wobbleAmpX ?? 0.12
      const wobbleAmpZ = ring.userData.wobbleAmpZ ?? 0.08

      ring.rotation.y = rotY0 + t * orbitSpeed
      ring.rotation.x = baseX + Math.sin(t * wobbleSpeedX + phase) * wobbleAmpX
      ring.rotation.z = baseZ + Math.cos(t * wobbleSpeedZ + phase) * wobbleAmpZ
    })

    particlesMesh.rotation.y += 0.0005

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