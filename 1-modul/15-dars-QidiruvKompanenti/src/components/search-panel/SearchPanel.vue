<template lang="">
    <div class="container">
       <input type="text" class="form-control search-input" placeholder="Kinolarni qidirish" 
       @input="changeHandler" 
       :value="term"/>
    </div>
</template>
<script>
export default {
    props:{
        updateTermHandler:{
            type: Function,
            required: true,
        }
    },
    data(){
        return {
            term: '',
        }
    },
    methods: {
        changeHandler(e){
            this.term = e.target.value,
            this.updateTermHandler(this.term)
        }
    },
}
</script>
<style scoped>
    .search-input{
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfcf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
    }
</style>