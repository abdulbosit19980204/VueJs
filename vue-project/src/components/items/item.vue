<template >
    <div class="mx-2 float-start mb-2">
        <div class="card" style="width: 18rem;">
  <img src="@/assest/img/item1.png" class="card-img-top" alt="...">
  <div class="card-body card-border">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <h4 class="card-title fw-bold">$50.10</h4>
      <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>          
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