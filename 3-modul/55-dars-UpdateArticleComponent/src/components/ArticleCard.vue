<template lang="">
        <div class="col">
          <div class="card shadow-none border-0">
            <img src="https://texts.com/ogcover.png" alt="" class="bd-placeholder-img card-img-top" >
         
           <div class="card-body">
           <div class="text-success btn-group ">
              <small class="my-0 btn btn-outline-light  active">{{article.author.username}}</small>
              <small class="text-warning btn btn-outline-light ">{{new Date(article.updatedAt).toLocaleString('us')}}</small>
              </div>
              <p class="card-title fw-bold">{{article.title}}</p>
              <p class="card-text">{{article.body.slice(0,250)}}</p>
              <div class="d-flex justify-content-between align-items-center card-footer">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click='navigateHandler'><i class="far fa-eye"></i> Read</button>
                  <button v-if="article.author.username == user.username"
                   type="button" 
                   class="btn btn-sm btn-outline-danger"
                   @click='deleteArticleHandler'
                   :disabled='isLoading'
                   ><i class="fas fa-trash-can"> </i>  Delete</button>
                  <button v-if="article.author.username == user.username"
                   type="button" 
                   class="btn btn-sm btn-outline-warning"
                 @click='navigateEditHandler'
                 ><i class="fas fa-pen-to-square"> </i>  Edit</button>
                </div>
                <small class="text-body-secondary">{{new Date(article.createdAt).toLocaleDateString('us')}}</small>
               </div>
            </div>
          </div>
        </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:{
      article:{
        type: Object,
        required: true,
      }
    },
    computed:{
      ...mapState({
        user: state=> state.auth.user,  
        isLoading: state => state.control.isLoading
      })
    },
    methods: {
      navigateHandler(){
        return this.$router.push(`/article/${this.article.slug}`)
      },
      deleteArticleHandler(){
      return  this.$store.dispatch('deleteArticle', this.article.slug)
        .then(() => {
          this.$store.dispatch('articles')
        }).catch(() => {
          
        });
      },
      navigateEditHandler(){
        return this.$router.push(`/edit-article/${this.article.slug}`)
      }
    },
}
</script>
<style lang="">
    
</style>