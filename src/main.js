import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' 
import VCalendar from 'v-calendar'
import 'v-calendar/style.css';


import App from './App.vue'
import router from './router'

const vuetify = createVuetify() 
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VCalendar, {})
app.use(setupCalendar, {})
app.component('VDatePicker', DatePicker)
app.component('VCalendar', Calendar)

app.mount('#app')
// main.js

