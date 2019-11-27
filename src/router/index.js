import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/views/dashboard/Dashboard'
const Home = () =>
    import ('@/views/home/Home')
const Categroy = () =>
    import ('@/views/categroy/Categroy')
const Cart = () =>
    import ('@/views/cart/Cart')
const Mine = () =>
    import ('@/views/mine/Mine')
const Order = () =>
    import ('@/views/order/Order')



Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/dashboard' },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [
                { path: '/dashboard', redirect: '/dashboard/home' },
                { path: 'home', name: 'home', component: Home, meta: { keepAlive: true } },
                { path: 'categroy', name: 'categroy', component: Categroy, meta: { keepAlive: true } },
                { path: 'cart', name: 'cart', component: Cart },
                { path: 'mine', name: 'mine', component: Mine }
            ]
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        }

    ]
})