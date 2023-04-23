<template>
    <ul class="movie-list list-group" >
        <h3>Movie List</h3>
        <MovieListItem v-for="movie in movies" v-bind:movie="movie" :key="movie.id" @onLike='$emit("onLike",movie.id)' />
           
    </ul>
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
    background-color: #fcfcf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
    }
</style>