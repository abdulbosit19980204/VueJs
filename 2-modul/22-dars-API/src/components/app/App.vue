<template >
  <div class="container mt-3">
    <div class="app font-monospace">
      <div class="content">
        <AppInfo :allMoviesCount="movies.length" :favouriteMoviesCount="movies.filter(c=>c.favourite).length"/>
        <Box class="search-panel">
          <SearchPanel :updateTermHandler='updateTermHandler'/>
          <AppFilter :updateFilterHandler="updateFilterHandler" :filterName="filter" />
        </Box>
        <MovieList :movies="onFilterHandler(onSearchHandler(movies, term.toLocaleLowerCase()),filter) " @onToggle="onToggleHandler" @onRemove="onRemoveHandler" />
        <MovieAddForm @createMovie="createMovie" v-if="filter=='all'" />
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
import Box from "../../uicompanents/Box.vue"

export default {
  components:{ AppInfo, SearchPanel, AppFilter, MovieList, MovieAddForm, Box },
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
        // qidirish uchun kiritilgan ozgaruvchini saqlab turadi
        term:'',
        filter:'all',
        }
    },

    methods:{
      createMovie(item){  
      this.movies.push(item)
     },
     onToggleHandler({id, prop}){
       
     this.movies = this.movies.map(item=>{
        if (item.id==id) {
         return {...item, [prop]: !item[prop]}
        }return item
      })
      
      
     },
     onRemoveHandler(id){
         this.movies = this.movies.filter(c=>c.id!=id)
     },
     onSearchHandler(arr, term){
      if(term.length==0){
        return arr
      }
      return arr.filter(c=>c.name.toLowerCase().indexOf(term)>-1)
     },
     
     onFilterHandler(arr, filter){
      switch (filter) {
        case "popular":
          return arr.filter(c=>c.like);
        case "mostViewers":
          return arr.filter(c=>c.viewers>500);
                
        default:
          return arr
      }
     },
     updateFilterHandler(filter){
      this.filter =filter
     },
     updateTermHandler(term){
      this.term = term
     },
     mountedLog(){
      console.log("Mounted");
     },
     updatedLog(){
      console.log("updated");
     },
    

    },
    mounted() {
      this.mountedLog()
     },
     updated() {
      this.updatedLog()
     },
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
   
  }
</style>