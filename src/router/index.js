import { createRouter, createWebHashHistory } from 'vue-router'
// import test from '../components/TestPage'

const routes = [
    //定义路由
    {
        //路由path
        path: '/home',
        //路由name
        name: '/home',
        //路由组件
        component: () => import('@/components/HomePage.vue')
    },
    {
        path: '/test',
        name: '/test',
        component: () => import('@/components/defauldPage.vue')
    },
    {
        path: '/news',
        name: '/news',
        component: () => import('@/views/news.vue')
    },
     // 路由重定向：强制跳转
     { path: '/', redirect: '/test' }
]

// 创建路由对象
const router = createRouter({
    //hash模式的路由
    history: createWebHashHistory(),
    routes
})

export default router