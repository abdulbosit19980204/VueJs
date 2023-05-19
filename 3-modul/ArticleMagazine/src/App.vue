<template >
  <div class="container">
        <div class="row d-block">
          
      <Navbar/>
        </div> <br><br>
        <div class="row mt-5">
          
      <RouterView/>
        </div>
     
   
   
  </div>
</template>
<script>
import {Navbar} from '@/components';
import {RouterView} from 'vue-router'
export default {
  components:{Navbar,},
  mounted() {
    this.$store.dispatch('getUser')
  },
}
</script>
<style >
  body{
    background: #1E1E1E;
    /* background: rgba(0, 0, 0, 0.5); */
  }
  
</style>