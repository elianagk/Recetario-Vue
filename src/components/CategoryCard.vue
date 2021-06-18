<template>
           
        <b-card 
            :title="categoria.nombre" 
            class="card mt-3 text-center"   
        >     
            <template #footer>
                <b-button id="fondoBoton" pill :to="'categorias/' + categoria.id_categoria" block class="w-100 mt-2" >Ver recetas</b-button>
            </template>
        </b-card>
    
</template>

<script>


export default {
    name: "CategoryCard",
    props: [
        "categoria",
        
    ],
   
}
</script>


<style scoped>
    #fondoBoton {
        background-color: rgb(156, 26, 109);
        height: 3rem;
        text-justify: auto;
    }  
    .card:hover {
        box-shadow: 0px 0px 5px rgb(151, 6, 204);
    }

    .card{
        border-style: none;
        height: 98%;
        background-color: rgb(226, 149, 198);
    }

</style>