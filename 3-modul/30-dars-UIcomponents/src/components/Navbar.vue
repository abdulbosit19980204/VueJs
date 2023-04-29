<template >
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center link-body-emphasis text-decoration-none" >
      <img :src="logo" alt="logo" srcset="" class="w-25" @click="toHomeHandler()">
      </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <RouterLink  :to="{name:'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none ">Login <i class="fas fa-right-to-bracket"></i></RouterLink>
            <RouterLink :to="{name:'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none "> Register <i class="fas fa-user-plus"></i></RouterLink>
        </nav>
    </div>
</template>
<script>
import { logo } from '../constants';
export default {
    data(){
        return{
            logo,
        }
    },
    methods:{
        toHomeHandler(){
            return this.$router.push('/')
        }
    }
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