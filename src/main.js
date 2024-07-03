import { createApp } from 'vue'

import naiveUi from 'naive-ui'
import App from './App.vue'
import directives from './directives'
import VueLazyLoad from 'vue3-lazyload'
import { i18n } from '@/locales'
import { setupStore } from '@/stores'
import { setupRouter, router } from './router'
import { urlParamsLogin } from './router/helper'

import './assets/main.css'
import 'virtual:uno.css'
import 'animate.css'
import '@/assets/scss/reset.scss'
import '@/assets/scss/adapter.scss'
import '@/assets/scss/theme.scss'

async function bootstrap() {
  const app = createApp(App)

  app.use(naiveUi)
  app.use(directives)
  app.use(VueLazyLoad)
  app.use(i18n)

  await setupStore(app)
  await urlParamsLogin(router)
  await setupRouter(app)

  app.mount('#app')
}
bootstrap()
