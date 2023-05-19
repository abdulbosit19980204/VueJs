<template >
 <nav class="navbar navbar-dark bg-black fixed-top">
     <div class="container-fluid">
     <a class="navbar-brand" @click="toHomeHandler()">
     <img :src="logo" alt="logo" class="w-25" @click="toHomeHandler()">
    </a>
   <userImage :src="src" :alt="'UserImage'"/>
     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
     <div class="offcanvas-header">
     <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
       <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <template v-if="isLoggedIn">
             <RouterLink  :to="{name:'home'}" class="btn btn-outline-light me-3 py-2 link-body-emphasis text-decoration-none"><i class="far fa-user"> </i>  {{currentUser.username}}</RouterLink>
            <a class="btn btn-outline-light" href="#" @click="logout"><i class="fas fa-unlock-keyhole"></i> Logout</a>
        </template>
        <template v-if="isAnonymous">
            <RouterLink  :to="{name:'login'}" class="   btn btn-outline-light  me-3 py-2 link-body-emphasis text-decoration-none ">Login <i class="fas fa-right-to-bracket"></i></RouterLink>
            <RouterLink :to="{name:'register'}" class=" btn btn-outline-light  me-3 py-2 link-body-emphasis text-decoration-none "> Register <i class="fas fa-user-plus"></i></RouterLink>
        </template>
        </nav>
     
     </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
     </div>
     <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fs-5 ms-3">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click="toHomeHandler()"> <i class="fas fa-home"></i>  Home</a>
        </li>
       
        <li class="nav-item mt-2">
            <i class="far fa-bookmark"></i>   Your Library
        </li><br>
        <li class="nav-item mt-2">
            <i class="fas fa-square-plus"></i>   Create List
        </li>
        <li class="nav-item mt-2">
            <i class="fas fa-heart"></i>  Liked articles
        </li><br>
        <li class="nav-item mt-2" v-if="isLoggedIn">
          <RouterLink  :to="{name:'create-article'}" class=" mt-3 text-light  link-body-emphasis text-decoration-none"><i class="fas fa-plus"></i> Create article</RouterLink><br>
        </li>
      </ul>
        <form class="d-flex mt-3" role="search" @submit.prevent>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit"><i class="fas fa-search"></i></button>
        </form>
     </div>
    </div>
     </div>
</nav>

    
    
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
    img,a{
        cursor: pointer;
    }
    .btn-outline-light{
        color: white;
    }
    .btn-outline-light:hover{
        color: red;
    }
    

</style>