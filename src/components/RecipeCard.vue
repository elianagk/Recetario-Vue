<template>

        <b-card 
            :title="receta.nombre.toUpperCase().charAt(0) + receta.nombre.toLowerCase().slice(1)" 
            class="card mt-3 text-center"
            :img-src="getImagen(receta.image)" 
            img-alt="Imagen" 
            img-top
        >     
            <template #footer>
                <b-button id="fondoBoton" pill :to="'receta/' + receta.id_receta" block class="w-100 mt-auto" >Ver receta</b-button>
            </template>
        </b-card>


        
    
</template>

<script>
import default_image from "@/assets/default_image.png"

export default {
    name: "RecipeCard",
    props: [
        "receta",
        
    ],
    methods: {
        getImagen(imagen){
            if (imagen != null){
                return imagen
            }
            else{
                return default_image
            }
        }
    }
   
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
    .card-img-top {
        width: 100%;
        height: 12rem;
        object-fit: cover;
    
    }
    .card-button {
        object-fit: cover;
    }
    

</style>