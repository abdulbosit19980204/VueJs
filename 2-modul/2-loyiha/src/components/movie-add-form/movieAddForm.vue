<template>
    <Box class="ms-5 addFormBorder">
        <h3>Add New Film</h3>
                <form action="" class="add-form d-flex flex-wrap" @submit.prevent>
           <div>
                <div class="row col-12">
                    <div class="col-8">
                            <Input v-model="name" class="new-movie-label"      placeholder="Name"                              ></Input>
                    </div>
                    <div class="col-4">
                            <Input v-model="viewers" class="new-movie-label mx-2" placeholder="views"  type="text"  ></Input>
                    </div>
                </div>
                <div class="row col-12 mt-3">
                    <div class="col-6">
                            <Input v-model="imgSrc" class="new-movie-label"      placeholder="Image Link"                              ></Input>
                    </div>
                    <div class="col-6">
                            <Input v-model="videoLink" class="new-movie-label mx-2" placeholder="video url"  type="text"  ></Input>
                    </div>
                </div>
                <div class="row col-12 mt-3">
                <textarea rows="10" placeholder="Description" v-model="desc"></textarea>
                    <!-- <div class="col-6"> -->
                            <!-- <Input v-model="name" class="new-movie-label"      placeholder="Image Link"                              ></Input> -->
                    <!-- </div> -->
                  
                </div>
                <div class="row mt-3">
                    <div class="col-8">
                    <PrimaryButton class="btn-outline-light mx-3" type="submit" @click="addMovie" >Add to my list</PrimaryButton>
                    </div>
                    <br><br>
                </div>
           </div>
        </form>
    </Box>
</template>
<script>
   export default {
       data(){
        return {
            name: '',
            viewers:'',
            imgSrc:'',
            videoLink:'',
            desc:'',
            }
    },
    methods:{
        addMovie(){
            if(!this.name || !this.viewers)return
            const newMovie={
                name: this.name,
                viewers:this.viewers,
                imgSrc: this.imgSrc,
                videoLink: this.videoLink,
                desc: this.desc,
                favourite: false,
                id: Date.now(),
            }
            
            this.$emit("createMovie",newMovie)
            this.name=''
            this.viewers=''
            this.videoLink=''
            this.imgSrc=''
            this.desc=''
        }
    }
   
}
</script>
<style scoped>
 input, .addFormBorder {
    padding: 0.5rem;
    padding-left: 15px;
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
    textarea{
    padding: 0.5rem;
    padding-left: 15px;
    margin-left: 8px;
    border-radius: 4px;
    color: aliceblue;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #323B54;
    border-radius: 12px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
    }
</style>