<template>
  <section id="education" class="py-20 bg-transparent text-white relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 relative z-10">

      <h2 class="text-3xl font-bold text-center mb-12">Education</h2>

      <!-- EDUCATION LIST -->
      <div id="education-all-posts" class="scroll-mt-28">
        <h3 class="text-2xl font-bold mb-6">All Posts</h3>

        <div class="grid gap-6">
          <article
            v-for="item in education"
            :key="item.school + item.program"
            class="edu-card glass-card p-6 rounded-xl hover:scale-[1.03] transition-all duration-500"
          >
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h4 class="text-xl font-semibold text-gray-900">{{ item.program }}</h4>
                <p class="text-gray-700">{{ item.school }}</p>
                <p v-if="item.location" class="text-gray-500">{{ item.location }}</p>
              </div>

              <p class="text-sm text-gray-500 sm:text-right">
                {{ item.start }} - {{ item.end }}
              </p>
            </div>

            <p v-if="item.details" class="mt-4 glass-paragraph">
              {{ item.details }}
            </p>

            <ul v-if="item.highlights.length" class="mt-3 glass-paragraph space-y-1 text-sm">
              <li v-for="point in item.highlights" :key="point">
                • {{ point }}
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div class="my-12 h-px bg-white/20"></div>

      <!-- HIGHLIGHTS -->
      <div id="education-categories" class="scroll-mt-28">
        <h3 class="text-2xl font-bold mb-6">Highlights</h3>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <!-- 1. TECH STACK (NOW FIRST) -->
          <div class="glass-card p-5 rounded-xl">
            <h4 class="font-semibold text-lg mb-3 text-gray-900">Tech Stack</h4>

            <div class="flex flex-wrap gap-2 text-sm">
              <span class="glass-tag">Vue</span>
              <span class="glass-tag">React Native</span>
              <span class="glass-tag">Node.js</span>
              <span class="glass-tag">Python (AI/ML)</span>
              <span class="glass-tag">Laravel</span>
              <span class="glass-tag">GitHub</span>
              <span class="glass-tag">Docker</span>
              <span class="glass-tag">Django</span>
              <span class="glass-tag">Java</span>
              <span class="glass-tag">Angular</span>
              <span class="glass-tag">Flutter</span>
            </div>
          </div>

          <!-- 2. CERTIFICATIONS -->
          <div class="glass-card p-5 rounded-xl">
            <h4 class="font-semibold text-lg mb-3 text-gray-900">Certifications</h4>

            <ul class="glass-paragraph text-sm space-y-1">
              <li>• Oracle Cloud Infrastructure (OCI) Foundations</li>
              <li>• DevOps & Cloud Deployment Practices</li>
              <li>• AI & Machine Learning Fundamentals</li>
            </ul>
          </div>

          <!-- 3. DEV MINDSET (NOW LAST) -->
          <div class="glass-card p-5 rounded-xl">
            <h4 class="font-semibold text-lg mb-3 text-gray-900">Dev MindSet</h4>

            <p class="glass-paragraph text-sm">
              I focus on more than code and design,
              I build solutions that solve real-world problems.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type EducationItem = {
  school: string
  program: string
  location?: string
  start: string
  end: string
  details?: string
  highlights: string[]
}

const education: EducationItem[] = [
  {
    school: 'University of Zimbabwe',
    program: 'B.Sc. Cloud Computing And Internet Of Things',
    location: 'Harare, Zimbabwe',
    start: '2023',
    end: '2027',
    details:
      'Focused on cloud systems, IoT, and software development while building real-world AI and mobile solutions.',
    highlights: [
      'Currently pursuing degree',
      'Building AI/ML and fullstack projects',
      'Strong focus on problem solving and system design'
    ]
  }
]
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.5);

  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  transition: all 0.4s ease;
}

.glass-card:hover {
  transform: translateY(-10px);
}

.glass-paragraph {
  padding: 12px 14px;
  border-radius: 12px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.92),
    rgba(37, 99, 235, 0.18)
  );

  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);

  border: 1px solid rgba(255, 255, 255, 0.7);

  color: rgba(15, 23, 42, 0.85);

  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.20),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  transition: all 0.35s ease;
}

.glass-paragraph:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.98);
}

.glass-tag {
  padding: 6px 14px;
  border-radius: 9999px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.92),
    rgba(37, 99, 235, 0.18)
  );

  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);

  border: 1px solid rgba(255, 255, 255, 0.7);

  color: rgba(15, 23, 42, 0.85);
  font-size: 0.9rem;
  font-weight: 500;

  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.20),
    0 0 25px rgba(37, 99, 235, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);

  transition: all 0.35s ease;
}

.glass-tag:hover {
  transform: translateY(-4px) scale(1.08);

  box-shadow:
    0 22px 45px rgba(0, 0, 0, 0.28),
    0 0 35px rgba(37, 99, 235, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}
</style>