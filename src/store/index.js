import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        token: null
    },
    mutations: {
        loginUser (state) {
            state.isLoggedIn = true
        },
        logoutUser (state) {
            state.isLoggedIn = false
        },
        token(state,n){
            state.token = n
        }

    },
    getters: {
        token: state => {
            return state.token
        }
    }
})
