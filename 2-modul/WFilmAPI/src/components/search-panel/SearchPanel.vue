<template >
    <div class="container">
       <Input class="search-input" placeholder="Searching ..."  v-model="term" @input="changeHandler"/>
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
    color: aliceblue;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #323B54;
    border-radius: 12px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
    }
    ::placeholder {
        color: rgb(252, 252, 252);
        opacity: 0.3; /* Firefox */
        }
</style>