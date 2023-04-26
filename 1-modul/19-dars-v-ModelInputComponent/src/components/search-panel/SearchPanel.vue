<template >
    <div class="container">
       <Input class="search-input" placeholder="Kinolarni qidirish"  v-model="term" @input="changeHandler"/>
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