import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const app = createApp(App)

app.use(createPinia())
pinia.use(piniaPluginPersistedState)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: "",
})
app.mount('#app')
