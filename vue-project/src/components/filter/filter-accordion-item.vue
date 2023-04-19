<template >
     <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" >
              <label class="form-check-label mx-3" for="flexCheckDefault">
                {{filterItem. filterItemName}}
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
    .form-check-input{
      border: 2px solid #4A4B57;
;
    }
</style>