import { createRouter, createWebHistory } from 'vue-router'

const stub = (name) => ({
  template: `<div class="text-2xl font-semibold">${name}</div>`
})

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: stub('ទំព័រដើម') },
    { path: '/attendance', name: 'attendance', component: stub('វត្តមាន') },
    { path: '/cabinet', name: 'cabinet', component: stub('លេខទីស្តីការគណៈរដ្ឋមន្ត្រី') },
    { path: '/officials', name: 'officials', component: stub('មន្ត្រីរាជការមុខងារសាធារណៈ') },
    { path: '/documents', name: 'documents', component: stub('ឯកសារច្បាប់និងលិខិតបទដ្ឋាន') },
    { path: '/meetings', name: 'meetings', component: stub('កិច្ចប្រជុំគណៈរដ្ឋមន្ត្រី') }
  ]
})
