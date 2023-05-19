<template >
   
    <div v-if="article" class="container text-light">
        <div class="row">
            <div class="col-12">
                <p class="fs-2">
                                {{article.title}}
                </p>
            </div>
            <div class="col-md-12 col-lg-8 mt-3">
                <p class="oppacity-50">Description:</p>
                <p class="font-monospace">{{article.description}}</p>
            </div>
            <div class="col-6 col-lg-2 mt-3">
                <p class="oppacity-50">Created at:</p>
                <p class="font-monospace">
                 {{new Date(article.createdAt).toLocaleDateString('us')}}
                </p>
            </div>
            <div class="col-6 col-lg-2 mt-3">
                <p class="oppacity-50">updated at:</p>
                <p class="font-monospace">
                 {{new Date(article.updatedAt).toLocaleString('us')}}
                </p>
            </div>
            <div class="col-lg-4 mt-3">
                 <div class="d-flex gap-3 align-items-center" >
                   <div 
                   class="d-flex justify-content-center align-items-center user_img bg-primary text-light text-uppercase fw-bold"

                   >
                    {{article.author.username[0]}}
                   </div>
                    <div class="fw-bold">
                        {{article.author.username}}
                    </div>
                </div>
                <p class="font-monospace mt-2">{{article.author.bio}}</p>
            </div>
            <div class="col-lg-8 mt-3">
               <p class="oppacity-50">Body:</p>
               <p>{{article.body}}</p>
            </div>
        </div>

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
    .user_img{
        width: 50px;
        height: 50px;
       border-radius: 100%;
    }
</style>