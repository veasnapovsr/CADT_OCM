<template>
  <div class="officer-card-page">
    <div class="card relative border border-gray-300 rounded mx-auto w-96 bg-center bg-cover bg-no-repeat" :style="`background-image: url('${ocmLogoUrl}'); background-size: 70% 70%;`">
      <div class="absolute left-0 top-0 right-0 bottom-0 bg-white bg-opacity-90"></div>
      <div v-if="officer" class="flex relative">
        <div class="mx-auto p-4 w-full flex flex-wrap">
          <div class="w-full mb-2">
            <div class="w-12 h-12 mx-auto bg-center bg-no-repeat bg-white bg-contain border-gray-200" :style="`background-image: url('${ocmLogoUrl}')`"></div>
            <div class="w-full font-moul text-xs text-center text-yellow-500 my-2">ទីស្ដីការគណៈរដ្ឋមន្ត្រី</div>
            <div class="w-full text-xs text-center text-yellow-500">Office of the Council of Ministers</div>
          </div>
          <div class="w-full">
            <img :src="officer.image ? officer.image : ocmLogoUrl" class="w-24 mx-auto rounded-md border border-gray-100 p-1 bg-white" />
          </div>
          <div class="w-full h-6 text-center mx-auto my-2 font-bold">OCM-ORG-{{ officer.id }}</div>
          <div class="font-moul text-left">
            <table>
              <tbody>
                <tr>
                  <td class="w-24 p-1 font-moul leading-6" style="vertical-align: top; text-align: left;">ឈ្មោះ</td>
                  <td class="font-moul p-1 text-xl leading-6" style="vertical-align: top; text-align: left;">{{ officer.name }}</td>
                </tr>
                <tr>
                  <td class="w-24 p-1 font-moul leading-6" style="vertical-align: top; text-align: left;">តួនាទី</td>
                  <td class="font-moul p-1 leading-6" style="vertical-align: top; text-align: left;">{{ officer.position }}</td>
                </tr>
                <tr>
                  <td class="w-24 p-1 font-moul leading-6" style="vertical-align: top; text-align: left;">អង្គភាព</td>
                  <td class="font-moul p-1 leading-6" style="vertical-align: top; text-align: left;">{{ officer.organization }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="w-full my-2">
            <QrcodeVue :value="'OCM-ORG-' + officer.id" :size="100" level="H" class="mx-auto p-2 border border-gray-200 rounded" render-as="svg" />
          </div>
        </div>
      </div>
      <Frame4Corner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import ocmLogoUrl from '@/assets/logo_main.svg?url'
import Frame4Corner from '@/widgets/frame/corner4.vue'
import officialsData from '@/data/officials.js'

const route = useRoute()
const officer = ref(null)

onMounted(() => {
  const id = route.query.id
  let officials = []
  try {
    officials = JSON.parse(localStorage.getItem('officials')) || []
  } catch (e) {}
  if (!officials.length) {
    officials = [...officialsData]
  }
  officer.value = officials.find(o => String(o.id) === String(id))
})
</script>

<style scoped>
.officer-card-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
}
</style>
