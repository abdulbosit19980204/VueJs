<template >
  <div class="container mt-3">
    <div class="app font-monospace">
      <div class="content">
          <AppInfo :allMoviesCount="movies.length" :favouriteMoviesCount="movies.filter(c=>c.favourite).length"/>
          <Box class="search-panel">
            <SearchPanel :updateTermHandler='updateTermHandler'/>
            <AppFilter :updateFilterHandler="updateFilterHandler" :filterName="filter" />
          </Box>
          <PrimaryButton @click="fetchMovie()" class="btn-outline-success mt-3"><i class="fas fa-rotate"></i> Refresh</PrimaryButton>
          <Box v-if="!movies.length && !isLoading"> <p class="fs-1 text-center text-danger">Kinolar yo'q </p></Box>
          <Box v-else-if="isLoading"> <span class="fs-3 ms-5 p-5">Loading </span><Loader/> </Box>
          <MovieList v-else :movies="onFilterHandler(onSearchHandler(movies, term.toLocaleLowerCase()),filter) " @onToggle="onToggleHandler" @onRemove="onRemoveHandler" />
          <Box class="d-flex justify-content-center">
            <nav aria-label="pagination">
              <ul class="pagination pagination">
                <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{'active': pageNumber==page}" @click="changePageHandler(pageNumber)">
                      <span class="page-link">{{ pageNumber }}</span>
                </li>
              </ul>
            </nav>
          </Box>
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
import Box from "../../uicompanents/Box.vue"
import axios from "axios"
import Loader from "../../uicompanents/Loader.vue"



export default {
  components:{ AppInfo, SearchPanel, AppFilter, MovieList, MovieAddForm, Box, Loader, Box },
    data(){
        return {
            movies:[

        ],
        // qidirish uchun kiritilgan ozgaruvchini saqlab turadi
        term:'',
        filter:'all',
        isLoading: false,
        limit: 10,
        page:1,
        totalPages: 0,
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
     async fetchMovie(){
      try {
        this.isLoading=true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            _limit: this.limit,
            _page: this.page,
          },
        })
        const newMovieList = response.data.map(item=>({
          id: item.id,
          name: item.title,
          like: false,
          favourite: false,
          viewers: (item.id)*100
        }))
        this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
        console.log(this.totalPages);
       this.movies = newMovieList
       } catch (error) {
        console.log(error.name);
        
      }finally{
        this.isLoading=false
      }
     },
     changePageHandler(page){
      this.page = page
      // this.fetchMovie()
     },
    },
    mounted() {
     this.fetchMovie()

     },
     watch:{
      page(){
        this.fetchMovie()
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
   
  }
</style>