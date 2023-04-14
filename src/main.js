import { createApp } from 'vue'
import App from './App.vue'
// 1 导入路由模块，拿到路由实例
import router from '@/router/index'
// import router from '../src/router/index.js'


createApp(App).use(router).mount('#app')
