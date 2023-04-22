<template>
    <div class="movie-add-form">
        <h3>Yangi kino qoshish</h3>
        <form action="" class="add-form d-flex" @submit.prevent>
            <input type="text" name="" id="" class="form-control new-movie-label" placeholder="Qanday kino" :value="name" @input="name=$event.target.value" >
            <input type="number" name="" id="" class="form-control new-movie-label mx-2" placeholder="Nechi marotaba korilgan" :value="viewers" @input="viewers=$event.target.value">
            <div class="input-group">
                <div class="input-group-text">
                    <input type="checkbox" name="" id="" class="form-check-input new-movie-lable">
                </div>
                <span for="" class="input-group-text" >Mashxur film</span>
            </div>
            <button class="btn btn-outline-dark mx-3" type="submit" @click="addMovie" >Qoshish</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: '',
            viewers:'',
            
        }
    },
    methods:{
        addMovie(){
            const newMovie={
                name: this.name,
                viewers:this.viewers,
                favourite: false,
                id: Date.now(),
            }
            
            this.$emit("createMovie",newMovie)
            this.name=''
            this.viewers=''
        }
    }
   
}
</script>
<style>
.movie-add-form{
    margin-top: 30px;
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfcf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
    
</style>