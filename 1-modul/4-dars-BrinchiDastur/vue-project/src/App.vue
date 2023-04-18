<template>
    <div class="container mt-5">
        <h1>Counter: {{ conuter }}</h1>
       <div class="d-flex">
        <button class="btn btn-success" @click="onIncrement">Add</button>
        <button class="btn btn-danger mx-3" @click="onDecrament">Remove</button>
       </div>
    </div>
</template>

<script>
export default{
   data(){
        return {
            conuter:0
        }
   },
   methods: {
    onIncrement(){
        if(this.conuter <10){

            this.conuter+=1
        }else{
            this.conuter = 0
        }
    },
    onDecrament(){
        if(this.conuter>0){

            this.conuter-=1
        }else{
            this.conuter=10
        }
    },
   }, 
}
</script>
<style>

</style>