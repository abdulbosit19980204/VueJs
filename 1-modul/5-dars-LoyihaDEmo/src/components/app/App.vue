<template >
  <div class="container mt-3">
    <div class="app">
      <div class="content">
        <AppInfo>AppInfo</AppInfo>
        <div class="search-panel">
          <SearchPanel>Search</SearchPanel>
          <AppFilter>App-Filter</AppFilter>
        </div>
        <MovieList>MovieList</MovieList>
        <MovieAddForm/>
      </div>
    </div>
  </div>
</template>
<script>
import AppInfo from "@/components/app-info/AppInfo.vue"
import SearchPanel from "@/components/search-panel/SearchPanel.vue"
import AppFilter from "@/components/app-filter/appFilter.vue"
import MovieList from "@/components/movie-list/movieList.vue"
import MovieAddForm from "@/components/movie-add-form/movieAddForm.vue"
export default {
  components:{AppInfo,SearchPanel,AppFilter,MovieList,MovieAddForm}
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