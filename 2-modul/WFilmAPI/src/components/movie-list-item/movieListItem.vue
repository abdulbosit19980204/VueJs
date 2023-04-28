<template >
  <div  class="card list-group-item d-flex justify-content-between mx-1 col-3 mb-2" :class="[{like: movie.like}, {favourite: movie.favourite}]">  <!--Bu yerda if shart ishlayapti :class bilan-->
   <img :src="movie.imgSrc" class="card-img-top" alt="">
    <span @click="$emit('onToggle', {id: movie.id, prop: 'like'})" class="list-group-item-lable card-title text-uppercase">{{ movie.name }}</span>
    <div class="card-body">
    <p class="card-text">{{ movie.desc}}</p>
  </div>
    <div class="d-flex justify-content-center align-items-center">
    <input  class="list-group-item-input viewers"  :value="movie.viewers" disabled>
        <button @click="$emit('onToggle', {id: movie.id, prop: 'favourite'})" type="button" class="btn-cookie btn-sm" >
            <i class="fas fa-heart"></i>
        </button>
        <button type="button" class="btn-trash btn-sm" @click="$emit('onRemove', movie.id)"  >
            <i class="fas fa-trash"></i>
        </button>
       <a :href="movie.videoLink" target="_blank">
        <button class="btn-watching">
        <i class="far fa-eye"></i>
        </button>
       </a>
       <a :href="movie.videoLink" target="_blank">
        <button class="btn-watching">
        <i class="fas fa-circle-info"></i>
        </button>
       </a>
                <i class="fas fa-star"></i>
    </div>
  </div>
 <!-- @ - onclick xodisasi shunday berilayatgandi v-bind:onClick yoki  @click-->
 <!-- : bilan esa bind ni berish mumkin yoki v-bind misol uchun v-bind:value="movie.viewers" yoki shuni :value="movie.viewers" shu korinishda -->
</template>
<script>
export default {
   props:{
    movie:{
      type: Object,
      required: true,
    },
   },
   
}
</script>
<style scoped >
.viewers{
  width: 70px;
  border-radius: 5px;
  text-align: center;
  color: aliceblue;
}
.card{
  
background: rgba(32, 40, 62, 0.8);
backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 12px;
}
.list-group-item{
    padding: 15px 15px;
    border: none;
    border-bottom: 1px solid #3d5a80;
    /* width: 300px; */
    /* height: 200px; */
    box-sizing: border-box;

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
    /* background-color: aliceblue; */
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
  .list-group-item button:hover{
  background-color: rgb(215, 245, 254);
  
}
   .list-group-item  .btn-cookie{
    color: #e09f3e;
    color: #e5383b;
   }
   .list-group-item .btn-trash{
    /* color: #e5383b; */
    color: #071687;
   }
   .list-group-item .btn-watching{
    /* color: #e5383b; */
    color: #ffffff;
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
.list-group-item-lable{
  color: white;
}
   .list-group-item.favourite .list-group-item-lable{
    color: #e09f3e;
   }
   .list-group-item.favourite .list-group-item-input{
    color: #e09f3e;
   }
</style>