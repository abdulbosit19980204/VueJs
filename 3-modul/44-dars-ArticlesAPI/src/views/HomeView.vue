<template >
    <div class="fs-6" >
      {{data}}
     </div>
</template>
<script>
import { mapState } from "vuex";
export default {
     computed:{
    ...mapState({
      data: state => state.articles.data,
      isLoading:state=> state.articles.isLoading,
      error: state=> state.articles.error,
    }),
  },

  mounted() {
    this.$store.dispatch('articles')
  },

}
</script>
<style >
    
</style>