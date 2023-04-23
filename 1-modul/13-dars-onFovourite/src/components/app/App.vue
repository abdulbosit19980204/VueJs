<template >
  <div class="container mt-3">
    <div class="app font-monospace">
      <div class="content">
        <AppInfo :allMoviesCount="movies.length" :favouriteMoviesCount="movies.filter(c=>c.favourite).length"/>
        <div class="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <MovieList :movies="movies" @onLike="onLikeHandler"/>
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
                like: true,
                id:1
            },
            {
                name: "Usmon New Film",
                viewers:525,
                favourite: false,
                like: true,
                id:2
            },
            {
                name: "Kino1",
                viewers:75,
                favourite: true,
                like: true,
                id:3
            },
            {
                name: "Film1",
                viewers:55,
                favourite: true,
                like: false,
                id:4,
            },
            {
                name: "Film2",
                viewers:155,
                favourite: false,
                like: false,
                id:5,
            },
            {
                name: "Film3",
                viewers:775,
                favourite: true,
                like: false,
                id:6
            },
        ],
        }
    },

    methods:{
      createMovie(item){  
      this.movies.push(item)
     },
     onLikeHandler(id){
      // const arr =this.movies.filter(c=>c.id==id)
      this.movies.map(item=>{
        if (item.id==id) {
          item.like=!item.like
        }return item
      })
      
      
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