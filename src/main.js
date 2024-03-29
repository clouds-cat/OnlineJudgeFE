import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store"

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';


import * as echarts from 'echarts'


VueMarkdownEditor.use(githubTheme, {
    Hljs: hljs,
});
VueMarkdownEditor.use(createKatexPlugin());
VueMarkdownEditor.use(createCopyCodePlugin());

const app = createApp(App)
app.config.globalProperties.$echarts = echarts;

app
    .use(ElementPlus)
    .use(router)
    .use(store)
    .use(Antd)
    .use(VueMarkdownEditor)
    .mount('#app')
