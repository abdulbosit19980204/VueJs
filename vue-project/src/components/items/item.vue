<template>
  <div class="mx-2 float-start mb-2">
    <div class="card" style="width: 18rem">
      <img :src="item.itemImgSrc" class="card-img-top" alt="..." />
      <div class="card-body card-border">
        <p class="card-text">{{ item.itemInfo }}</p>
        <h4 class="card-title fw-bold">
          ${{ item.itemCost }}
          <span
            class="ms-5 text-success fs-6 p-1 bg-success bg-opacity-10 border rounded d-none"
            >50% OFF</span
          >
        </h4>
        <p class="fw-lighter">{{ item.itemDesc }}</p>
        <div class="d-flex justify-content-around">
          <div class="align-top d-flex fs-6">
            <i
              @click="onLike"
              class="fas fa-star star-ico"
              :class="[{ star: item.star }]"
            ></i>
            <i
              @click="onLike"
              class="fas fa-star star-ico"
              :class="[{ star: item.star }]"
            ></i>
            <i
              @click="onLike"
              class="fas fa-star star-ico"
              :class="[{ star: item.star }]"
            ></i>
            <i
              @click="onLike"
              class="fas fa-star star-ico"
              :class="[{ star: item.star }]"
            ></i>
            <i
              @click="onLike"
              class="far fa-star star-ico"
              :class="[{ star: item.star }]"
            ></i>
            <h5 class="mx-2 fs-5">4.05</h5>
          </div>
          <div class="d-flex justify-content-end">
            <a  class="btn btn-outline-primary"
            @click="onLiked"><i class="far fa-heart" :class="[{liked: item.liked}]"></i> Watch</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onLike() {
      this.$emit("onLike", this.item.id);
      // console.log(this.item.id);
    },
    onLiked(){
      this.$emit("onLiked", this.item.id)
      // console.log(this.item.id);
      
    }
  },
};
</script>
<style scoped>
.card {
  border: none;
}
.card:hover {
  /* box-shadow: 1px 1px 5px 1px rgb(218, 214, 214); */
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
  /* box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset; */
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}
.star-ico {
  /* color: rgb(249, 249, 18); */
  cursor: pointer;
}
.star {
  color: rgb(249, 249, 18);
}
.liked{
  color: red;
  }
</style>
