<template >
    <div>
        <h1>Article details</h1>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$route.params.slug)
        this.$store.dispatch('articleDetail',this.$route.params.slug)

    },
}
</script>
<style >
    
</style>