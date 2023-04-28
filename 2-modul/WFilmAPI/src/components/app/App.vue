<!-- 
//http://www.omdbapi.com/?s=star wars&apikey=263d22d8 --- free movies api 
// https://www.omdbapi.com/?s=man&apikey=4a3b711b
 -->
<template >
  
  <div class="container mt-3">
    <div class="app font-monospace">
      <div class="content">
       
      <div class=" mt-5 ">
       <div class="row">
       <div class="col-6">
        <h1>Movies I've seen</h1>
      <p>List of movies and TV Shows, I, <strong>Abdulbosit Tuychiev </strong> have watched till date. <br> Explore what I have watched and also feel free to make a suggestion. 😉</p>
      
        <PrimaryButton @click="fetchMovie()" class="btn-outline-success"><i class="fas fa-rotate"></i> Refresh</PrimaryButton>
       </div>
      <div class="col-6" >
          <SearchPanel :updateTermHandler='updateTermHandler'/>
        <Box class="search-panel ">
          <AppFilter :updateFilterHandler="updateFilterHandler" :filterName="filter" class="mb-2"/>
          <br>
          <AppInfo :allMoviesCount="moviesCount" :favouriteMoviesCount="movies.filter(c=>c.favourite).length" />
        </Box>
               
      </div>

       </div>
      </div>
     
         <Box v-if="!movies.length && !isLoading"> <p class="fs-1 text-center text-danger">Kinolar yo'q </p></Box>
          <Box v-else-if="isLoading"> <span class="fs-3 ms-5 p-5">Loading </span><Loader/> </Box>

        <MovieList :movies="onFilterHandler(onSearchHandler(movies, term.toLocaleLowerCase()),filter) " @onToggle="onToggleHandler" @onRemove="onRemoveHandler" />
       <hr>
      <div  class="d-flex -justfiy-content-center">
        
       <Box class="ms-5">
          <nav aria-label="pagination" class="d-flex -justfiy-content-center">
              <ul class="pagination pagination">
               <li  class="btn btn-outline-success" v-for="pageNumber in Math.ceil(moviesCount/100)" :key="pageNumber" :class="{'active': pageNumber==page}" @click="changePageHandler(pageNumber)">
                      <span class="page-link">{{ pageNumber }}</span>
                </li> 
              </ul>
            </nav>
        </Box>
      </div>
        <hr>
        <div class="col-5">
        <MovieAddForm @createMovie="createMovie" />
      </div>
       
     
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
  components:{ AppInfo, SearchPanel, AppFilter, MovieList, MovieAddForm, Box },
    data(){
        return {
            movies:[ ],
        // qidirish uchun kiritilgan ozgaruvchini saqlab turadi
        term:'star wars',
        filter:'all',
        isLoading: false,
        limit: 15,
        page:5,
        totalPages: 0,
        moviesCount:0,
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
    deleteNotDigits(str) {
                // return parseInt(str.replace(/[^\d.]/g, ''))
                return +(str.replace(/[^\d.]/g, ''))
    },
    onFilterHandler(arr, filter) {
  switch (filter) {
    case "popular":
      return arr.filter(c => c.like);
    case "mostViewers":
      let total = 0;
      let count = 0;
      arr.forEach(c => {
        let numericValue = 0;
        let viewers = c.viewers;
        if (typeof viewers === "string") {
          viewers = viewers.replace(/,/g, "");
          if (viewers.includes("K")) {
            numericValue = parseFloat(viewers) * 1000;
          } else if (viewers.includes("M")) {
            numericValue = parseFloat(viewers) * 1000000;
          } else {
            numericValue = parseFloat(viewers);
          }
        } else {
          numericValue = viewers;
        }
        total += numericValue;
        count++;
      });
      const average = total / count;
      return arr.filter(c => {
        let numericValue = 0;
        let viewers = c.viewers;
        if (typeof viewers === "string") {
          viewers = viewers.replace(/,/g, "");
          if (viewers.includes("K")) {
            numericValue = parseFloat(viewers) * 1000;
          } else if (viewers.includes("M")) {
            numericValue = parseFloat(viewers) * 1000000;
          } else {
            numericValue = parseFloat(viewers);
          }
        } else {
          numericValue = viewers;
        }
        return numericValue > average;
      });
    default:
      return arr;
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
        const response  = await axios.get(`http://www.omdbapi.com/?s=${this.term}&page=${this.page}&apikey=263d22d8`)
            const newMovieList = response.data.Search.map(item=>({
                id: item.imdbID,
                name: item.Title,
                viewers: Math.floor(Math.random() * Date.now())/100,
                favourite: false,
                like: true,
                videoLink:`https://www.youtube.com/results?search_query=${item.Title}`,
                desc: item.Type + " "+ item.Year,
                imgSrc: item.Poster,
                infoLink: `https://www.google.com/search?q=${item.Title}`
            }))
            this.movies = newMovieList
            this.moviesCount = response.data.totalResults
            this.totalPages = Math.ceil(this.moviesCount/this.limit)
            console.log(this.moviesCount);
        
      } catch (error) {
        console.log(error.message);
      }finally{
        this.isLoading = false
      }

      
    },
    changePageHandler(page){
      this.page = page
      this.fetchMovie()
     },
    },
    mounted() {
     this.fetchMovie()
     },
     watch:{
      term(){
        this.fetchMovie()
      }
     }
}
</script>
<style>
body{
  background: #121829;
 
}
  .app{
    height: 100vh;
    color: black;
  }
  .content{
    width: 1300px;
    min-height: 700px;
    /* background-color: white; */
    margin: 0 auto;
    padding: 5rem 0;
    color: aliceblue;
  }
  


  /* Change the background color of the pagination links */
  .pagination .page-link {
  /* background-color: #f0ad4e; */
  /* border-color: #f0ad4e; */
  border-radius: 5px;
  border: none;
  color: white;
  margin: 3px;
  background-color: transparent;
}

/* Change the color of the pagination links on hover */
.pagination .page-link:hover {
  background-color: #ec971f;
  border-color: #ec971f;
}

/* Change the background color of the active pagination link */
.pagination .page-item.active .page-link {
  background-color: #c9302c;
  border-color: #c9302c;
}

</style>