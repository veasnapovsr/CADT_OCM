<!-- <template>
  <div class="horizontal-officer-card border border-gray-300 rounded-lg p-4 flex bg-white shadow-md" style="width: 100%; max-width: 900px; min-height: 220px;">
    <div class="flex flex-col items-center justify-center w-1/4 pr-4">
      <img :src="(savedOfficialCardBase64 != null ? 'data:image/jpg;base64,' + savedOfficialCardBase64 : ocmLogoUrl)" class="rounded-md border border-gray-200 w-28 h-32 object-cover mb-2" />
      <div class="font-moul text-xs text-center mt-1">លេខ <span class="font-moul" style="color: #000">{{$toKhmer(record.id)}}</span>-គរម</div>
      <div class="mt-2">
        <QrcodeVue :value="'https://hr.ocm.gov.kh/#/officer/card/' + record.public_key" :size="60" level="H" render-as="svg" />
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-between">
      <div class="flex flex-wrap gap-x-8 gap-y-2">
        <div class="w-1/2 min-w-55">
          <div class="font-moul text-gray-700">គោត្តនាម-នាម៖
            <span class="font-bold text-base ml-2">{{ record.people.lastname + ' ' + record.people.firstname }}</span>
          </div>
          <div class="text-xs text-gray-600 ml-4">{{ (record.people.enlastname || '') + (record.people.enfirstname ? ' ' + record.people.enfirstname : '') }}</div>
        </div>
        <div class="w-1/2 min-w-55">
          <div class="font-moul text-gray-700">ថ្ងៃខែឆ្នាំកំណើត៖
            <span class="ml-2">{{ getDate(record.people.dob) }}</span>
          </div>
          <div class="font-moul text-gray-700">ភេទ៖
            <span class="ml-2">{{ record.people.gender == 1 ? 'ប្រុស' : 'ស្រី' }}</span>
          </div>
        </div>
        <div class="w-1/2 min-w-55">
          <div class="font-moul text-gray-700">អាសយដ្ឋាន៖
            <span class="ml-2">{{ $toKhmer(record.people.address) }}</span>
          </div>
        </div>
        <div class="w-1/2 min-w-55">
          <div class="font-moul text-gray-700">អង្គភាព៖
            <span class="ml-2">{{ record.jobs?.[0]?.organizationStructurePosition.organizationStructure.organization.name || record.organization.name }}</span>
          </div>
          <div class="font-moul text-gray-700">មុខងារ៖
            <span class="ml-2">{{ record.jobs?.[0]?.organizationStructurePosition.position.name || record.position.name }}</span>
          </div>
        </div>
        <div class="w-1/2 min-w-55">
          <div class="font-moul text-gray-700">លេខទូរស័ព្ទ៖
            <span class="ml-2">{{ record.people.phone || '-' }}</span>
          </div>
          <div class="font-moul text-gray-700">អ៊ីមែល៖
            <span class="ml-2">{{ record.people.email || '-' }}</span>
          </div>
        </div>
        <div class="w-1/2 min-w-55">
          <div class="font-moul text-gray-700">ថ្នាក់៖
            <span class="ml-2">{{ record.rank?.name || '-' }}</span>
          </div>
          <div class="font-moul text-gray-700">ប្រភេទមន្ត្រី៖
            <span class="ml-2">{{ record.officer_type || '-' }}</span>
          </div>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-4">បណ្ណសម្គាល់ខ្លួននេះផុតកំណត់នៅថ្ងៃទី០១ ខែកញ្ញា ឆ្នាំ២០២៦</div>
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'
import { toRefs } from 'vue'
const props = defineProps({
  record: Object,
  savedOfficialCardBase64: String,
  ocmLogoUrl: String,
  getDate: Function
})
</script>

<style scoped>
.horizontal-officer-card {
  font-size: 0.95rem;
}
</style> -->
