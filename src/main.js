import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'

import '@/utils/filters'

//引入全局reset样式
import '@/styles/common.less'

// 引入fastclick
// import FastClick from 'fastclick'
// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function() {
//         FastClick.attach(document.body)
//     }, false)
// }

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')