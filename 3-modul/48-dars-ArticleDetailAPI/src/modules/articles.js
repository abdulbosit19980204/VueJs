import ArticleService from "../service/articles"

const state = {
    data: null,
    isLoading: false,
    error: null,
    articleDetail: null,
}

const mutations = {
    getArticlesStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
        state.articleDetail = null
    },
    getArticlesSuccess(state, payload) {
        state.isLoading = false
        state.data = payload

    },
    getArticlesFailure(state) {
        state.isLoading = false

    },

    getarticleDetailStart(state) {
        state.isLoading = true
        state.articleDetail = null
        state.error = null
        state.data = null
    },
    getarticleDetailSuccess(state, payload) {
        state.isLoading = false
        state.articleDetail = payload

    },
    getarticleDetailFailure(state) {
        state.isLoading = false

    },
}

const actions = {
    articles(context) {
        return new Promise((resolve) => {
            context.commit('getArticlesStart')
            ArticleService.articles().then((response) => {
                context.commit('getArticlesSuccess', response.data.articles)
                resolve(response.data.articles)
            }).catch(() => context.commit('getArticlesFailure'));
        })
    },
    articleDetail(context, slug) {
        return new Promise((resolve) => {
            context.commit('getarticleDetailStart')
            ArticleService.articleDetail(slug).then((response) => {
                context.commit('getarticleDetailSuccess', response.data.article)
                resolve(response.data.article)
            }).catch(() => {
                context.commit('getarticleDetailFailure')
            });
        })
    },
}

export default { state, mutations, actions }