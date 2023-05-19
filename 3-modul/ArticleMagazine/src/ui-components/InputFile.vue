<template >
        <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" id="formFile">
        </div>
</template>
<script>
export default {
    name: "InputFile",
   
    methods:{
        updateInput(e){
            this.$emit('update:modelValue', e.target.value)
        },
    },
}
</script>
<style >
    
</style>