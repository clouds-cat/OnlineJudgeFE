import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store"

import ElementPlus from 'element-plus';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App)

app
    .use(ElementPlus, { size: 'small', zIndex: 3000 })
    .use(router)
    .use(store)
    .use(Antd)
    .mount('#app')
