<template >
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center link-body-emphasis text-decoration-none" >
      <img :src="logo" alt="logo" srcset="" class="w-25" @click="toHomeHandler()">
      </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <template v-if="isLoggedIn">
            <RouterLink  :to="{name:'create-article'}" class="btn btn-light me-3 py-2 link-body-emphasis text-decoration-none"><i class="fas fa-plus"></i> Create article</RouterLink>
            <RouterLink  :to="{name:'home'}" class="btn btn-light me-3 py-2 link-body-emphasis text-decoration-none"><i class="far fa-user"> </i>  {{currentUser.username}}</RouterLink>
            <a class="btn btn-light" href="#" @click="logout">Logout</a>
        </template>
        <template v-if="isAnonymous">
            <RouterLink  :to="{name:'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none ">Login <i class="fas fa-right-to-bracket"></i></RouterLink>
            <RouterLink :to="{name:'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none "> Register <i class="fas fa-user-plus"></i></RouterLink>
        </template>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { logo } from '../constants';
import { gettersTypes } from "@/modules/types";
export default {
    data(){
        return{
            logo,
        }
    },
    computed:{
        ...mapGetters({
            currentUser: gettersTypes.currentUser,
            isLoggedIn:  gettersTypes.isLoggedIn, 
            isAnonymous: gettersTypes.isAnonymous,
        })
      
    },
    methods:{
        toHomeHandler(){
            return this.$router.push({name:"home"})
        },
        logout(){
            return this.$store.dispatch('logout')
        }
    },
}
</script>
<style scoped>
    img{
        cursor: pointer;
    }
    a:hover{
        color: red;
    }
</style>