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
          id: 1,
        },
        {
          filterType: "Expanded filters",
          dataBsParent: "#accordionExample",
          id: 2,
        },
        {
          filterType: "Year of manufacturing",
          dataBsParent: "#accordionExample",
          id: 3,
        },
        {
          filterType: "Coutries of Manufacturing",
          dataBsParent: "#accordionExample",
          id: 4,
        },
      ],
      categoriesTypeItems: [
        {
          typeName: "All Categories",
          id: 1,
        },
        {
          typeName: "Electronics",
          id: 2,
        },
        {
          typeName: "Business & Industrial",
          id: 3,
        },
        {
          typeName: "Computers",
          id: 4,
        },
        {
          typeName: "Consumer Electroinics",
          id: 5,
        },
        {
          typeName: "Home & Garden",
          id: 6,
        },
        {
          typeName: "Collectibles",
          id: 7,
        },
      ],
    };
  },
};
</script>
<style scoped></style>
