<template>
    <Box>
        <h3>Yangi kino qoshish</h3>
        <form action="" class="add-form d-flex" @submit.prevent>
        <Input v-model="name" class="new-movie-label"      placeholder="Qanday kino"                              ></Input>
        <Input v-model="viewers" class="new-movie-label mx-2" placeholder="Nechi marotaba korilgan"  type="number"  ></Input>
            
            <div class="input-group">
                <div class="input-group-text">
                    <input type="checkbox" name="" id="" class="form-check-input new-movie-lable">
                </div>
                <span for="" class="input-group-text" >Mashxur film</span>
            </div>
            <PrimaryButton class="btn-outline-dark mx-3" type="submit" @click="addMovie" >Qoshish</PrimaryButton>
        </form>
    </Box>
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
            if(!this.name || !this.viewers)return
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

    
</style>