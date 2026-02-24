import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // <- Import router
import './assets/main.css'      // <- Import CSS (jika kamu pakai)

const app = createApp(App)

app.use(router)   // <- Aktifkan router
app.mount('#app') // <- Jalankan aplikasi
