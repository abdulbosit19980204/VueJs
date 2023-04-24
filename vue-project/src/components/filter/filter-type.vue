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
          id:1 ,
        },
        {
          menuClassName: "fas fa-film mb-1",
          menuName: "Entertainment",
          active: false,
          id: 2,
        },
        {
          menuClassName: "fas fa-music mb-1",
          menuName: "Music",
          active: false,
          id: 3,
        },
        {
          menuClassName: "fas fa-dumbbell mb-1",
          menuName: "Sport & Lifestyle",
          active: false,
          id: 4,
        },
        {
          menuClassName: "fas fa-bone mb-1",
          menuName: "Pets",
          active: false,
          id: 5,
        },
        {
          menuClassName: "fas fa-kitchen-set mb-1",
          menuName: "Kitchen Accessories",
          active: false,
          id: 6,
        },
        {
          menuClassName: "fas fa-binoculars mb-1",
          menuName: "Travel Equipment",
          active: false,
          id: 7,
        },
        {
          menuClassName: "fab fa-pagelines mb-1",
          menuName: "Growing & Garden",
          active: false,
          id:8 ,
        },
        {
          menuClassName: "fas fa-bolt mb-1",
          menuName: "Electrical Tools",
          active: false,
          id:9 ,
        },
        {
          menuClassName: "fas fa-baby-carriage mb-1",
          menuName: "Mother Care",
          active: false,
          id: 10,
        },
        {
          menuClassName: "fas fa-radiation mb-1",
          menuName: "Toys & Entertainment",
          active: false,
          id: 11,
        },
        {
          menuClassName: "fas fa-dharmachakra mb-1",
          menuName: "Vintage",
          active: false,
          id: 12,
        },
      ],
    };
  },
};
</script>
<style scoped></style>
