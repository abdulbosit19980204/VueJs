<template >
  <div class="container mt-3">
    <div class="app font-monospace">
      <div class="content">
        <AppInfo :allMoviesCount="movies.length" :favouriteMoviesCount="movies.filter(c=>c.favourite).length"/>
        <div class="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <MovieList :movies="movies"/>
        <MovieAddForm @createMovie="createMovie" />
      </div>
    </div>
  </div>
</template>
<script>
import AppInfo from "@/components/app-info/appInfo.vue"
import SearchPanel from "@/components/search-panel/SearchPanel.vue"
import AppFilter from "@/components/app-filter/appFilter.vue"
import MovieList from "@/components/movie-list/movieList.vue"
import MovieAddForm from "@/components/movie-add-form/movieAddForm.vue"

export default {
  components:{AppInfo,SearchPanel,AppFilter,MovieList,MovieAddForm},
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
    },

    methods:{
      createMovie(item){
      this.movies.push(item)
     
      }
    }
    
}
</script>
<style>
  .app{
    height: 100vh;
    color: black;
  }
  .content{
    width: 1000px;
    min-height: 700px;
    background-color: white;
    margin: 0 auto;
    padding: 5rem 0;
  }
  .search-panel{
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcfcf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
  }
</style>