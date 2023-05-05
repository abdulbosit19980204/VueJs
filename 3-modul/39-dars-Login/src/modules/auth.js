import AuthServise from "../service/auth"
import { setItem } from "../helpers/persistaneStorage"
const state = {
    isLoading: false,
    user: null,
    errors: null,
}
const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
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
    }
}
export default { state, mutations, actions }