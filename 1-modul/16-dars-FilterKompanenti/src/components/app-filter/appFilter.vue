<template lang="">
<div class="btn-group mt-3">
    <button class="btn " type='button' :class="[filterName=='all' ? 'btn-dark' : 'btn-outline-dark' ]" @click ='filterHandler("all")'>Barcha kinolar</button>
    <button class="btn " type='button' :class="[filterName=='popular' ? 'btn-dark' : 'btn-outline-dark' ]" @click ='filterHandler("popular")'>Mashxur kinolar</button>
    <button class="btn " type='button' :class="[filterName=='mostViewers' ? 'btn-dark' : 'btn-outline-dark' ]" @click ='filterHandler("mostViewers")'>Eng kop korilgan kinolar</button>
</div>
</template>
<script>
export default {
    data() {
        return {
            filter:'all',
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