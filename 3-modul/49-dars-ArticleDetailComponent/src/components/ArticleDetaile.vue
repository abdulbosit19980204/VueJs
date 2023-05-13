<template >
    <div>
        <h1>Article Detaile</h1>
        {{article}}
    </div>
  
</template>
<script>
import { mapState } from "vuex";
export default {
    computed:{
        ...mapState({ article: state => state.articles.articleDetail })
    }
}
</script>
<style >
    
</style>