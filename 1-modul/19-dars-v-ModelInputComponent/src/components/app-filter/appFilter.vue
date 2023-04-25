<template lang="">
<div class="btn-group mt-3">

    <PrimaryButton v-for="btn in filterButtons " 
    :key="btn.name" class="btn" 
    :class="[filterName==btn.name ? 'btn-dark' :'btn-outline-dark' ]"
    @click="filterHandler(btn.name)" >
    {{btn.title}}
    </PrimaryButton>
   </div>
</template>
<script>

export default {
    
    data() {
        return {
            filter:'all',
            filterButtons:[
                {
                title:"Barcha kinolar",
                name:"all"
                },
                {
                title:"Mashxur kinolar",
                name:"popular"
                },
                {
                title:"Eng kop korilgan kinolar",
                name:"mostViewers"
                },
        ]
               
            
        }
    },
    props:{
        updateFilterHandler:{
            type: Function,
            required: true,
        },
        filterName:{
            tyoe: String,
            required: true,
        },
    },
    methods: {
        filterHandler(filter){
            this.filter = filter
            this.updateFilterHandler(this.filter)
        }
    },
}
</script>
<style scoped>
    
</style>