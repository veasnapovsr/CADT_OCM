<template>
  <Header title="គ្រប់គ្រងព័ត៌មានមន្ត្រី" />
    <section class="appppw">
  <Aside />
  <div class="sw">
    <div class="app_content">
            <!-- Officer Dashboard Summary -->
            <div class="ocm_dashboard_splits">
              <div class="ocm_bfw ocm_stat">
                <div class="ocm_caw noneh status_wait">
                  <div class="ocm_card_body">
                    <div class="ocm_icardw">
                      <h5 class="ocm_card_value">{{ newOfficers }}</h5>
                      <div class="ocm_icard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
                      </div>
                    </div>
                    <p class="ocm_card_title">មន្ត្រីថ្មី</p>
                  </div>
                </div>
                <div class="ocm_caw noneh status_all">
                  <div class="ocm_card_body">
                    <div class="ocm_icardw">
                      <h5 class="ocm_card_value">{{ allOfficers }}</h5>
                      <div class="ocm_icard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C15.64 13.37 17 14.28 17 15.5V19h7v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      </div>
                    </div>
                    <p class="ocm_card_title">មន្ត្រីទាំងអស់</p>
                  </div>
                </div>
                <div class="ocm_caw noneh status_accept">
                  <div class="ocm_card_body">
                    <div class="ocm_icardw">
                      <h5 class="ocm_card_value">{{ headOfSection }}</h5>
                      <div class="ocm_icard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm0-4H7v-2h5v2zm0-4H7V7h5v2zm7 8h-5v-2h5v2zm0-4h-5v-2h5v2zm0-4h-5V7h5v2z"/></svg>
                      </div>
                    </div>
                    <p class="ocm_card_title">ប្រធានផ្នែក</p>
                  </div>
                </div>
                <div class="ocm_caw noneh status_decline">
                  <div class="ocm_card_body">
                    <div class="ocm_icardw">
                      <h5 class="ocm_card_value">{{ departmentDirector }}</h5>
                      <div class="ocm_icard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
                      </div>
                    </div>
                    <p class="ocm_card_title">នាយកដ្ឋាន</p>
                  </div>
                </div>
                <div class="ocm_caw noneh status_info">
                  <div class="ocm_card_body">
                    <div class="ocm_icardw">
                      <h5 class="ocm_card_value">{{ officerCount }}</h5>
                      <div class="ocm_icard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
                      </div>
                    </div>
                    <p class="ocm_card_title">មន្ត្រី</p>
                  </div>
                </div>
              </div>
            </div>
      <div class="ocm_cwr">
        <h2 class="h wttt ocm_ptitle t-lspace">គ្រប់គ្រងព័ត៌មានមន្ត្រី</h2>
        <router-link
          class="oc_nbtn t-lspace"
          :to="'/pdf/officer-edit'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 14 14"><path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
          បន្ថែមមន្ត្រីថ្មី
        </router-link>
      </div>

      <!-- Sorting and Search Bar -->
      <div class="ocm_tb_wrap" style="margin-bottom: 1rem;">
        <div style="display: flex; gap: 1rem; padding: 12px; align-items: center; background: var(--ocm-app-bg);">
          <select v-model="sortKey" class="ocm_card_title" style="border: 1px solid var(--ocm-td-border); border-radius: 4px; padding: 6px 10px; background: var(--ocm-app-bg);">
            <option value="name">ឈ្មោះ</option>
            <option value="official_date">ថ្ងៃតាំងជាផ្លូវការ</option>
            <option value="position">តួនាទី</option>
            <option value="organization">អង្គភាព</option>
            <option value="rank">ថ្នាក់</option>
          </select>
          <select v-model="sortOrder" class="ocm_" style="border: 1px solid var(--ocm-td-border); border-radius: 4px; padding: 6px 10px; background: var(--ocm-app-bg);">
            <option value="asc">ឡើង</option>
            <option value="desc">ចុះ</option>
          </select>
          <input v-model="searchQuery" class="ocm_search_input" type="text" placeholder="ស្វែងរកមន្ត្រី..." style="border: 1px solid var(--ocm-td-border); border-radius: 4px; padding: 6px 10px; background: var(--ocm-app-bg); min-width: 220px;" />
          <button class="ocm_search_btn" @click="searchOfficials" style="border: 1px solid var(--ocm-td-border); border-radius: 4px; padding: 6px 18px; background: var(--ocm-sec-color); color: #fff;">
            ស្វែងរក
          </button>
          
        </div>
      </div

      <div class="ocm_dashboard_splits">
        <div class="ocm_card_wr">
          <div class="ocm_card_head">
            <span class="ocm_card_title">បញ្ជីមន្ត្រី</span>
          </div>
          <div class="ocm_card_content">
            <div class="ocm_tb_wrap">
              <table class="wp-list-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ឈ្មោះ</th>
                    <th>ស្រុកកំណើត</th>
                    <th>កូដ</th>
                    <th>ថ្ងៃតាំងជាផ្លូវការ</th>
                    <th>ថ្ងៃតាំងមិនផ្លូវការ</th>
                    <th>អ៊ីមែល</th>
                    <th>លេខទូរស័ព្ទ</th>
                    <th>ភេទ</th>
                    <th>តួនាទី</th>
                    <th>អង្គភាព</th>
                    <th>ថ្នាក់</th>
                    <th>ប្រភេទមន្ត្រី</th>
                    <!-- <th>ប្រភេទមន្ត្រីបន្ថែម</th> -->
                    <th>ថ្នាក់ប្រាក់ខែ</th>
                    <th>មន្ត្រីដឹកនាំ</th>
                    <th>រូបភាព</th>
                    <!-- <th>ឯកសារ PDF</th> -->
                    <!-- <th>លិខិតឆ្លងដែន</th> -->
                    <th>សកម្មភាព</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(official, idx) in pagedOfficials" :key="official.id">
                    <td>{{ (currentPage - 1) * pageSize + idx + 1 }}</td>
                    <td>{{ official.name }}</td>
                    <td>{{ official.province }}</td>
                    <td>{{ official.code }}</td>
                    <td>{{ official.official_date }}</td>
                    <td>{{ official.unofficial_date }}</td>
                    <td>{{ official.email }}</td>
                    <td>{{ official.phone }}</td>
                    <td>{{ official.gender }}</td>
                    <td>{{ official.position }}</td>
                    <td>{{ official.organization }}</td>
                    <td>{{ official.rank }}</td>    
                    <td>{{ official.officer_type }}</td>
                    <td>{{ official.additional_officer_type }}</td>
                    <td>{{ official.salary_rank }}</td>
                    <td>
                      <span v-if="official.image">{{ official.image.name || '✔' }}</span>
                    </td>
                    <!--
                    <td>
                      <span v-if="official.pdf">{{ official.pdf.name || '✔' }}</span>
                    </td>
                    <td>
                      <span v-if="official.passport">{{ official.passport.name || '✔' }}</span>
                    </td>
                    -->
                    <td>
                      <span class="tbl_action">
                        <span class="row_ac_w">
                          <router-link
                            class="row_ac_in ocm-tooltip ocm-edac edit"
                            :to="`/pdf/officer-edit?id=${official.id}`"
                            title="កែប្រែ"
                          >
                            <span class="tip_txt">កែប្រែ</span>
                            <span class="d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 1.88 19.12 19.12" width="18" height="18"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"></path><path d="M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3"></path><path d="M16 5l3 3"></path></g></svg>
                            </span>
                          </router-link>
                          <span
                            class="row_ac_in ocm-tooltip ocm-rmac delete"
                            title="លុប"
                            @click="deleteOfficial(official.id)"
                          >
                            <span class="tip_txt">លុប</span>
                            <span class="d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" fill="currentColor"></path></svg>
                            </span>
                          </span>
                          <router-link
                            class="row_ac_in ocm-tooltip ocm-viewac view"
                            :to="`/pdf/officer-card?id=${official.id}`"
                            title="មើលកាតមន្ត្រី"
                          >
                            <span class="tip_txt">មើលកាត</span>
                            <span class="d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 4.5c-7 0-10 7.5-10 7.5s3 7.5 10 7.5 10-7.5 10-7.5-3-7.5-10-7.5zm0 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
                            </span>
                          </router-link>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr v-if="pagedOfficials.length === 0">
                    <td colspan="6" class="ocm_dt_empt">មិនមានទិន្នន័យ</td>
                  </tr>
                </tbody>
              </table>
              <!-- Pagination Controls -->
              <div class="pagination_w" v-if="totalPages > 1" style="margin-top: 1rem; display: flex; justify-content: center;">
                <div class="pagination">
                  <button class="nav_i prev" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                  </button>
                  <span v-for="page in totalPages" :key="page">
                    <button class="nav_i" :class="{ current: currentPage === page }" @click="goToPage(page)">{{ page }}</button>
                  </span>
                  <button class="nav_i next" :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
      <Footer />
     
  
 </section>
  
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Aside from '@/components/Aside.vue';
import officialsData from '@/data/officials.js';
import { officerProvinces } from '@/data/provinces.js';
</script>
<script>
import { computed } from 'vue';
export default {
    computed: {
      allOfficers() {
        return this.officials.length;
      },
      newOfficers() {
        // Example: officers added in the last 30 days (based on official_date)
        const now = new Date();
        return this.officials.filter(o => {
          if (!o.official_date) return false;
          const diff = (now - new Date(o.official_date)) / (1000 * 60 * 60 * 24);
          return diff <= 30 && diff >= 0;
        }).length;
      },
      headOfSection() {
        // Count officers with position 'ប្រធានផ្នែក'
        return this.officials.filter(o => o.position === 'ប្រធានផ្នែក').length;
      },
      departmentDirector() {
        // Count officers with position 'នាយកដ្ឋាន'
        return this.officials.filter(o => o.position === 'នាយកដ្ឋាន').length;
      },
      officerCount() {
        // Count officers with position 'មន្ត្រី'
        return this.officials.filter(o => o.position === 'មន្ត្រី').length;
      },
      pagedOfficials() {
        // Use filteredOfficials for pagination
        const start = (this.currentPage - 1) * this.pageSize;
        return this.filteredOfficials.slice(start, start + this.pageSize);
      },
      totalPages() {
        return Math.ceil(this.filteredOfficials.length / this.pageSize);
      }
    },
  name: 'OfficialManagement',
  data() {
    let officials = [];
    try {
      officials = JSON.parse(localStorage.getItem('officials')) || [];
    } catch (e) {}
    if (!officials.length) {
      officials = [...officialsData];
      localStorage.setItem('officials', JSON.stringify(officials));
    }
    return {
      officials,
      currentPage: 1,
      pageSize: 20,
      sortKey: 'name',
      sortOrder: 'asc',
      searchQuery: '',
      filteredOfficials: officials,
      selectedProvinces: [],
    };
  },

  mounted() {
    // Always reload from localStorage when page is shown
    let officials = [];
    try {
      officials = JSON.parse(localStorage.getItem('officials')) || [];
    } catch (e) {}
    if (officials.length) {
      this.officials = officials;
      this.filteredOfficials = officials;
      this.sortAndFilterOfficials();
    }
  },
  methods: {
    // ...existing methods...
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    openAddModal() {
      this.editMode = false;
      this.form = { id: null, name: '', position: '', email: '', phone: '' };
      this.showModal = true;
    },
    // Removed openEditModal
    closeModal() {
      this.showModal = false;
    },
    onFileChange(event, field) {
      const file = event.target.files[0];
      this.form[field] = file;
    },
    saveOfficial() {
      if (this.editMode) {
        const idx = this.officials.findIndex(o => o.id === this.form.id);
        if (idx !== -1) this.officials[idx] = { ...this.form };
      } else {
        const newId = this.officials.length ? Math.max(...this.officials.map(o => o.id)) + 1 : 1;
        this.officials.push({ ...this.form, id: newId });
      }
      this.closeModal();
    },
    deleteOfficial(id) {
      if (confirm('តើអ្នកពិតជាចង់លុបមន្ត្រីនេះមែនទេ?')) {
        this.officials = this.officials.filter(o => o.id !== id);
      }
    },
    sortAndFilterOfficials() {
      let officials = [...this.officials];
      // Search
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        officials = officials.filter(o =>
          (o.name && o.name.toLowerCase().includes(q)) ||
          (o.position && o.position.toLowerCase().includes(q)) ||
          (o.organization && o.organization.toLowerCase().includes(q))
        );
      }
      // Sort
      officials.sort((a, b) => {
        let valA = a[this.sortKey] || '';
        let valB = b[this.sortKey] || '';
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
        if (valA < valB) return this.sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
      if (this.selectedProvinces.length) {
        officials = officials.filter(o => this.selectedProvinces.includes(o.province));
      }
      this.filteredOfficials = officials;
      this.currentPage = 1;
    },
    searchOfficials() {
      this.sortAndFilterOfficials();
    }
  },
  watch: {
    sortKey() {
      this.sortAndFilterOfficials();
    },
    sortOrder() {
      this.sortAndFilterOfficials();
    },
    searchQuery() {
      // Optionally auto-search as user types
      // this.sortAndFilterOfficials();
    },
    officials() {
      this.sortAndFilterOfficials();
    }
  }
};
</script>

<style scoped>
/* Action button styles inspired by DocumentRow.vue */
.tbl_action {
  display: flex;
  align-items: center;
  justify-content: center;
}
.row_ac_w {
  display: flex;
  gap: 0.5rem;
}
.row_ac_in {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: background 0.2s;
  position: relative;
}
.row_ac_in.edit {
  color: #2563eb;
}
.row_ac_in.delete {
  color: #ff4c51;
}
.row_ac_in:hover {
  background: #e0e7ef;
}
.ocm-tooltip {
  position: relative;
}
.ocm-tooltip .tip_txt {
  display: none;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
}
.ocm-tooltip:hover .tip_txt {
  display: block;
}
.official-management {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  text-align: left;
  padding: 8px;
}
th {
  background: #f3f4f6;
}
tr {
  transition: background 0.2s;
}
tr:hover {
  background: #f9fafb;
}
.modal {
  z-index: 1000;
}
/* Sorting and Search Bar */
.ocm_sort_search_bar {
  background: #23272f;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}
.ocm_sort_dropdown {
  background: #23272f;
  color: #080101;
  border: 1px solid #3b4252;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
.ocm_search_input {
  background: #23272f;
  color: #fff;
  border: 1px solid #3b4252;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
.ocm_search_btn {
  background: #0099ff;
  color: #fff;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.ocm_search_btn:hover {
  background: #007acc;
}
</style>
