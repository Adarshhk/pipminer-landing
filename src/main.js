import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import LenisVue from 'lenis/vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(LenisVue)
app.use(router)

app.mount('#app')
