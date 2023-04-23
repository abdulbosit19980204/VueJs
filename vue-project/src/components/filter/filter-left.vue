<template>
  <div class="col-12">
    <button class="btn btn-outline-primary w-100 mt-2 mb-5 fs-5 fw-medium">
      <i class="fas fa-arrow-down-wide-short"></i> Departments
    </button>

    <Categories
      v-for="categoriesTypeItem in categoriesTypeItems"
      v-bind:categoriesTypeItem="categoriesTypeItem"
    />

    <br />
    <div class="accordion mt-3" id="accordionExample">
      <filterAccordion
        v-for="FilterTypeName in filterTypeNames"
        v-bind:FilterTypeName="FilterTypeName"
      />
    </div>
  </div>
</template>
<script>
import filterAccordion from "./filter-accordion.vue";
import Categories from "./categories.vue";
export default {
  components: {
    filterAccordion,
    Categories,
  },
  data() {
    return {
      filterTypeNames: [
        {
          filterType: "Collapsed filters",
          dataBsParent: "#accordionExample",
        },
        {
          filterType: "Expanded filters",
          dataBsParent: "#accordionExample",
        },
        {
          filterType: "Year of manufacturing",
          dataBsParent: "#accordionExample",
        },
        {
          filterType: "Coutries of Manufacturing",
          dataBsParent: "#accordionExample",
        },
      ],
      categoriesTypeItems: [
        {
          typeName: "All Categories",
        },
        {
          typeName: "Electronics",
        },
        {
          typeName: "Business & Industrial",
        },
        {
          typeName: "Computers",
        },
        {
          typeName: "Consumer Electroinics",
        },
        {
          typeName: "Home & Garden",
        },
        {
          typeName: "Collectibles",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
