<template >
    <div class="fs-3">
        <h1>Counter {{ counter }}</h1>
        <div class="w-25">
                <Button @click="increaseHandler"><i class="fas fa-plus"></i> Increase</Button>
                <Button @click="decreaseHandler"><i class="fas fa-minus"></i> Decrease</Button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        increaseHandler(){
            this.$store.commit('increment')
            
        },
        decreaseHandler(){
            this.$store.commit('decrement')
        }
    },
    computed:{
        counter(){
            return this.$store.state.count
        }
    }
}
</script>
<style >
    
</style>