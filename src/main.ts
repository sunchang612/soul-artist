import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import { CloseBold } from '@element-plus/icons'

import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.component(CloseBold.name, CloseBold)
app.use(store).use(router).mount('#app')
