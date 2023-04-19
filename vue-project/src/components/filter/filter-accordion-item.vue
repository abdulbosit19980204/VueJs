<template >
     <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" >
              <label class="form-check-label mx-3" for="flexCheckDefault">
                {{filterItem.filterItem}}
              </label>
            </div>
</template>
<script>
export default {
    props:{
        filterItem:{
            type: Object,
            required: true
        }
    }
}
</script>
<style >
    
</style>