<template>
    <!-- <h3 class="mt-3 titleMovies">Movie List</h3> -->
    <div class="movie-list d-flex flex-wrap justify-content-center" >
        <MovieListItem v-for="movie in movies" v-bind:movie="movie" :key="movie.id" @onToggle="$emit('onToggle', $event)" @onRemove="$emit('onRemove', $event)"/>
           
    </div>
</template>
<script>

import MovieListItem from "@/components/movie-list-item/movieListItem.vue"
export default {
    components:{
        MovieListItem,
    },
    props:{
        movies:{
            type: Array,
            required:true
        }
    }
}
</script>
<style scoped>

    .movie-list{
    margin-top: 25px;
    padding: 1.5rem;
    border-radius: 4px;
    /* background-color: #fcfcf5; */
    border-radius: 4px;
    
    color: azure;
    /* box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15); */
    }
    .titleMovies{
        color: azure;
    }
</style>