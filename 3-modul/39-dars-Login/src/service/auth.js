import axios from "./axios";

const AuthServise = {
    register(user) {
        return axios.post('/users', { user: user })
    },
    login(user) {
        return axios.post('/users/login', { user })
    },
}

export default AuthServise