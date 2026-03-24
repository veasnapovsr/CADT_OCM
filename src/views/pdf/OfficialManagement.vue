<template>
  <Header title="គ្រប់គ្រងព័ត៌មានមន្ត្រី" />

  <section class="appppw">
    <Aside />

    <div class="sw">
      <div class="app_content">
        <div class="ocm_dashboard_splits">
          <div class="ocm_bfw ocm_stat">
            <div class="ocm_caw noneh status_wait">
              <div class="ocm_card_body">
                <div class="ocm_icardw">
                  <h5 class="ocm_card_value">{{ newOfficers }}</h5>
                  <div class="ocm_icard">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C15.64 13.37 17 14.28 17 15.5V19h7v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm0-4H7v-2h5v2zm0-4H7V7h5v2zm7 8h-5v-2h5v2zm0-4h-5v-2h5v2zm0-4h-5V7h5v2z"/>
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    </svg>
                  </div>
                </div>
                <p class="ocm_card_title">មន្ត្រី</p>
              </div>
            </div>
          </div>
        </div>

        <div class="ocm_cwr">
          <h2 class="h wttt ocm_ptitle t-lspace">គ្រប់គ្រងព័ត៌មានមន្ត្រី</h2>
          <router-link class="oc_nbtn t-lspace" :to="'/pdf/officer-edit'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 14 14">
              <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
            </svg>
            បន្ថែមមន្ត្រីថ្មី
          </router-link>
        </div>

        <div class="ocm_tb_wrap search_wrap">
          <div class="ocm_sort_search_bar">
            <input
              v-model="searchQuery"
              class="ocm_search_input"
              type="text"
              placeholder="ស្វែងរកមន្ត្រី..."
              @keyup.enter="searchOfficials"
            />
            <button class="ocm_search_btn" @click="searchOfficials">ស្វែងរក</button>
            <!-- <button class="ocm_reset_btn" @click="resetSearch">សម្អាត</button> -->
          </div>
        </div>

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
                      <th>រូប</th>
                      <th>ឈ្មោះ</th>
                      <th>កូដ</th>
                      <th>ស្រុកកំណើត</th>
                      <th>ថ្ងៃតាំងជាផ្លូវការ</th>
                      <th>អ៊ីមែល</th>
                      <th>លេខទូរស័ព្ទ</th>
                      <th>ភេទ</th>
                      <th>តួនាទី</th>
                      <th>អង្គភាព</th>
                      <th>ថ្នាក់</th>
                      <th>ប្រភេទមន្ត្រី</th>
                      <th>ថ្នាក់ប្រាក់ខែ</th>
                      <th>សកម្មភាព</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-if="loading">
                      <td colspan="15" class="ocm_dt_empt">កំពុងទាញយកទិន្នន័យ...</td>
                    </tr>

                    <tr v-else-if="errorMessage">
                      <td colspan="15" class="ocm_dt_empt">{{ errorMessage }}</td>
                    </tr>

                    <tr v-for="(official, idx) in pagedOfficials" :key="official.id">
                      <td>{{ formatKhmerNumber((currentPage - 1) * pageSize + idx + 1) }}</td>

                      <td>
                        <img
                          v-if="official.image"
                          :src="official.image"
                          :alt="official.full_name"
                          class="officer-avatar"
                        />
                        <div v-else class="avatar-fallback">
                          {{ official.full_name.charAt(0) || 'O' }}
                        </div>
                      </td>

                      <td>
                        <div class="name_primary">{{ official.full_name }}</div>
                        <div v-if="official.full_name_en && official.full_name_en !== '-'" class="name_secondary">
                          {{ official.full_name_en }}
                        </div>
                      </td>

                      <td>{{ official.code }}</td>
                      <td>{{ official.province }}</td>
                      <td>{{ official.official_date }}</td>
                      <td>{{ official.email }}</td>
                      <td>{{ official.phone }}</td>
                      <td>{{ official.gender }}</td>
                      <td>{{ official.current_position }}</td>
                      <td>{{ official.current_organization }}</td>
                      <td>{{ official.rank }}</td>
                      <td>{{ official.officer_type }}</td>
                      <td>{{ official.salary_rank }}</td>

                      <td>
                        <span class="tbl_action">
                          <span class="row_ac_w">
                            <router-link
                              class="row_ac_in ocm-tooltip ocm-edac edit"
                              :to="`/pdf/officer-edit?id=${official.id}`"
                              @click="cacheOfficerForEdit(official)"
                              title="កែប្រែ"
                            >
                              <span class="tip_txt">កែប្រែ</span>
                              <span class="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 1.88 19.12 19.12" width="18" height="18">
                                  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"></path>
                                    <path d="M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3"></path>
                                    <path d="M16 5l3 3"></path>
                                  </g>
                                </svg>
                              </span>
                            </router-link>

                            <span
                              class="row_ac_in ocm-tooltip ocm-rmac delete"
                              title="លុប"
                              @click="deleteOfficial(official.id)"
                            >
                              <span class="tip_txt">លុប</span>
                              <span class="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18">
                                  <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" fill="currentColor"></path>
                                </svg>
                              </span>
                            </span>

                            <span
                              class="row_ac_in ocm-tooltip ocm-viewac view"
                              title="មើលកាតមន្ត្រី"
                              @click="openOfficerCard(official)"
                            >
                              <span class="tip_txt">មើលកាត</span>
                              <span class="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                  <path fill="currentColor" d="M12 4.5c-7 0-10 7.5-10 7.5s3 7.5 10 7.5 10-7.5 10-7.5-3-7.5-10-7.5zm0 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>

                    <tr v-if="!loading && !errorMessage && pagedOfficials.length === 0">
                      <td colspan="15" class="ocm_dt_empt">មិនមានទិន្នន័យ</td>
                    </tr>
                  </tbody>
                </table>

                <div v-if="totalPages > 1" class="pagination_w logs_pagination_bar">
                  <div class="pagination">
                    <button class="nav_i prev" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-0.05 37.65 448.05 436.7"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" fill="currentColor"></path></svg>
                      ពីមុន
                    </button>

                    <button
                      v-for="page in visiblePages"
                      :key="page"
                      class="nav_i page"
                      :class="{ current: currentPage === page }"
                      @click="goToPage(page)"
                    >
                      {{ formatKhmerNumber(page) }}
                    </button>

                    <button class="nav_i next" :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">
                      បន្ទាប់
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 37.65 448.05 436.7"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" fill="currentColor"></path></svg>
                    </button>
                  </div>

                  <span class="ocm_count t-lspace">
                    ចំនួនមន្ត្រី៖ {{ formatKhmerNumber(allOfficers) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <div
        v-if="showOfficerCard && selectedOfficer"
        class="modal fixed inset-0 z-50 flex items-center justify-center"
        style="background: rgba(0,0,0,0.2);"
      >
        <div class="officer-card-modal" :class="{ 'officer-card-modal--horizontal': cardOrientation === 'horizontal', 'officer-card-modal--vertical': cardOrientation === 'vertical' }">
          <div class="officer-card-toolbar absolute top-2 right-4 left-4 flex items-center justify-between gap-3">
            <div class="card-orientation-toggle">
              <button
                type="button"
                class="card-orientation-toggle__btn"
                :class="{ 'card-orientation-toggle__btn--active': cardOrientation === 'vertical' }"
                title="Vertical card"
                aria-label="Switch to vertical card"
                @click="cardOrientation = 'vertical'"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="7" y="3.5" width="10" height="17" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8" />
                  <line x1="9.5" y1="7" x2="14.5" y2="7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <line x1="9.5" y1="10.5" x2="14.5" y2="10.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <line x1="9.5" y1="14" x2="12.5" y2="14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                </svg>
              </button>
              <button
                type="button"
                class="card-orientation-toggle__btn"
                :class="{ 'card-orientation-toggle__btn--active': cardOrientation === 'horizontal' }"
                title="Horizontal card"
                aria-label="Switch to horizontal card"
                @click="cardOrientation = 'horizontal'"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="7" width="17" height="10" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8" />
                  <line x1="7" y1="9.5" x2="17" y2="9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <line x1="7" y1="12.5" x2="15" y2="12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  <line x1="7" y1="15.5" x2="12" y2="15.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                </svg>
              </button>
            </div>

            <div class="officer-card-actions">
            <button @click="printOfficerCard" class="modal-action-btn print" title="Print">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 19v2h12v-2H6zm12-8V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3zm-10-6h8v6H8V5zm13 14H3v-7h18v7zm-2-2v-2h-2v2h2zm-4 0v-2h-2v2h2zm-4 0v-2H7v2h2z"/>
              </svg>
            </button>

            <button @click="downloadOfficerCard" class="modal-action-btn download" title="Download PDF">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 16.5l4-4h-3V7h-2v5.5H8l4 4zm-6 2.5h12v2H6v-2z"/>
              </svg>
            </button>

            <button @click="closeOfficerCard" class="modal-action-btn close" title="Cancel">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11l4.89 4.89-4.89 4.89a1 1 0 1 0 1.41 1.41l4.89-4.89 4.89 4.89a1 1 0 0 0 1.41-1.41l-4.89-4.89 4.89-4.89a1 1 0 0 0 0-1.41z"/>
              </svg>
            </button>
            </div>
          </div>

          <div class="officer-card-page" :class="{ 'officer-card-page--vertical': cardOrientation === 'vertical', 'officer-card-page--horizontal': cardOrientation === 'horizontal' }" id="officerCardToPrint">
            <div
              v-if="cardOrientation === 'vertical'"
              class="card officer-vertical-card relative border border-gray-300 rounded mx-auto bg-center bg-cover bg-no-repeat"
              :style="`background-image: url('${ocmLogoUrl}'); background-size: 70% 70%;`"
            >
              <div class="absolute left-0 top-0 right-0 bottom-0 bg-white bg-opacity-90"></div>

              <div class="flex relative officer-vertical-card__body">
                <div class="mx-auto p-4 w-full flex flex-wrap officer-vertical-card__content">
                  <div class="w-full mb-2">
                    <div
                      class="h-12 mx-auto bg-center bg-no-repeat bg-white bg-contain border-gray-200"
                      :style="`background-image: url('${ocmLogoUrl}')`"
                    ></div>
                    <div class="w-full font-moul text-xs text-center text-yellow-500 my-2">ទីស្ដីការគណៈរដ្ឋមន្ត្រី</div>
                    <div class="w-full text-xs text-center text-yellow-500">Office of the Council of Ministers</div>
                  </div>

                  <div class="w-full">
                    <img
                      :src="selectedOfficer.image || ocmLogoUrl"
                      class="card-photo"
                    />
                  </div>

                  <div class="w-full h-6 text-center mx-auto my-2 font-bold">
                    {{ selectedOfficer.code }}
                  </div>

                  <div class="font-moul text-left">
                    <table>
                      <tbody>
                        <tr>
                          <td class="w-24 p-1 font-moul leading-6" style="vertical-align: top; text-align: left;">ឈ្មោះ</td>
                          <td class="font-moul p-1 text-xl leading-6" style="vertical-align: top; text-align: left;">
                            {{ selectedOfficer.full_name }}
                          </td>
                        </tr>
                        <tr>
                          <td class="w-24 p-1 font-moul leading-6" style="vertical-align: top; text-align: left;">តួនាទី</td>
                          <td class="font-moul p-1 leading-6" style="vertical-align: top; text-align: left;">
                            {{ selectedOfficer.current_position }}
                          </td>
                        </tr>
                        <tr>
                          <td class="w-24 p-1 font-moul leading-6" style="vertical-align: top; text-align: left;">អង្គភាព</td>
                          <td class="font-moul p-1 leading-6" style="vertical-align: top; text-align: left;">
                            {{ selectedOfficer.current_organization }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="w-full officer-card-seal-row officer-card-seal-row--vertical">
                    <div class="officer-card-qr-wrap officer-card-qr-wrap--vertical">
                      <QrcodeVue
                        :value="selectedOfficer.public_key || selectedOfficer.code || String(selectedOfficer.id)"
                        :size="100"
                        level="H"
                        class="mx-auto p-2 border border-gray-200 rounded"
                        render-as="svg"
                      />
                    </div>
                    <div class="officer-card-stamp-wrap officer-card-stamp-wrap--vertical">
                      <img src="/stamp.png" alt="Official stamp" class="officer-card-stamp officer-card-stamp--vertical" />
                    </div>
                  </div>
                </div>
              </div>

              <Frame4Corner />
            </div>

            <div v-else class="horizontal-officer-card">
              <div class="horizontal-officer-card__surface">
              <table class="horizontal-officer-card__table">
                <tbody>
                  <tr>
                    <td class="horizontal-officer-card__photo-cell">
                      <div class="horizontal-officer-card__photo-box">
                        <img :src="selectedOfficer.image || ocmLogoUrl" alt="Officer Photo" class="horizontal-officer-card__photo" />
                        <div>លេខ <strong>{{ selectedOfficer.code || `OCM-ORG-${selectedOfficer.id}` }}</strong></div>
                      </div>
                    </td>

                    <td colspan="2" class="horizontal-officer-card__info-cell">
                      <table class="horizontal-officer-card__inner-table">
                        <tbody>
                          <tr>
                            <td class="horizontal-officer-card__small-text">គោត្តនាម-នាម :</td>
                            <td colspan="2">
                              <div class="horizontal-officer-card__bold">{{ getOfficerCardKhmerName(selectedOfficer) }}</div>
                              <div>{{ getOfficerCardEnglishName(selectedOfficer) }}</div>
                            </td>
                          </tr>

                          <tr>
                            <td class="horizontal-officer-card__small-text">ថ្ងៃខែឆ្នាំកំណើត :</td>
                            <td class="horizontal-officer-card__small-text">{{ getOfficerCardDob(selectedOfficer) }}</td>
                            <td class="horizontal-officer-card__small-text">ភេទ ៖ {{ selectedOfficer.gender }}</td>
                          </tr>

                          <tr>
                            <td class="horizontal-officer-card__small-text">អាសយដ្ឋាន :</td>
                            <td colspan="2" class="horizontal-officer-card__small-text">{{ getOfficerCardAddress(selectedOfficer) }}</td>
                          </tr>

                          <tr>
                            <td class="horizontal-officer-card__small-text">អង្គភាព :</td>
                            <td colspan="2" class="horizontal-officer-card__small-text">{{ getOfficerCardOrganization(selectedOfficer) }}</td>
                          </tr>

                          <tr>
                            <td class="horizontal-officer-card__small-text">មុខងារ :</td>
                            <td colspan="2" class="horizontal-officer-card__small-text">{{ getOfficerCardPosition(selectedOfficer) }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td class="horizontal-officer-card__expire-cell">
                      <div class="horizontal-officer-card__expire-text">
                        បណ្ណសម្គាល់ខ្លួននេះផុតកំណត់នៅ<br>
                        ថ្ងៃទី០១ ខែកញ្ញា ឆ្នាំ២០២៦
                      </div>
                    </td>

                    <td class="horizontal-officer-card__qr-cell">
                      <div class="officer-card-qr-wrap officer-card-qr-wrap--horizontal">
                        <QrcodeVue :value="getOfficerCardQrValue(selectedOfficer)" :size="50" level="H" render-as="svg" />
                      </div>
                    </td>

                    <td class="horizontal-officer-card__spacer-cell">
                      <div class="officer-card-stamp-wrap officer-card-stamp-wrap--horizontal">
                        <img src="/stamp.png" alt="Official stamp" class="officer-card-stamp officer-card-stamp--horizontal" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Frame4Corner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { nextTick } from 'vue'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import QrcodeVue from 'qrcode.vue'
import ocmLogoUrl from '@/assets/logo_main.svg?url'
import Frame4Corner from '@/widgets/frame/corner4.vue'
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { authLogout, getAccessToken as readAccessToken, getToken } from '@/plugins/authentication'
import { formatKhmerNumber } from '@/lib/utils.js'

export default {
  name: 'OfficialManagement',
  components: {
    QrcodeVue,
    Frame4Corner,
    Aside,
    Header,
    Footer
  },
  data() {
    return {
      ocmLogoUrl,
      apiBaseUrl: (import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000').replace(/\/$/, ''),
      officials: [],
      cardOrientation: 'vertical',
      currentPage: 1,
      pageSize: 20,
      searchQuery: '',
      showOfficerCard: false,
      selectedOfficer: null,
      loading: false,
      errorMessage: '',
      pagination: {
        totalRecords: 0,
        totalPages: 1,
        page: 1
      }
    }
  },
  computed: {
    allOfficers() {
      return this.pagination.totalRecords || 0
    },
    newOfficers() {
      const now = new Date()
      return this.officials.filter((officer) => {
        if (!officer.official_date || officer.official_date === '-') return false
        const diffDays = (now - new Date(officer.official_date)) / (1000 * 60 * 60 * 24)
        return diffDays >= 0 && diffDays <= 30
      }).length
    },
    headOfSection() {
      return this.officials.filter((officer) => officer.current_position === 'ប្រធានផ្នែក').length
    },
    departmentDirector() {
      return this.officials.filter((officer) => officer.current_position === 'នាយកដ្ឋាន').length
    },
    officerCount() {
      return this.officials.filter((officer) => officer.current_position === 'មន្ត្រី').length
    },
    pagedOfficials() {
      return this.officials
    },
    totalPages() {
      return this.pagination.totalPages || 1
    },
    visiblePages() {
      if (this.totalPages <= 1) return []

      const maxVisible = 10
      const half = Math.floor(maxVisible / 2)
      let startPage = Math.max(1, this.currentPage - half)
      let endPage = Math.min(this.totalPages, startPage + maxVisible - 1)

      if (endPage - startPage + 1 < maxVisible) {
        startPage = Math.max(1, endPage - maxVisible + 1)
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index)
    }
  },
  mounted() {
    this.fetchOfficers()
  },
  methods: {
    getAccessToken() {
      const token = getToken()
      if (token?.access_token) {
        return token.access_token
      }

      return readAccessToken()
    },
    ensureAuthenticated() {
      if (this.getAccessToken()) {
        return true
      }

      this.officials = []
      this.errorMessage = 'សូមចូលប្រព័ន្ធជាមុនសិន។'
      authLogout()
      this.$router.push('/login')
      return false
    },
    getHeaders() {
      const headers = {
        Accept: 'application/json'
      }

      const token = this.getAccessToken()
      if (token) {
        headers.Authorization = `Bearer ${token}`
      }

      return headers
    },
    buildApiUrl(path, query = {}) {
      const url = new URL(`${this.apiBaseUrl}${path}`)
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          url.searchParams.set(key, value)
        }
      })
      return url.toString()
    },
    resolveImageUrl(value) {
      const source = typeof value === 'string' ? value.trim() : ''

      if (!source) {
        return ''
      }

      if (
        source.startsWith('http://') ||
        source.startsWith('https://') ||
        source.startsWith('data:') ||
        source.startsWith('blob:')
      ) {
        return source
      }

      const normalizedPath = source.startsWith('/') ? source : `/${source}`
      return `${this.apiBaseUrl}${normalizedPath}`
    },
    getOfficerImage(officer, people) {
      return this.resolveImageUrl(
        officer?.image ||
        officer?.image_url ||
        officer?.photo ||
        officer?.photo_url ||
        officer?.avatar_url ||
        officer?.user?.avatar_url ||
        officer?.user?.image ||
        people?.image ||
        people?.image_url ||
        people?.photo ||
        people?.photo_url ||
        '',
      )
    },
    formatKhmerNumber,
    formatGender(gender) {
      if (gender === 1 || gender === '1' || gender === 'male') return 'ប្រុស'
      if (gender === 2 || gender === '2' || gender === 'female') return 'ស្រី'
      return gender || '-'
    },
    getCurrentPosition(officer) {
      return (
        officer?.current_job?.organization_structure_position?.position?.name ||
        officer?.current_job?.organizationStructurePosition?.position?.name ||
        officer?.jobs?.[0]?.organization_structure_position?.position?.name ||
        officer?.jobs?.[0]?.organizationStructurePosition?.position?.name ||
        '-'
      )
    },
    getCurrentOrganization(officer) {
      return (
        officer?.current_job?.organization_structure_position?.organization_structure?.organization?.name ||
        officer?.current_job?.organizationStructurePosition?.organizationStructure?.organization?.name ||
        officer?.jobs?.[0]?.organization_structure_position?.organization_structure?.organization?.name ||
        officer?.jobs?.[0]?.organizationStructurePosition?.organizationStructure?.organization?.name ||
        '-'
      )
    },
    getBirthProvince(people) {
      return (
        people?.pobProvince?.name_kh ||
        people?.pobProvince?.name_en ||
        people?.pobDistrict?.name_kh ||
        people?.pob ||
        '-'
      )
    },
    normalizeOfficer(officer) {
      const people = officer?.people || {}
      const khName = [people.lastname, people.firstname].filter(Boolean).join(' ')
      const enName = [people.enlastname, people.enfirstname].filter(Boolean).join(' ')
      const fallbackName = [officer?.user?.lastname, officer?.user?.firstname].filter(Boolean).join(' ')
      const fullName = khName || enName || fallbackName || '-'

      return {
        id: officer.id,
        public_key: officer.public_key || '',
        code: officer.code || `OCM-${officer.id}`,
        full_name: fullName,
        full_name_en: enName || '-',
        province: this.getBirthProvince(people),
        official_date: officer.official_date || '-',
        unofficial_date: officer.unofficial_date || '-',
        email: officer.email || people.email || officer?.user?.email || '-',
        phone: officer.phone || people.mobile_phone || officer?.user?.phone || '-',
        gender: this.formatGender(people.gender),
        current_position: this.getCurrentPosition(officer),
        current_organization: this.getCurrentOrganization(officer),
        rank: officer?.rank?.name || officer?.rank?.rank || '-',
        officer_type: officer.officer_type || '-',
        additional_officer_type: officer.additional_officer_type || '-',
        salary_rank: officer.salary_rank || '-',
        leader: Boolean(officer.leader),
        image: this.getOfficerImage(officer, people),
        raw: officer
      }
    },
    getOfficerCardQrValue(officer) {
      return officer?.public_key || officer?.code || String(officer?.id || '')
    },
    getOfficerCardKhmerName(officer) {
      const people = officer?.raw?.people || {}
      return [people.lastname, people.firstname].filter(Boolean).join(' ') || officer?.full_name || '-'
    },
    getOfficerCardEnglishName(officer) {
      const people = officer?.raw?.people || {}
      return [people.enlastname, people.enfirstname].filter(Boolean).join(' ') || officer?.full_name_en || '-'
    },
    getOfficerCardDob(officer) {
      return officer?.raw?.people?.dob || '-'
    },
    getOfficerCardAddress(officer) {
      return officer?.raw?.people?.address || officer?.province || '-'
    },
    getOfficerCardOrganization(officer) {
      return (
        officer?.raw?.jobs?.[0]?.organizationStructurePosition?.organizationStructure?.organization?.name ||
        officer?.raw?.jobs?.[0]?.organization_structure_position?.organization_structure?.organization?.name ||
        officer?.raw?.organization?.name ||
        officer?.current_organization ||
        '-'
      )
    },
    getOfficerCardPosition(officer) {
      return (
        officer?.raw?.jobs?.[0]?.organizationStructurePosition?.position?.name ||
        officer?.raw?.jobs?.[0]?.organization_structure_position?.position?.name ||
        officer?.raw?.position?.name ||
        officer?.current_position ||
        '-'
      )
    },
    getOfficerCardPhone(officer) {
      return officer?.raw?.people?.mobile_phone || officer?.phone || '-'
    },
    getOfficerCardEmail(officer) {
      return officer?.raw?.people?.email || officer?.email || '-'
    },
    getOfficerCardRank(officer) {
      return officer?.raw?.rank?.name || officer?.raw?.rank?.rank || officer?.rank || '-'
    },
    async fetchOfficers(page = 1) {
      if (!this.ensureAuthenticated()) {
        return
      }

      this.loading = true
      this.errorMessage = ''

      try {
        const url = this.buildApiUrl('/api/authcenter/officers', {
          page,
          perPage: this.pageSize,
          search: this.searchQuery.trim() || undefined
        })

        const response = await fetch(url, {
          method: 'GET',
          headers: this.getHeaders()
        })

        const data = await response.json()

        if (!response.ok || data.ok === false) {
          throw new Error(data.message || 'មិនអាចទាញយកទិន្នន័យមន្ត្រីបានទេ។')
        }

        const records = Array.isArray(data.records) ? data.records : []
        this.officials = records.map((record) => this.normalizeOfficer(record))
        this.pagination = data.pagination || {
          totalRecords: records.length,
          totalPages: 1,
          page
        }
        this.currentPage = this.pagination.page || page
      } catch (error) {
        this.officials = []
        this.errorMessage = error.message || 'មានបញ្ហាក្នុងការទាញទិន្នន័យ។'
      } finally {
        this.loading = false
      }
    },
    searchOfficials() {
      this.currentPage = 1
      this.fetchOfficers(1)
    },
    resetSearch() {
      this.searchQuery = ''
      this.fetchOfficers(1)
    },
    cacheOfficerForEdit(officer) {
      const officerId = officer?.id
      if (!officerId) return

      try {
        window.sessionStorage.setItem(`officer-edit:${officerId}`, JSON.stringify(officer?.raw || officer))
      } catch (error) {
        console.warn('Unable to cache officer record for edit page', {
          officerId,
          error,
        })
      }
    },
    goToPage(page) {
      if (page < 1 || page > this.totalPages || page === this.currentPage) return
      this.fetchOfficers(page)
    },
    async deleteOfficial(id) {
      if (!confirm('តើអ្នកពិតជាចង់លុបមន្ត្រីនេះមែនទេ?')) return

      if (!this.ensureAuthenticated()) {
        return
      }

      try {
        const response = await fetch(`${this.apiBaseUrl}/api/authcenter/officers/${id}/delete`, {
          method: 'DELETE',
          headers: this.getHeaders()
        })

        const data = await response.json()

        if (!response.ok || data.ok === false) {
          throw new Error(data.message || 'លុបទិន្នន័យមន្ត្រីមិនបានទេ។')
        }

        await this.fetchOfficers(this.currentPage)
      } catch (error) {
        alert(error.message || 'មានបញ្ហាក្នុងការលុបមន្ត្រី។')
      }
    },
    openOfficerCard(officer) {
      this.selectedOfficer = officer
      this.cardOrientation = 'vertical'
      this.showOfficerCard = true
    },
    closeOfficerCard() {
      this.showOfficerCard = false
      this.cardOrientation = 'vertical'
      this.selectedOfficer = null
    },
    getOfficerCardElement() {
      return document.getElementById('officerCardToPrint')
    },
    getOfficerCardFileName() {
      const officerCode = this.selectedOfficer?.code || `officer-card-${this.selectedOfficer?.id || 'export'}`
      return `${officerCode}`.replace(/[^a-zA-Z0-9-_]+/g, '-')
    },
    copyComputedStyles(sourceElement, targetElement) {
      const computedStyle = window.getComputedStyle(sourceElement)

      Array.from(computedStyle).forEach((propertyName) => {
        const propertyValue = computedStyle.getPropertyValue(propertyName)
        const propertyPriority = computedStyle.getPropertyPriority(propertyName)
        targetElement.style.setProperty(propertyName, propertyValue, propertyPriority)
      })

      if (sourceElement instanceof SVGElement) {
        targetElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      }

      if (sourceElement instanceof HTMLCanvasElement && targetElement instanceof HTMLCanvasElement) {
        targetElement.width = sourceElement.width
        targetElement.height = sourceElement.height

        const context = targetElement.getContext('2d')
        if (context) {
          context.drawImage(sourceElement, 0, 0)
        }
      }
    },
    cloneElementWithInlineStyles(sourceElement) {
      const clone = sourceElement.cloneNode(true)
      const sourceElements = [sourceElement, ...sourceElement.querySelectorAll('*')]
      const clonedElements = [clone, ...clone.querySelectorAll('*')]

      sourceElements.forEach((element, index) => {
        const clonedElement = clonedElements[index]

        if (!(clonedElement instanceof HTMLElement || clonedElement instanceof SVGElement)) {
          return
        }

        this.copyComputedStyles(element, clonedElement)
      })

      const rect = sourceElement.getBoundingClientRect()
      clone.style.margin = '0'
      clone.style.width = `${Math.ceil(rect.width)}px`
      clone.style.height = `${Math.ceil(rect.height)}px`
      clone.style.maxWidth = 'none'

      return {
        clone,
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height)
      }
    },
    waitForImages(target) {
      const images = target instanceof Document
        ? Array.from(target.images || [])
        : Array.from(target.querySelectorAll('img'))

      if (!images.length) {
        return Promise.resolve()
      }

      return Promise.all(
        images.map((image) => new Promise((resolve) => {
          if (image.complete) {
            resolve()
            return
          }

          image.addEventListener('load', resolve, { once: true })
          image.addEventListener('error', resolve, { once: true })
        }))
      )
    },
    async createOfficerCardSnapshot() {
      await nextTick()

      const element = this.getOfficerCardElement()
      if (!element) {
        return null
      }

      const snapshotHost = document.createElement('div')
      snapshotHost.style.position = 'fixed'
      snapshotHost.style.left = '-10000px'
      snapshotHost.style.top = '0'
      snapshotHost.style.zIndex = '-1'
      snapshotHost.style.pointerEvents = 'none'
      snapshotHost.style.background = '#ffffff'
      snapshotHost.style.padding = '0'
      snapshotHost.style.margin = '0'

      const snapshot = this.cloneElementWithInlineStyles(element)
      snapshotHost.appendChild(snapshot.clone)
      document.body.appendChild(snapshotHost)

      await this.waitForImages(snapshotHost)
      if (document.fonts?.ready) {
        await document.fonts.ready
      }

      return {
        ...snapshot,
        host: snapshotHost,
        cleanup: () => {
          snapshotHost.remove()
        }
      }
    },
    async printOfficerCard() {
      const snapshot = await this.createOfficerCardSnapshot()
      if (!snapshot) {
        alert('រកមិនឃើញកាតមន្ត្រីសម្រាប់បោះពុម្ព។')
        return
      }

      const printWindow = window.open('', '_blank', 'width=1200,height=900,scrollbars=yes')
      if (!printWindow) {
        snapshot.cleanup()
        alert('មិនអាចបើកផ្ទាំងបោះពុម្ពបានទេ។ សូមអនុញ្ញាត pop-up ជាមុន។')
        return
      }

      printWindow.document.open()
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${this.getOfficerCardFileName()}</title>
            <style>
              html, body {
                margin: 0;
                padding: 0;
                background: #ffffff;
              }

              body {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                padding: 16px;
                box-sizing: border-box;
              }

              @page {
                margin: 0;
              }
            </style>
          </head>
          <body>
            ${snapshot.clone.outerHTML}
          </body>
        </html>
      `)
      printWindow.document.close()

      await this.waitForImages(printWindow.document)
      if (printWindow.document.fonts?.ready) {
        await printWindow.document.fonts.ready
      }

      snapshot.cleanup()

      printWindow.focus()

      const closePrintWindow = () => {
        printWindow.close()
      }

      printWindow.onafterprint = closePrintWindow
      window.setTimeout(() => {
        printWindow.print()
      }, 150)
    },
    async downloadOfficerCard() {
      const snapshot = await this.createOfficerCardSnapshot()
      if (!snapshot) {
        alert('រកមិនឃើញកាតមន្ត្រីសម្រាប់ទាញយក។')
        return
      }

      try {
        const canvas = await html2canvas(snapshot.clone, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false,
          width: snapshot.width,
          height: snapshot.height,
          windowWidth: snapshot.width,
          windowHeight: snapshot.height
        })

        const pdf = new jsPDF({
          unit: 'px',
          format: [snapshot.width, snapshot.height],
          orientation: snapshot.width > snapshot.height ? 'landscape' : 'portrait'
        })

        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, snapshot.width, snapshot.height)
        pdf.save(`${this.getOfficerCardFileName()}.pdf`)
      } catch (error) {
        console.error('Failed to export officer card PDF', error)
        alert('មានបញ្ហាក្នុងការទាញយក PDF។ សូមសាកល្បងម្ដងទៀត។')
      } finally {
        snapshot.cleanup()
      }
    }
  }
}
</script>

<style scoped>
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

.row_ac_in.view {
  color: #0891b2;
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

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 10px 8px;
  vertical-align: middle;
}

th {
  background: #f3f4f6;
  white-space: nowrap;
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

.officer-card-modal {
  position: relative;
  width: min(calc(100vw - 32px), 392px);
  padding: 58px 10px 10px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.2);
}

.officer-card-modal--vertical {
  width: fit-content;
  max-width: calc(100vw - 32px);
  padding: 58px 8px 8px;
}

.officer-card-modal--horizontal {
  width: min(calc(100vw - 32px), 940px);
  padding: 58px 16px 16px;
}

.officer-card-toolbar {
  position: absolute;
  min-height: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.officer-card-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  min-width: 170px;
}

.card-orientation-toggle {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border: 1px solid #d6deeb;
  border-radius: 999px;
  background: #f8fafc;
}

.card-orientation-toggle__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}

.card-orientation-toggle__btn svg {
  width: 18px;
  height: 18px;
}

.card-orientation-toggle__btn--active {
  background: #ffffff;
  color: #2066d7;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
}

.search_wrap {
  margin-bottom: 1rem;
}

.ocm_sort_search_bar {
  background: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  flex-wrap: wrap;
}

.ocm_search_input {
  background: #fff;
  color: #111827;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.65rem 1rem;
  font-size: 1rem;
  min-width: 260px;
}

.ocm_search_btn,
.ocm_reset_btn {
  color: #fff;
  border: none;
  border-radius: 0.375rem;
  padding: 0.65rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.ocm_search_btn {
  background: #0721e3;
}

.ocm_search_btn:hover {
  background: #1a08e3;
}

.ocm_reset_btn {
  background: #6b7280;
}

.ocm_reset_btn:hover {
  background: #4b5563;
}

.modal-action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 0;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  color: #222;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
}

.modal-action-btn svg {
  width: 20px;
  height: 20px;
}

.modal-action-btn.print {
  color: #2563eb;
}

.modal-action-btn.download {
  color: #0891b2;
}

.modal-action-btn.close {
  color: #ff4c51;
}

.modal-action-btn:hover {
  background: #e0e7ef;
}

.officer-card-page {
  width: 100%;
}

.officer-card-page--vertical {
  width: fit-content;
  margin: 0 auto;
}

.officer-card-page--horizontal {
  width: 100%;
}

.officer-vertical-card {
  width: 360px;
  min-height: 560px;
  overflow: hidden;
  border-radius: 14px;
  box-sizing: border-box;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

.officer-vertical-card__body {
  width: 100%;
}

.officer-vertical-card__content {
  position: relative;
  z-index: 1;
  padding: 20px 24px 28px !important;
  box-sizing: border-box;
}

.officer-vertical-card :deep(.frame-4-corner) {
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}

.officer-vertical-card :deep(.corner) {
  width: 18px;
  height: 18px;
  border-width: 2px;
}

.officer-card-stamp-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.officer-card-seal-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: nowrap;
}

.officer-card-seal-row--vertical {
  margin-top: 8px;
}

.officer-card-qr-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.officer-card-qr-wrap--vertical,
.officer-card-stamp-wrap--vertical {
  width: 1000px;
  min-width: 100px;
}

.officer-card-stamp {
  display: block;
  object-fit: contain;
}

.officer-card-stamp--vertical {
  width: 1000px;
  height: 100px;    
}

.horizontal-officer-card {
  width: 100%;
  max-width: 900px;
  min-height: 220px;
  margin: 0 auto;
  align-items: stretch;
}

.horizontal-officer-card__surface {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 14px;
  padding: 18px;
  box-sizing: border-box;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

.horizontal-officer-card :deep(.frame-4-corner) {
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}

.horizontal-officer-card :deep(.corner) {
  width: 18px;
  height: 18px;
  border-width: 2px;
}

.horizontal-officer-card__media {
  min-width: 180px;
}

.horizontal-officer-card__photo {
  width: 112px;
  height: 128px;
  background: #fff;
}

.horizontal-officer-card__id-text {
  color: #000;
}

.horizontal-officer-card__block {
  line-height: 1.7;
}

.horizontal-officer-card__stamp-row {
  padding-top: 2px;
  text-align: right;
}

.officer-card-stamp--horizontal {
  width: 170px;
  margin-left: 50px;
}

.officer-avatar {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
  background: #fff;
}

.avatar-fallback {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e7eb;
  color: #374151;
  font-weight: 700;
}

.name_primary {
  font-weight: 600;
  color: #111827;
}

.name_secondary {
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
}

.pagination_w {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.logs_pagination_bar {
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.pagination {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.nav_i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 38px;
  height: 38px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #111827;
  cursor: pointer;
}

.nav_i svg {
  width: 14px;
  height: 14px;
}

.nav_i.page {
  min-width: 38px;
  padding: 0 10px;
}

.nav_i.current {
  background: #2066d7;
  border-color: #0c3be3;
  color: #fff;
}

.nav_i:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ocm_count {
  color: #6b7280;
  font-size: 14px;
}

.ocm_dt_empt {
  text-align: center;
  color: #6b7280;
  padding: 24px;
}

.card-photo {
  width: 120px;
  height: 140px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid #f3f4f6;
  background: white;
  padding: 4px;
}

@media (max-width: 860px) {
  .officer-card-modal,
  .officer-card-modal--horizontal {
    width: calc(100vw - 20px);
  }

  .officer-card-modal--vertical {
    width: calc(100vw - 20px);
    max-width: 376px;
  }

  .officer-vertical-card {
    width: min(360px, 100%);
  }

  .officer-card-toolbar {
    left: 12px;
    right: 12px;
    justify-content: space-between;
  }

  .officer-card-actions {
    position: static;
    margin-left: auto;
  }

  .horizontal-officer-card {
    flex-direction: column;
  }

  .horizontal-officer-card__media {
    width: 100%;
    min-width: 0;
    padding-right: 0;
    margin-bottom: 14px;
  }
}

@media (max-width: 520px) {
  .officer-card-modal {
    padding-top: 96px;
  }

  .officer-vertical-card {
    min-height: 520px;
  }

  .officer-vertical-card__content {
    padding: 18px 18px 24px !important;
  }

  .card-orientation-toggle {
    width: 100%;
    justify-content: center;
  }

  .modal-action-btn {
    margin-right: 6px;
  }
}
</style>