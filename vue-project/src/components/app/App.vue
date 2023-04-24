<template>
  <menuNav/>
  <FilterType />
  <div class="container d-flex">
    <div class="col-3">
      <FilterLeft />
    </div>
    <div class="col-9">
      <Items />
    </div>
  </div>
  <div class="container mt-3"></div>
</template>
<script>
import menuNav from "@/components/menu/menu.vue";
import FilterType from "@/components/filter/filter-type.vue";
import FilterLeft from "@/components/filter/filter-left.vue";
import Items from "@/components/items/items.vue";

export default {
  components: {
    menuNav,
    FilterType,
    FilterLeft,
    Items,
  },

};
</script>
<style></style>
