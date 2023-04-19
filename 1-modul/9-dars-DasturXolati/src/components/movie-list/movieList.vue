<template>
    <ul class="movie-list list-group" >
        <h3>Movie List</h3>
        <MovieListItem v-for="movie in movies" v-bind:movie="movie" />
           
    </ul>
</template>
<script>

import MovieListItem from "@/components/movie-list-item/movieListItem.vue"
export default {
    components:{
        MovieListItem,
    },
    data(){
        return {
            movies:[
                {
                name: "Umar",
                viewers:505,
                favourite: true,
                like: true
            },
            {
                name: "Usmon New Film",
                viewers:525,
                favourite: false,
                like: true
            },
            {
                name: "Kino1",
                viewers:75,
                favourite: true,
                like: true
            },
            {
                name: "Film1",
                viewers:55,
                favourite: true,
                like: false
            },
            {
                name: "Film2",
                viewers:155,
                favourite: false,
                like: false
            },
            {
                name: "Film3",
                viewers:775,
                favourite: true,
                like: false
            },
        ],
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