import { createApp } from 'vue'

import App from './App.vue'
import directives from './directives'
import PrimeVue from 'primevue/config'
import Preset from '@/themes/app-theme'
import { i18n } from '@/locales'
import { setupStore } from '@/stores'
import { setupRouter, router } from './router'
import { urlParamsLogin } from './router/helper'

import './assets/main.css'
import 'virtual:uno.css'
import 'animate.css'
import 'primeicons/primeicons.css'
import '@/assets/scss/reset.scss'
import '@/assets/scss/adapter.scss'
import '@/assets/scss/theme.scss'

async function bootstrap() {
  const app = createApp(App)

  app.use(PrimeVue, { theme: Preset, ripple: true })
  app.use(directives)
  app.use(i18n)

  await setupStore(app)
  await urlParamsLogin(router)
  await setupRouter(app)

  app.mount('#app')
}
bootstrap()
