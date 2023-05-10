<template >
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center link-body-emphasis text-decoration-none" >
      <img :src="logo" alt="logo" srcset="" class="w-25" @click="toHomeHandler()">
      </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <template v-if="isLoggedIn">
            <div>
               <strong class="rounded-pill btn bg-body-tertiary btn-outline-primary">
               <i class="fas fa-user"></i>
                {{currentUser.username}}
                <RouterLink  :to="{name:'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none btn btn-light"> <i class="fas fa-arrow-right-from-bracket"></i> Log out</RouterLink>
               </strong>
            </div>
        </template>
        <template v-if="isAnonymous">
            <RouterLink  :to="{name:'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none ">Login <i class="fas fa-right-to-bracket"></i></RouterLink>
            <RouterLink :to="{name:'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none "> Register <i class="fas fa-user-plus"></i></RouterLink>
        </template>
        </nav>
    </div>

        <template v-if="isLoggedIn">
        <div class="col-md-5 col-lg-4 order-md-last">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge bg-black text-warning rounded"><i class="fas fa-user"></i> {{currentUser.username}}</span>
                <span class="text-warning bg-black rounded badge"><i class="fas fa-circle-info"></i> Your data</span>
                </h4>
                <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                    <h6 class="my-0">ID</h6>
                    <small class="text-body-secondary">{{currentUser.id}}</small>
                    </div>
                    <span class="text-body-secondary"><i class="fas fa-check "></i></span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                    <h6 class="my-0">Email</h6>
                    <small class="text-body-secondary">{{currentUser.email}}</small>
                    </div>
                <span class="text-body-secondary"><i class="fas fa-check "></i></span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                    <h6 class="my-0">User name</h6>
                    <small class="text-body-secondary">{{currentUser.username}}</small>
                    </div>
                    <span class="text-body-secondary"><i class="fas fa-check "></i></span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                    <div class="text-success">
                    <h6 class="my-0">Created At</h6>
                    <small>{{currentUser.createdAt}}</small>
                    </div>
                <span class="text-body-secondary"><i class="fas fa-check "></i></span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-black">
                    <div class="text-warning">
                    <h6 class="my-0">Updated At</h6>
                    <small>{{currentUser.updatedAt}}</small>
                    </div>
                <span class="text-warning"><i class="fas fa-check "></i></span>
                </li>
                </ul>
            
            </div>
        </template>
        <template v-if="isAnonymous">
            <div>
                <h3>Foydalanuvchi ro'yxatdan o'tkazilmagan yoki kirilmagan</h3>
            </div>
        </template>


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