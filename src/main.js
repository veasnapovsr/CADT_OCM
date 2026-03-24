import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import store from './store'
import Html2PdfPlugin from '@/plugins/html2pdf.js';

createApp(App)
  .use(VueAxios ,axios)
  .use(store)
  .use(router)
  .use(Html2PdfPlugin)
  .mount('#app')
