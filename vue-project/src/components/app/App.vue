<template >
   <menuNav/>
 <FilterType/>
 <div class="container d-flex">
   <FilterLeft/>
     <Items/>

 </div>
</template>
<script>
import menuNav from '@/components/menu/menu.vue'
import FilterType from '@/components/filter/filter-type.vue'
import FilterLeft from '@/components/filter/filter-left.vue'
import Items from '@/components/items/items.vue'
export default {
    components:{
      menuNav,FilterType,FilterLeft,Items
    }
}
</script>
<style >
   
</style>