<template >
    <ul class="list-group">
        <li class="list-group-item list-group-item-danger" v-for='errorMessage in errorMessages' ::key="errorMessage">
        {{errorMessage}}
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        ValidationErrors:{
            type: Object,
            required: true,
        },
    },
    computed: {
        errorMessages(){
            return Object.keys(this.ValidationErrors).map(name=>{
                const msg = this.ValidationErrors[name].join(', ')
                return `${name} ${msg}`
            })
            //  ['email is a required field', 'password is a required field','username is a required field']
        }
    },
}
</script>
<style lang="">
    
</style>