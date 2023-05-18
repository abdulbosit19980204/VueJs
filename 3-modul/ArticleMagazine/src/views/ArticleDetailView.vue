<template >
      <Loader v-if="isLoading" class="offset-md-6"/>
    <div  v-else>
        <articleDetail/>
    </div>
</template>
<script>
import ArticleDetail from '@/components/ArticleDetaile.vue'
import { mapState } from "vuex";
export default {
    components:{ArticleDetail},
    computed:{
        ...mapState({isLoading: state => state.articles.isLoading})
    },
    mounted() {
        console.log(this.$route.params.slug)
        this.$store.dispatch('articleDetail',this.$route.params.slug)

    },
}
</script>
<style >
    
</style>