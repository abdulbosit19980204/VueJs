<template >
      <span class="fs-5">All: {{ allMoviesCount }}</span>
      <span class="fs-5"> Favorite:{{ favouriteMoviesCount }} <i class="far fa-heart" style="color: red;"></i> </span>
    <!-- <Box > -->
       <!-- <p class = "fs-3 text-uppercase"> All:   {{ allMoviesCount }} </p>
       <p class = "fs-4 text-uppercase"> Favorite:{{ favouriteMoviesCount }} <i class="far fa-heart"></i> </p> -->
    <!-- </Box> -->
</template>
<script>


export default {
    props:{
        allMoviesCount:{
            type: Number,
            required: true,
        },
        favouriteMoviesCount:{
            type: Number,
            required:true
        }
    }
}
</script>
<style scoped>
span{
    color: azure;
}
</style>