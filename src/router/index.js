import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/index',
        redirect: '/index/home',
        component: require('@/view/index.vue').default,
        children: [{
            path: 'home',
            component: require('@/view/index/home.vue').default
        }, {
            path: 'money',
            component: require('@/view/index/money.vue').default
        }, {
            path: 'friend',
            component: require('@/view/index/friend.vue').default
        }, {
            path: 'my',
            component: require('@/view/index/my.vue').default
        }]
    }, {
        path: '/cunkuan',
        component: require('@/view/cunkuan.vue').default
    }, {
        path: '/bussiness',
        component: require('@/view/bussiness.vue').default
    }, {
        path: '/qrcode',
        component: require('@/view/qrcode.vue').default
    }, {
        path: '/zhangben',
        component: require('@/view/zhangben.vue').default
    }, {
        path: '/userInfo',
        component: require('@/view/userInfo.vue').default
    }, {
        path: '/chat',
        component: require('@/view/chat.vue').default
    }, {
        path: '/recharge',
        component: require('@/view/recharge.vue').default
    }, {
        path: '/recharge/history',
        component: require('@/view/history.vue').default
    }, {
        path: '/game/list',
        component: require('@/view/game.vue').default
    }, {
        path: '/cards',
        component: require('@/view/cards.vue').default
    }, {
        path: '/order/list',
        component: require('@/view/order/list.vue').default
    }, {
        path: '/order/detail',
        component: require('@/view/order/detail.vue').default
    }, {
        path: '/state/fail',
        component: require('@/view/state/fail.vue').default
    }, {
        path: '/state/success',
        component: require('@/view/state/success.vue').default
    }, {
        path: '/message/list',
        component: require('@/view/message/list.vue').default
    }, {
        path: '/message/detail',
        component: require('@/view/message/detail.vue').default
    }, {
        path: '*',
        redirect: '/index'
    }]
})

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
    endTime = Date.now()
})
methods.forEach(key => {
    let method = router[key].bind(router)
    router[key] = function (...args) {
        isPush = true
        method.apply(null, args)
    }
})

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', false)
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)

    if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            store.commit('updateDirection', 'forward')
        } else {
            // 判断是否是ios左滑返回
            if (!isPush && (Date.now() - endTime) < 377) {
                store.commit('updateDirection', '')
            } else {
                store.commit('updateDirection', 'back')
            }
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        store.commit('updateDirection', 'forward')
    }

    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        next()
    }
})

router.afterEach(function (to) {
    isPush = false
    store.commit('updateLoadingStatus', { isLoading: false })
})

export default router
