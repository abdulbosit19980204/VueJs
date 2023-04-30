<template >
   <div class="form-floating mt-3">
          <input :type="type" class="form-control" id="floatingPassword" :placeholder="label">
          <label for="floatingPassword">{{ label }}</label>
        </div>
</template>
<script>
export default {
    name: "Input",
    props:{
        label: String,
        type: String,
        placeholder: String,
    }
}
</script>
<style >
    
</style>