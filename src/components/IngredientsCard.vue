//La lista de ingredientes
<template>
          
        <b-card 
            :title="ingrediente.nombre.toUpperCase().charAt(0) + ingrediente.nombre.toLowerCase().slice(1)" 
            class="card mt-3 text-center"   
        >     
            <template #footer>
                <b-button id="fondoBoton" pill :to="'ingredientes/' + ingrediente.id_ingrediente" block class="w-100 mt-2" >Ver recetas</b-button>
            </template>
        </b-card>
  
</template>

<script>


export default {
    name: "IngredientsCard",
    props: [
        "ingrediente",
        
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
        box-shadow: 0px 0px 3px white;
    }

    .card{
        border-style: none;
        height: 98%;
        background-color: rgb(226, 149, 198);
    }

</style>