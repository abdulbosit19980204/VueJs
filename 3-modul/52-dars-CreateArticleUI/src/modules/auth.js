import AuthServise from "../service/auth"
import { removeItem, setItem } from "../helpers/persistaneStorage"
import { gettersTypes } from "./types"

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: null,

}

const getters = {
    [gettersTypes.currentUser]: state => {
        return state.user
    },
    [gettersTypes.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn)
    },
    [gettersTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    },
}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggedIn = false
    },

    loginStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggedIn = true
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggedIn = false
    },
    currentUserStart(state) {
        state.isLoading = true
    },
    currentUserSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    currentUserFailure(state) {
        state.isLoading = false
        state.isLoggedIn = false
        state.user = null
    },
    logout(state) {
        state.user = null
        state.isLoggedIn = false
    }
}
const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            AuthServise.register(user).then(response => {
                // console.log("Response=> ", response.data.user);
                context.commit('registerSuccess', response.data.user)
                    // window.localStorage.setItem("token", response.data.user.token)
                setItem("token", response.data.user.token)
                resolve(response.data.user)
            }).catch(error => {
                // console.log("Error=> ", error.response.data);
                context.commit('registerFailure', error.response.data)
                reject(error.response.data)
            })
        })
    },
    login(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('loginStart')
            AuthServise.login(user)
                .then(response => {
                    context.commit('registerSuccess', response.data.user)
                    setItem("token", response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(error => {
                    // console.log("Error=> ", error.response.data);
                    context.commit('registerFailure', error.response.data)
                    reject(error.response.data)
                })
        })
    },
    getUser(context) {
        return new Promise((resolve, reject) => {
            context.commit('currentUserStart')
            AuthServise.getUser().then((response) => {
                context.commit('currentUserSuccess', response.data.user)
                resolve(response.data.user)
            }).catch((e) => {

                context.commit('currentUserFailure')
            });
        })
    },
    logout(context) {
        context.commit('logout')
        removeItem('token')
    },
}
export default { state, mutations, actions, getters }