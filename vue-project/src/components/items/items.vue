<template lang="">
    <div class="mx-1 d-flex flex-wrap ">
      <Item v-for="item in items" v-bind:item="item" />  
     
     
    </div>
</template>
<script>
import Item from '@/components/items/item.vue'
export default {
    components:{
        Item,
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


}
</script>
<style scoped>
    
</style>