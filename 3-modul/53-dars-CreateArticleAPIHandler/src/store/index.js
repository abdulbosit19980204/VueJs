import { createStore } from 'vuex'
import auth from '../modules/auth'
import articles from "../modules/articles";
import control from '../modules/control';
// Create a new store instance.
const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: { auth, articles, control },
})

export default store