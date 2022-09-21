import {
    createApp
} from 'vue'
// import router from './router'
import App from './App.vue'
import router from '@/router'

import '@sagittariuana/element_project/dist/theme-chalk/index.css'
import {
    Button,
    Icon,
    Select,
    MyRow,
    MyCol,
    MyAside,
    MyContainer,
    MyFooter,
    MyHeader,
    MyMain
} from '@sagittariuana/element_project/dist/my-lib-es.js';

import Demo from '@/components/Demo.vue'


const app = createApp(App);
[
    Button, Icon, Select, MyRow, MyCol, MyAside, MyContainer, MyFooter, MyHeader, MyMain
].forEach((plugin) => {
    app.use(plugin)
});

app.component('Demo', Demo)

app.use(router)

app.mount('#app')