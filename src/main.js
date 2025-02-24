// Import PrimeIcons CSS for icons
import 'primeicons/primeicons.css'

// Import Vue and core components
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// Create Vue application instance
const app = createApp(App)

// Register plugins
app.use(router)
app.use(vuetify)

// Mount the application
app.mount('#app')
