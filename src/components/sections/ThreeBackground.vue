<template>
  <div ref="container" class="scene"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue"
import * as THREE from "three"

const container = ref(null)

let scene, camera, renderer, mesh
let mouseX = 0, mouseY = 0
let targetX = 0, targetY = 0

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;

// soft noise
float hash(vec2 p){
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}

void main() {

  vec2 uv = vUv;

  // slow drifting fields
  float n1 = noise(uv * 3.0 + uTime * 0.05);
  float n2 = noise(uv * 5.0 - uTime * 0.03);

  float mixVal = smoothstep(0.2, 0.8, n1 + n2 * 0.5);

  // elegant color palette (corporate luxury feel)
  vec3 deepBlue = vec3(0.02, 0.05, 0.15);
  vec3 softBlue = vec3(0.2, 0.4, 0.8);
  vec3 mist = vec3(0.8, 0.9, 1.0);

  vec3 color = mix(deepBlue, softBlue, mixVal);
  color = mix(color, mist, uv.y * 0.4);

  // subtle vignette
  float vignette = smoothstep(0.8, 0.2, distance(uv, vec2(0.5)));
  color *= vignette;

  gl_FragColor = vec4(color, 1.0);
}
`

onMounted(() => {
  // SCENE
  scene = new THREE.Scene()

  // CAMERA (very calm, no exaggeration)
  camera = new THREE.OrthographicCamera(
    -1, 1, 1, -1,
    0, 1
  )

  // RENDERER
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  // FULLSCREEN PLANE
  const geometry = new THREE.PlaneGeometry(2, 2)

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) }
    }
  })

  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // VERY SUBTLE MOUSE (barely noticeable premium touch)
  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX / window.innerWidth
    targetY = e.clientY / window.innerHeight
  })

  window.addEventListener("resize", onResize)

  animate()
})

function animate() {
  requestAnimationFrame(animate)

  const time = performance.now() * 0.001

  // ultra-smooth interpolation (key for “expensive feel”)
  mouseX += (targetX - mouseX) * 0.02
  mouseY += (targetY - mouseY) * 0.02

  mesh.material.uniforms.uTime.value = time
  mesh.material.uniforms.uMouse.value.set(mouseX, mouseY)

  renderer.render(scene, camera)
}

function onResize() {
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize)
})
</script>

<style scoped>
.scene {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: #05070f;
}
</style>