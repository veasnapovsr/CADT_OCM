<template>
  <div class="official-card" :style="{ '--official-card-watermark': `url(${ocmLogoUrl})` }">
    <div class="official-card__overlay"></div>
    <div v-if="officer" class="official-card__content">
      <div class="official-card__brand">
        <img :src="ocmLogoUrl" alt="OCM logo" class="official-card__logo" />
        <div class="official-card__brand-kh">ទីស្ដីការគណៈរដ្ឋមន្ត្រី</div>
        <div class="official-card__brand-en">Office of the Council of Ministers</div>
      </div>

      <div class="official-card__photo-frame">
        <img :src="cardImageSrc" alt="Officer" class="official-card__photo" />
      </div>

      <div class="official-card__code">OCM-ORG-{{ officer.id }}</div>

      <div class="official-card__meta">
        <div class="official-card__row">
          <span>ឈ្មោះ</span>
          <strong>{{ officer.name }}</strong>
        </div>
        <div class="official-card__row">
          <span>តួនាទី</span>
          <strong>{{ officer.position }}</strong>
        </div>
        <div class="official-card__row">
          <span>អង្គភាព</span>
          <strong>{{ officer.organization }}</strong>
        </div>
      </div>

      <div class="official-card__qr-wrap">
        <QrcodeVue :value="`OCM-ORG-${officer.id}`" :size="92" level="H" render-as="svg" class="official-card__qr" />
      </div>
    </div>
    <Frame4Corner />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import QrcodeVue from 'qrcode.vue'
import Frame4Corner from '@/widgets/frame/corner4.vue'

const props = defineProps({
  officer: Object,
  ocmLogoUrl: String,
  savedOfficialCardBase64: String,
  getDate: Function,
})

const cardImageSrc = computed(() => {
  const source = props.savedOfficialCardBase64 || props.officer?.image || props.ocmLogoUrl

  if (!source || typeof source !== 'string') {
    return props.ocmLogoUrl
  }

  if (
    source.startsWith('data:') ||
    source.startsWith('http') ||
    source.startsWith('blob:') ||
    source.startsWith('/')
  ) {
    return source
  }

  return `data:image/jpeg;base64,${source}`
})
</script>

<style scoped>
.official-card {
  position: relative;
  width: 21.5rem;
  min-height: 28rem;
  border: 1px solid #d7dee7;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.12);
  overflow: hidden;
}

.official-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--official-card-watermark);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 68% 68%;
  opacity: 0.05;
}

.official-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.94));
}

.official-card__content {
  position: relative;
  z-index: 1;
  padding: 1.2rem 1.35rem 1.35rem;
}

.official-card__brand {
  text-align: center;
}

.official-card__logo {
  width: 2.1rem;
  height: 2.1rem;
  object-fit: contain;
  margin: 0 auto 0.35rem;
}

.official-card__brand-kh {
  color: #d2a62d;
  font-size: 0.62rem;
  line-height: 1.4;
}

.official-card__brand-en {
  color: #d2a62d;
  font-size: 0.5rem;
  line-height: 1.3;
}

.official-card__photo-frame {
  width: 8.2rem;
  height: 10rem;
  margin: 0.8rem auto 0.5rem;
  padding: 0.3rem;
  border-radius: 0.7rem;
  border: 1px solid #d7dee7;
  background: #fff;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.08);
}

.official-card__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.official-card__code {
  margin-bottom: 0.65rem;
  text-align: center;
  font-weight: 700;
  font-size: 0.92rem;
  color: #111827;
}

.official-card__meta {
  display: grid;
  gap: 0.45rem;
}

.official-card__row {
  display: grid;
  grid-template-columns: 4.15rem minmax(0, 1fr);
  gap: 0.45rem;
  align-items: start;
  font-size: 0.76rem;
  color: #374151;
}

.official-card__row span {
  color: #4b5563;
}

.official-card__row strong {
  font-weight: 600;
  color: #111827;
}

.official-card__qr-wrap {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.9rem;
}

.official-card__qr {
  padding: 0.32rem;
  border: 1px solid #d7dee7;
  border-radius: 0.45rem;
  background: #fff;
}
</style>
