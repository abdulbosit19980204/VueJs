import AuthServise from "../service/auth"
const state = {
    isLoading: false
}
const mutations = {
    setLoading(state) {
        state.isLoading = true
    }
}
const actions = {
    register(context, user) {
        AuthServise.register(user)
    }
}
export default { state, mutations, actions }