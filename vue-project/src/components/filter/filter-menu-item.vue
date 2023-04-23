<template>
  <a href="#" class="nav-link mt-3 mb-5">
    <h6 class="fw-lighter text text-center mx-2" :class="[{ active: menu.active }]">
      <i v-bind:class="menu.menuClassName"></i><br />
      {{ menu.menuName }}
    </h6>
  </a>
</template>
<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
h6 {
  color: #787885;
}
h6:hover,
.active {
  color: #2979ff;
}
h6 {
  cursor: pointer;
}
</style>
