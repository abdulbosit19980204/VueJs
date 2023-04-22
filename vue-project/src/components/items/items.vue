<template lang="">
    <div class="row mb-5 d-flex">
        <div class=" mx-3 d-flex col-5 mt-2  justfiy-content-start" >
         <div class="d-flex col-5 ">
            <select class="form-select" aria-label="Default select example">
            <option selected >Useless first</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
         <div class="col-3 mx-1">
            <select class="form-select" aria-label="Default select example">
            <option selected>Condition</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
         <div class="col-4 ">
            <select class="form-select" aria-label="Default select example">
            <option selected>Delivery options</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        </div>
        <div class="row col-6 mt-2 justfiy-content-end">
            <div class="d-flex mx-5 justify-content-end ms-5">
                <button class="btn btn-outline-primary btn-filter">Show all</button>
                <button class="btn btn-outline-primary btn-filter btn-filter-active">Auction</button>
                <button class="btn btn-outline-primary btn-filter ">Buy now</button> 
                <button class="btn btn-outline-primary btn-filter btn-filter-view ms-3"><i class="fas fa-list"></i></button>
                <button class="btn btn-outline-primary btn-filter btn-filter-view btn-filter-active" ><i class="fas fa-border-all"></i></button>
                </div>
                    
        </div>

    </div>
    
    <div class="row ">
        <div class="mx-1 d-flex flex-wrap ">
            <Item v-for="item in items" v-bind:item="item" />  
        </div>
    </div>
   
<Selling @createProduct="createProduct"/>
</template>
<script>
import Item from '@/components/items/item.vue'
import Selling from '@/components/admin/selling/sell.vue'
export default {
    components:{
        Item,Selling
    },
    data() {
        return {
            items:[
                {
                    itemImgSrc:'src/assest/img/item1.png',
                    itemInfo:"Vintage Typewriter to post awesome stories about UI design and webdev.",
                    itemCost: 49.50,
                    itemDesc: "Eligible for Shipping To Mars or somewhere else"
                },
                {
                    itemImgSrc:'src/assest/img/item2.png',
                    itemInfo:"Lee Pucker design. Leather botinki for handsome designers. Free shipping.",
                    itemCost: 13.95,
                    itemDesc: "1258 bids, 359 watchers $5.95 for shipping"
                },
                {
                    itemImgSrc:'src/assest/img/item3.png',
                    itemInfo:"Timesaving kitten to save months on development. Playful, cute, cheap!",
                    itemCost: 128.99,
                    itemDesc: "Eligible for nothing :("
                },
                {
                    itemImgSrc:'src/assest/img/item1.png',
                    itemInfo:"Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",
                    itemCost: 12.48,
                    itemDesc: "Wordwide shitting available Buyers protection possible!"
                },
                {
                    itemImgSrc:'https://target.scene7.com/is/image/Target/GUEST_eaf4b2f8-6c14-4872-a5e2-d914385627ad?wid=800',
                    itemInfo:"Creativity stimulating lotion. Drink every morning to generate better ideas!",
                    itemCost: 49.50,
                    itemDesc: "Eligible for Shipping To Mars or somewhere else"
                },
                {
                    itemImgSrc:'https://hamleysgumlet.gumlet.io/product/492407841/300/492407841-1.JPG',
                    itemInfo:"Creativity stimulating lotion. Drink every morning to generate better ideas!",
                    itemCost: 49.50,
                    itemDesc: "Eligible for Shipping To Mars or somewhere else"
                },
                {
                    itemImgSrc:'https://cdn.shopify.com/s/files/1/0582/2047/8653/collections/toys-banner.png?v=1668610399',
                    itemInfo:"Creativity stimulating lotion. Drink every morning to generate better ideas!",
                    itemCost: 49.50,
                    itemDesc: "Eligible for Shipping To Mars or somewhere else"
                },
                {
                    itemImgSrc:'https://contents.mediadecathlon.com/p2154024/81161c8d43d86956bb3dd4e03d831194/p2154024.jpg?format=auto&quality=70&f=650x0',
                    itemInfo:"Creativity stimulating lotion. Drink every morning to generate better ideas!",
                    itemCost: 49.50,
                    itemDesc: "Eligible for Shipping To Mars or somewhere else"
                },
                {
                    itemImgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/220px-Basketball.png',
                    itemInfo:"Creativity stimulating lotion. Drink every morning to generate better ideas!",
                    itemCost: 49.50,
                    itemDesc: "Eligible for Shipping To Mars or somewhere else"
                },
            ]
        }
    },
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
    },
    createProduct(product){
    this.items.push(product)
    }
},

}
</script>
<style scoped>
    .form-select:focus{
        box-shadow: none;
    }
    .form-select{
        font-size: 14px;
    }
    .select-filter{
        width: 800px;
    }
    .btn-filter{
        width: 105px;
        height: 36px;
        border-radius: 5px;
        border: none;
        color:#5A5B6A ;
        background: #EBF2FF;

    }
    .btn-filter-view{
        width: 45px;
        border: none;
        background: #EBF2FF;
        color: #5A5B6A;
    }
    .btn-filter-active{
        background-color: white;
        box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2), 0px 4px 8px rgba(41, 121, 255, 0.2);
        color: #2264D1;
        gap: 8px;
        transform: scale(1.1);
    }
    .btn-filter:hover{
        background-color: white;
        box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2), 0px 4px 8px rgba(41, 121, 255, 0.2);
        color: #2264D1;
        gap: 8px;
        transform: scale(1.1);
    }
</style>