<template>
  <div class="d-flex justify-content-center aligen-middle">
    <FilterMenuItem v-for="menu in menus" v-bind:menu="menu" />
  </div>
</template>
<script>
import FilterMenuItem from "@/components/filter/filter-menu-item.vue";
export default {
  components: {
    FilterMenuItem,
  },
  data() {
    return {
      menus: [
        {
          menuClassName: "fas fa-shirt mb-1",
          menuName: "Clothing & Shoes",
          active: true,
        },
        {
          menuClassName: "fas fa-film mb-1",
          menuName: "Entertainment",
          active: false,
        },
        {
          menuClassName: "fas fa-music mb-1",
          menuName: "Music",
          active: false,
        },
        {
          menuClassName: "fas fa-dumbbell mb-1",
          menuName: "Sport & Lifestyle",
          active: false,
        },
        {
          menuClassName: "fas fa-bone mb-1",
          menuName: "Pets",
          active: false,
        },
        {
          menuClassName: "fas fa-kitchen-set mb-1",
          menuName: "Kitchen Accessories",
          active: false,
        },
        {
          menuClassName: "fas fa-binoculars mb-1",
          menuName: "Travel Equipment",
          active: false,
        },
        {
          menuClassName: "fab fa-pagelines mb-1",
          menuName: "Growing & Garden",
          active: false,
        },
        {
          menuClassName: "fas fa-bolt mb-1",
          menuName: "Electrical Tools",
          active: false,
        },
        {
          menuClassName: "fas fa-baby-carriage mb-1",
          menuName: "Mother Care",
          active: false,
        },
        {
          menuClassName: "fas fa-radiation mb-1",
          menuName: "Toys & Entertainment",
          active: false,
        },
        {
          menuClassName: "fas fa-dharmachakra mb-1",
          menuName: "Vintage",
          active: false,
        },
      ],
    };
  },
};
</script>
<style scoped></style>
