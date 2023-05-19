<template >
    <div>
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" alt="alt">
    </div>
</template>
<script>
export default {
     name: "userImage",

    methods:{
        updateInput(e){
            this.$emit('update:modelValue', e.target.value)
        },
    },

}
</script>
<style scoped>
    img{
        width: 50px;
        height: 50px;
        border-radius: 100px;
    }
</style>