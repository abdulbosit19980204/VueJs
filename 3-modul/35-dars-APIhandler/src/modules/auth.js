import AuthServise from "../service/auth"
const state = {
    isLoading: false
}
const mutations = {
    registerStart(state) {
        state.isLoading = true
    },
    registerSuccess(state) {
        state.isLoading = false
    },
    registerFailure(state) {
        state.isLoading = false
    }
}
const actions = {
    register(context, user) {
        AuthServise.register(user)
    }
}
export default { state, mutations, actions }