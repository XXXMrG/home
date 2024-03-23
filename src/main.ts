import { createApp } from 'vue'
import './style/index.css'
import './style/base.css'
import App from './App.vue'
import {router} from './router'

createApp(App).use(router).mount('#app')
