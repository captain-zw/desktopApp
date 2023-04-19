import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
// import https from './api/request'
import Axios from 'axios'

const app = createApp(App)
// app.propty.$http =https
app.config.globalProperties.$http=Axios
// 1 导入路由模块，拿到路由实例
import router from '@/router/index'
// import router from '../src/router/index.js'
app.use(ArcoVueIcon);
app.use(router);
app.use(ArcoVue);
app.mount('#app');
// createApp(App).use(ArcoVue).use(router).mount('#app')
