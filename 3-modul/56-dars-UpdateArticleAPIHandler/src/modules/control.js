import ArticleService from "../service/articles"

const state = {
    isLoading: false
}
const mutations = {
    controlArticleStart(state) { state.isLoading = true },
    controlArticleSuccess(state) { state.isLoading = false },
    controlArticleFailure(state) { state.isLoading = false },
}
const actions = {
    createArticle(context, article) {
        return new Promise(() => {
            context.commit('controlArticleStart')
            ArticleService.createArticle(article)
                .then(() => { context.commit('controlArticleSuccess') })
                .catch(() => { context.commit('controlArticleFailure') });
        })
    },
    deleteArticle(context, slug) {
        return new Promise((resolve) => {
            context.commit('controlArticleStart')
            ArticleService.deleteArticle(slug)
                .then(() => {
                    context.commit('controlArticleSuccess')
                    resolve()
                })
                .catch(() => { context.commit('controlArticleFailure') });
        })
    },
    updateHandler(context, data) {
        return new Promise((resolve, reject) => {
            context.commit('controlArticleStart')
            ArticleService.updateArticle(data.article, data.slug).then((result) => {
                context.commit('controlArticleSuccess')
                resolve()
            }).catch((err) => {
                context.commit('controlArticleFailure')
            });
        })
    },
}

export default { state, mutations, actions }