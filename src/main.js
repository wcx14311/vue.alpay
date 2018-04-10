// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import FastClick from 'fastclick'
import '@/assets/style/style.scss'
import '@/assets/fonts/font_u/iconfont.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 全局组件
import button from '@/components/button'
import header from '@/components/header'

Vue.component('ui-button', button)
Vue.component('ui-header', header)

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
