<template >
   
<div class="container mb-2">
   
  <a class="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i class="fas fa-angle-right"></i> {{ categoriesTypeItem.typeName }}
  </a>
 
<div class="collapse" id="collapseExample">
    <div class="container">
        <categoriesItem v-for="categorie in categoriesItems" v-bind:categorie="categorie" /> 
        
    </div>
    
    

</div> 
</div>
</template>
<script>
import categoriesItem from './categories-item.vue';
export default {
    components:{
        categoriesItem
    },
    props:{
        categoriesTypeItem:{
            type: Object

        }
    },
    data(){
        return{
            categoriesItems:[
                {
                categoriesItemName: "Cell Phone & Smartphoes",
               },
               {
                categoriesItemName: "Cell Phone Accessories",
               },
               {
                categoriesItemName: "Cell Phone Gatgets",
               },
               {
                categoriesItemName: "Applications",
               },
               {
                categoriesItemName: "Smart Watches",
               },
        ]
        }
    }
}
</script>
<style scoped>
    .fa-angle-right{
        color: blue;
    }
</style>