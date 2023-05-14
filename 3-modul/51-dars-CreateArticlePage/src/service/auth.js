import axios from "./axios";

const AuthServise = {
    register(user) {
        return axios.post('/users', { user: user }) // bu yerga bitta user yozish ham mumkin birxil blgani uchun
    },
    login(user) {
        return axios.post('/users/login', { user })
    },
    getUser() {
        return axios.get('/user')
    },
}

export default AuthServise