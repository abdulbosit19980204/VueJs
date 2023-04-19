<template >
    <div class="container">
        <p>
        <a class="nav-link" data-bs-toggle="collapse" href="#collapseExampleInner" role="button" aria-expanded="false" aria-controls="collapseExample">
            <i class="fas fa-angle-right"></i>
            {{ categorie.categoriesItemName }}
        </a>
          </p>
        <div class="collapse" id="collapseExampleInner">
        <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
        </div> 
    </div>
</template>
<script>

export default {
    props:{
        categorie:{
            type: Object,
            required: true,
        }
    }
}
</script>
<style scoped>
    .fa-angle-right{
        color: blue;
    }
</style>