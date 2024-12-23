import { createApp } from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import '@/assets/css/index.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({
  duration: 1000,
  
});



createApp(App)
  .use(vuetify)
  .mount('#app');