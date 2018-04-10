import Vue from 'vue'
import Vuex from 'vuex'
import firend from './firendlist'
import order from './orderData'

Vue.use(Vuex)

const state = {
    isLoading: false,
    direction: 'forward',
    firend: firend,
    order: order
}
export default new Vuex.Store({
    state,
    mutations: {
        updateLoadingStatus (state, status) {
            state.isLoading = status
        },
        updateDirection (state, direction) {
            state.direction = direction
        }
    }
})
