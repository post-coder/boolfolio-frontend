import { createApp  } from 'vue'
import './style.scss'
import App from './App.vue';

import { router } from './router.js';

import * as bootstrap from 'bootstrap';


// VUE META
// import VueMeta from 'vue-meta';


createApp(App).use(router).mount('#app')
