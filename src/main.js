import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

// Vous pouvez également configurer des en-têtes ou des intercepteurs Axios ici, si nécessaire.


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
