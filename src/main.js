import { createApp } from 'vue'
// import router from './router'
import App from './App.vue'
import getElement from './plugins/index'
import router from '@/router'

import '@sagittariuana/element_project/dist/theme-chalk/index.css'
import 'highlight.js/styles/github.css'

const app = createApp(App)
getElement(app)
app.use(router)

app.mount('#app')
