import axios from "./axios";

const AuthServise = {
    register(user) {
        return axios.post('/users', { user: user })
    }
}

export default AuthServise