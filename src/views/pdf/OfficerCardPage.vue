<template>
  <Header title="កាតមន្ត្រី" />
  <section class="appppw">
    <Aside />
    <div class="sw">
      <div class="app_content">
        <div class="ocm_cwr">
          <h2 class="h wttt ocm_ptitle t-lspace">កាតមន្ត្រី</h2>
        </div>
        <div class="officer-card-page">
          <OfficerCard
            v-if="officer"
            :officer="officer"
            :ocm-logo-url="ocmLogoUrl"
            :saved-official-card-base64="savedOfficialCardBase64"
          />
          <div v-else class="officer-card-empty">
            មិនមានទិន្នន័យមន្ត្រីសម្រាប់បង្ហាញ
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Footer from '@/components/Footer.vue'
import OfficerCard from './OfficerCard.vue'
import ocmLogoUrl from '@/assets/logo_main.svg?url'
import officialsData from '@/data/officials.js'

const route = useRoute()

function readOfficials() {
  try {
    const storedOfficials = JSON.parse(localStorage.getItem('officials'))

    if (Array.isArray(storedOfficials) && storedOfficials.length) {
      return storedOfficials
    }
  } catch (error) {
    console.error('Failed to read officers from localStorage.', error)
  }

  return officialsData
}

const officer = computed(() => {
  const officerId = String(route.query.id || '')

  return readOfficials().find((entry) => String(entry.id) === officerId) || null
})

const savedOfficialCardBase64 = computed(() => {
  const image = officer.value?.image

  return typeof image === 'string' && !image.startsWith('data:') ? null : image || null
})
</script>

<style scoped>
.officer-card-page {
  min-height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.officer-card-empty {
  padding: 2rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  background: #fff;
  color: #374151;
}
</style>
