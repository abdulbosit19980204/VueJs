<template >
    <div class="container text-center ">
        <main class="form-signin w-25 m-auto mt-5">
            <form>
                <img class="mb-4" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width="72" height="72">
                <h1 class="h3 mb-3 fw-normal mt-3 text-light">Register</h1>
                <ValidationError v-if="ValidationErrors" :ValidationErrors="ValidationErrors"/>


                <Input :label="'Name'" :type="text"            v-model="username" ></Input>
                <Input :label="'Email address'" :type="email"  v-model="email" ></Input>
                <Input :label="'Password'" :type="password"    v-model="password" ></Input>
                
                <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
              </form>
        </main>
    </div>
   
</template>
<script>
import {mapState} from 'vuex'
import ValidationError from "@/components/ValidationError.vue"
export default {
    components:{
        ValidationError
    },
    computed:{
        ...mapState({
        isLoading:state=>state.auth.isLoading,
        ValidationErrors:state=>state.auth.errors
      })
        // isLoading(){
        //     return this.$store.state.auth.isLoading
        // },
        // ValidationErrors(){
        //     return this.$store.state.auth.errors
        // },
    },
    methods:{
        submitHandler(e){
            e.preventDefault();
            const data ={
                email:this.email,
                password:this.password,
                username:this.username,
            }
            this.$store.dispatch('register',data).then((result) => {
                console.log('USER',result)
                this.$router.push({name:'home'})
            }).catch((err) => {
                console.log('Error',err);
            });
        }
    }
}
</script>
<style >
    
</style>