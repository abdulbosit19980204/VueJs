<template lang="">
        <div class="col">
          <div class="card shadow-sm">
            <img src="https://texts.com/ogcover.png" alt="" class="bd-placeholder-img card-img-top" >
         
           <div class="card-body">
           <div class="text-success btn-group">
              <small class="my-0 btn btn-outline-light  active">{{article.author.username}}</small>
              <small class="text-warning btn btn-outline-light ">{{article.updatedAt}}</small>
              </div>
              <p class="card-title fw-bold">{{article.title}}</p>
              <p class="card-text">{{article.body}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">{{article.createdAt}}</small>
               </div>
            </div>
          </div>
        </div>
</template>
<script>
export default {
    props:{
      article:{
        type: Object,
        required: true,
      }
    }
}
</script>
<style lang="">
    
</style>