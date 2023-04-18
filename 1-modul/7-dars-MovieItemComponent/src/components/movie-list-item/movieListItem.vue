<template >
  <li class="list-group-item d-flex justify-content-between "> 
    <span class="list-group-item-lable">kino 1</span>
    <input type="number" class="list-group-item-input" defaultValue="811">
    <div class="d-flex justify-content-center align-items-center">
        <button type="button" class="btn-cookie btn-sm">
            <i class="fas fa-cookie"></i>
        </button>
        <button type="button" class="btn-trash btn-sm">
            <i class="fas fa-trash"></i>
        </button>
       
            <i class="fas fa-star"></i>
       
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between favourite"> 
    <span class="list-group-item-lable">kino 1</span>
    <input type="number" class="list-group-item-input" defaultValue="811">
    <div class="d-flex justify-content-center align-items-center">
        <button type="button" class="btn-cookie btn-sm">
            <i class="fas fa-cookie"></i>
        </button>
        <button type="button" class="btn-trash btn-sm">
            <i class="fas fa-trash"></i>
        </button>
       
            <i class="fas fa-star"></i>
       
    </div>
  </li>
</template>
<script>
export default {
   
}
</script>
<style scoped >
   .list-group-item{
    padding: 15px 20px;
    border: none;
    border-bottom: 1px solid #3d5a80;

   }
   .list-group-item:last-child{
    border-bottom: none;
   }

   .list-group-item span{
    line-height: 35px;
    font-size: 20px;
    cursor: pointer;
    width: 550px;   
   }

   .list-group-item input{
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: none;
    outline: none;
   }

   .list-group-item button{
    width: 35px;
    height: 35px;
    margin: 3px;
    border: none;
    font-size: 17px;
    cursor: pointer;
    border-radius: 5px;
    background-color: aliceblue;
   }

   .list-group-item  .btn-cookie{
    color: #e09f3e;
   }
   .list-group-item .btn-trash{
    color: #e5383b;
   }
   .list-group-item .fa-star{
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: #ffd700;
    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0  ;
   }
   .list-group-item.like .fa-star{
opacity: 1;
transform: translateX(0);
   }

   .list-group-item.favourite .list-group-item-lable{
    color: #e09f3e;
   }
   .list-group-item.favourite .list-group-item-input{
    color: #e09f3e;
   }
</style>