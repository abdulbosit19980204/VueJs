<template >
    <div class="container text-center ">
        <main class="form-signin w-25 m-auto mt-5">
            <form>
                <img class="mb-4" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width="72" height="72">
                <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

                <Input :label="'Name'" :type="text"></Input>
                <Input :label="'Email address'" :type="email"  ></Input>
                <Input :label="'Password'" :type="password"  ></Input>
                
                <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
              </form>
        </main>
    </div>
   
</template>
<script>
export default {
    computed:{
        isLoading(){
            return this.$store.state.auth.isLoading
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault();
            const data ={
                email:"aasa4dsd@jfn.asd",
                password:"j551d4sfF",
                username:"sdfsadda",
            }
            this.$store.dispatch('register',data).then((result) => {
                console.log('USER',result)
            }).catch((err) => {
                console.log('Error',err);
            });
        }
    }
}
</script>
<style >
    
</style>