<template >
    <div class="mx-2 float-start mb-2">
        <div class="card" style="width: 18rem;">
  <img :src="item.itemImgSrc"  class="card-img-top" alt="...">
  <div class="card-body card-border">
      <p class="card-text">{{ item.itemInfo }}</p>
      <h4 class="card-title fw-bold">${{ item.itemCost }} <span class="ms-5 text-success fs-6 p-1 bg-success bg-opacity-10 border rounded d-none">50% OFF</span></h4> 
      <p class="fw-lighter">{{ item.itemDesc }}</p>          
      <div class="d-flex justify-content-around ">
       <div class="align-top d-flex fs-6">
        <i class="fas fa-star star-ico"></i>
        <i class="fas fa-star star-ico"></i>
        <i class="fas fa-star star-ico"></i>
        <i class="fas fa-star star-ico"></i>
        <i class="far fa-star star-ico"></i>
        <h5 class="mx-2 fs-5">4.05</h5>
       </div>
        <div class="d-flex justify-content-end">
          <a href="#" class="btn btn-outline-primary "><i class="far fa-heart"></i> Watch</a>
         </div>

      </div>
  </div>
</div>
    </div>

</template>
<script>
export default {
    props:{
        item:{
            type: Object,
            required: true,
        }
    }
}
</script>
<style scoped>
.card{
    border: none;
}
.card:hover{
    /* box-shadow: 1px 1px 5px 1px rgb(218, 214, 214); */
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
    /* box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset; */
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}
.star-ico{
        color: rgb(249, 249, 18);
    }
    
</style>