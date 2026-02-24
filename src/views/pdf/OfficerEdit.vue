<template>
  <Header title="កែប្រែមន្ត្រី" />
  <section class="appppw">
    <Aside />
    <div class="sw">
      <div class="app_content">
        <div class="ocm_cwr">
          <h2 class="h wttt ocm_ptitle t-lspace">កែប្រែព័ត៌មានមន្ត្រី</h2>
        </div>
        <div class="ocm_card_wr">
          <form @submit.prevent="saveOfficer">
            <div class="ocm_card_content">
              <div class="ocmopt-col cols3 mb-20">
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ឈ្មោះ</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.name" type="text" class="form-control" required />
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">កូដមន្ត្រី</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.code" type="text" class="form-control" />
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ថ្ងៃតាំងជាផ្លូវការ</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.official_date" type="date" class="form-control" />
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ថ្ងៃតាំងមិនផ្លូវការ</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.unofficial_date" type="date" class="form-control" />
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">អ៊ីមែល</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.email" type="email" class="form-control" required />
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">លេខទូរស័ព្ទ</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.phone" type="text" class="form-control" required />
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ភេទ</label></div>
                  <div class="ocmopt-meta-content">
                    <select v-model="form.gender" class="form-control">
                      <option value="male">ប្រុស</option>
                      <option value="female">ស្រី</option>
                    </select>
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">តួនាទី</label></div>
                  <div class="ocmopt-meta-content">
                    <select v-model="form.position" class="form-control" required>
                      <option value="">ជ្រើសរើសតួនាទី</option>
                      <option v-for="pos in officerPositions" :key="pos" :value="pos">{{ pos }}</option>
                    </select>
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">អង្គភាព</label></div>
                  <div class="ocmopt-meta-content">
                    <select v-model="form.organization" class="form-control">
                      <option value="">ជ្រើសរើសអង្គភាព</option>
                      <option v-for="org in officerOrganizations" :key="org" :value="org">{{ org }}</option>
                    </select>
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ថ្នាក់</label></div>
                  <div class="ocmopt-meta-content">
                    <select v-model="form.rank" class="form-control">
                      <option value="">ជ្រើសរើសថ្នាក់</option>
                      <option v-for="rank in officerRanks" :key="rank" :value="rank">{{ rank }}</option>
                    </select>
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ប្រភេទមន្ត្រី</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.officer_type" type="text" class="form-control" />   
                  </div>
                </div>
                <!-- <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ប្រភេទមន្ត្រីបន្ថែម</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.additional_officer_type" type="text" class="form-control" />
                  </div>
                </div> -->
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ថ្នាក់ប្រាក់ខែ</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.salary_rank" type="text" class="form-control" />
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">មន្ត្រីដឹកនាំ</label></div>
                  <div class="ocmopt-meta-content">
                    <input v-model="form.leader" type="text" class="form-control" />
                  </div>
                </div>
                <div class="ocmopt-meta">
                  <div class="ocmopt-meta-title"><label class="ocmopt-meta-label t-lspace">ខេត្ត</label></div>
                  <div class="ocmopt-meta-content">
                    <select v-model="form.province" class="form-control">
                      <option value="">ជ្រើសរើសខេត្ត</option>
                      <option v-for="province in officerProvinces" :key="province" :value="province">{{ province }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="ocm_card_foot foot_stick">
              <div class="ocm_btn_wr">
                <router-link class="button ocm_btn_ac btn_cancel button-primary" to="/pdf/officers">បោះបង់</router-link>
                <button class="button ocm_btn_ac button-primary" type="submit">រក្សាទុក</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  </section>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { officerPositions } from '@/data/positions.js'
import { officerOrganizations } from '@/data/organizations.js'
import { officerRanks } from '@/data/ranks.js'
import { officerProvinces } from '@/data/provinces.js'

const router = useRouter()
const route = useRoute()

const form = ref({
  id: null,
  name: '',
  code: '',
  official_date: '',
  unofficial_date: '',
  email: '',
  phone: '',
  gender: '',
  position: '',
  organization: '',
  rank: '',
  officer_type: '',
  additional_officer_type: '',
  salary_rank: '',
  leader: '',
  province: ''
})

const isEditMode = ref(false)

// Load officer data by id from localStorage (or fallback to demo data)
function loadOfficer() {
  const id = route.query.id
  if (!id) {
    isEditMode.value = false
    // Clear form for add mode
    form.value = {
      id: null,
      name: '',
      code: '',
      official_date: '',
      unofficial_date: '',
      email: '',
      phone: '',
      gender: '',
      position: '',
      organization: '',
      rank: '',
      officer_type: '',
      additional_officer_type: '',
      salary_rank: '',
      leader: '',
      province: ''
    }
    return
  }
  isEditMode.value = true
  // Try to get from localStorage first
  let officials = []
  try {
    officials = JSON.parse(localStorage.getItem('officials')) || []
  } catch (e) {}
  let officer = officials.find(o => String(o.id) === String(id))
  if (!officer) {
    // fallback: try to import demo data
    try {
      officer = require('@/data/officials.js').officials.find(o => String(o.id) === String(id))
    } catch (e) {}
  }
  if (officer) {
    form.value = { ...officer }
  }
}

function saveOfficer() {
  // Save to localStorage (simulate API)
  let officials = []
  try {
    officials = JSON.parse(localStorage.getItem('officials')) || []
  } catch (e) {}
  if (isEditMode.value) {
    const idx = officials.findIndex(o => String(o.id) === String(form.value.id))
    if (idx !== -1) {
      officials[idx] = { ...form.value }
    }
  } else {
    // Add as new
    const newId = officials.length ? Math.max(...officials.map(o => Number(o.id) || 0)) + 1 : 1
    officials.push({ ...form.value, id: newId })
  }
  localStorage.setItem('officials', JSON.stringify(officials))
  // Redirect to OfficialManagement.vue
  router.push('/pdf/official-management')
}

loadOfficer()
</script>

<style scoped>
/* You can copy any needed styles from DocumentEdit.vue here if needed */
</style>
