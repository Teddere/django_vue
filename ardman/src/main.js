import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import icons
import '@fortawesome/fontawesome-free/css/all.min.css';
// import global style
import 'fastbootstrap/dist/css/fastbootstrap.min.css';


createApp(App).use(store).use(router).mount('#app')
