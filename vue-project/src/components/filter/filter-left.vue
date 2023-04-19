<template >
    <div class="col-3">


  <button class="btn btn-outline-primary w-100 mt-2 mb-5 fs-5 fw-medium"><i class="fas fa-arrow-down-wide-short"></i> Departments</button>
  
  <Categories v-for="categoriesTypeItem in categoriesTypeItems" v-bind:categoriesTypeItem="categoriesTypeItem"/>
  
  <br>
  <div class="accordion mt-3" id="accordionExample">
   
    <!-- <div class="accordion-item mb-3">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Collapsed filters
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label mx-3" for="flexCheckDefault">
                Recomended
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Recently Added
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Expiring Soon
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Most Rated
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Price: Low → High
              </label>
            </div>
        </div>
      </div>
    </div>
    <div class="accordion-item mb-3">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          Expanded Filters
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label mx-3" for="flexCheckDefault">
                Recomended
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Recently Added
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Expiring Soon
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Most Rated
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Price: Low → High
              </label>
            </div>
        </div>
      </div>
    </div>
    <div class="accordion-item mb-3">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Year of manufacturing
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label mx-3" for="flexCheckDefault">
                2011
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label mx-3" for="flexCheckChecked">
                2012
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
              <label class="form-check-label mx-3" for="flexCheckChecked">
                2013
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
              <label class="form-check-label mx-3" for="flexCheckChecked">
              2014
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
              <label class="form-check-label mx-3" for="flexCheckChecked">
                2015
              </label>
            </div>
        </div>
      </div>
    </div> -->

    <filterAccordion v-for="FilterTypeName in filterTypeNames" v-bind:FilterTypeName="FilterTypeName"  />
   
  </div>
    </div>
</template>
<script>
import filterAccordion from './filter-accordion.vue';
import Categories from './categories.vue';
export default {
    components:{
filterAccordion, Categories
    },
    data(){
      return{
        filterTypeNames: [
          {
            filterType: "Collapsed filters",
            dataBsParent:"#accordionExample",
         },
          {
            filterType: "Expanded filters",
              dataBsParent:"#accordionExample",
         },
          {
            filterType: "Year of manufacturing",
              dataBsParent:"#accordionExample",
         },
          {
            filterType: "Coutries of Manufacturing",
              dataBsParent:"#accordionExample",
         },

      ],
      categoriesTypeItems:[
          {
          typeName: "All Categories"
        },
          {
          typeName: "Electronics"
        },
        {
          typeName: "Business & Industrial"
        },
        {
          typeName: "Computers"
        },
        {
          typeName: "Consumer Electroinics"
        },
        {
          typeName: "Home & Garden"
        },
        {
          typeName: "Collectibles"
        },
        ]
      }
    },
    
}
</script>
<style scoped>
    
</style>