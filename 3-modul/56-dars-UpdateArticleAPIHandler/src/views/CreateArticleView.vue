<template >
        <p class="text-center display-2">Create article</p>
    <ArticleForm :initialValue="initialValue" :onSubmitHandler="CreateArticleHandler" :clickText="'Create article'"/>
</template>
<script>
import { mapState } from "vuex";
import ArticleForm from "../components/ArticleForm.vue";
export default {
    components:{ArticleForm},
    data() {
        return {
                title:'',   
                description:'',
                body: '',
            
        }
    },
    methods:{
        CreateArticleHandler(article){
            this.$store.dispatch('createArticle', article)
            this.$router.push('/')
        },
    },
    computed:{
        ...mapState({
            isLoading: state=> state.control.isLoading
            }),
        
        initialValue(){
            return {
                title: '',
                description:'',
                body:''
            }
        }
    },

}
</script>
<style >
    
</style>