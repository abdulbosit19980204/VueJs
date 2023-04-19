<template >

    <div class="accordion-item mb-3">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          
         {{ FilterTypeName.filterType }}

        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <filterAccordionItem v-for="filterItem in filterItems" v-bind:filterItem="filterItem"/>
          
          </div>
      </div>
    </div>
</template>
<script>
import filterAccordionItem from './filter-accordion-item.vue';

export default {
    components:{
        filterAccordionItem
    },
    props:{
        FilterTypeName:{
            type: Object,
        }
    },
    data() {
        return {
            filterItems:[
                {
            filterItemName: "Recommended"
         },
          {
            filterItemName: "Recently Added"
         },
          {
            filterItemName: "Expiring Soon"
         },
          {
            filterItemName: "Most Rated"
         },
          {
            filterItemName: "Price: Low → High"
         },
          {
            filterItemName: "Price: High → Low"
         },

            ]
        }
    },
}
</script>
<style scoped>
    .accordion-item{
        background-color: #F7F7FA;
        border: none;
        border-radius: 15px;
    }
    .accordion-button{
        background: #FFFFFF;
        border: none;
/* Shadow Dark / 2dp */

        box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24);
        border-radius: 14px;
      
    }
    .accordion-button:focus{
        box-shadow: none;
    }
</style>