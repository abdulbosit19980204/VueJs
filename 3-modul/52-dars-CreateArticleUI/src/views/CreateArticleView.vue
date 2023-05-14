<template >
        <p class="text-center display-2">Create article</p>
    <div class="w-50 mx-auto">
    <form @submit.prevent>
        <Input type='text' label='title' v-model="title"/>
        <TextArea type='text' label='description' v-model="description"/>
        <TextArea type='text' label='Body' v-model="body"/>
        <Button @click="CreateArticleHandler">Create article</Button>
    </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
                title:'',   
                description:'',
                body: '',
            
        }
    },
    methods:{
        CreateArticleHandler(){
            const article ={
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: [],
            }
            console.log(article);
        },
    }
}
</script>
<style >
    
</style>