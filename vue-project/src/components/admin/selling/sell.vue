<template >
    <div class="container border border-success-subtle rounded">
        <form class="form mt-2" @submit.prevent>
            <div class="row">
                <div class="col-6">
                    <label for="img" class="form-label">Image</label>
                    <input type="text" class="form-control" id="img" :value="itemImgSrc" @input="itemImgSrc=$event.target.value">
                </div>
                <div class="col-6">
                    <label for="name" class="form-lable">Name  Information</label>
                    <input type="text"  class="form-control" id="name" :value="itemInfo" @input="itemInfo=$event.target.value">

                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <label for="cost" class="form-lable">Cost</label>
                    <input type="number"  class="form-control" id="cost" :value="itemCost" @input="itemCost=$event.target.value">

                </div>
                <div class="form-floating mt-3 col-8 ">
                    <textarea class="form-control" placeholder="Description here" id="desc" :value="itemDesc"  @input="itemDesc = $event.target.value" ></textarea>
                    <label for="desc">Comments</label>
                </div>
            </div>
            <div class="mt-2">
            <button type="submit" class="btn btn-outline-success" @click="addProduct">Add</button>
            <button type="submit" class="btn btn-outline-warning mx-3">Cancel</button>
            </div>
        </form>
        <br><br>
    </div>
</template>
<script>
export default {
   data(){
    return{
        itemImgSrc:'',
        itemInfo:'',
        itemCost:'',
        itemDesc:''
        }
   } ,
   methods: {
    addProduct(){
        const newProduct ={
            itemImgSrc: this.itemImgSrc,
            itemInfo:   this.itemInfo,
            itemCost:   this.itemCost,
            itemDesc:   this.itemDesc
        }
      
        this.$emit("createProduct", newProduct)
        this.itemCost     =''
        this.itemDesc     =''
        this.itemImgSrc   =''
        this.itemInfo     =''
    }
  
   },
}
</script>
<style >
    #desc{
        height: 100px;
       
    }
</style>