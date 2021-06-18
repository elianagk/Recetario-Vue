<template>
  <div id="fondoCards" class="IngredientsRecipes">

    <div id="fondoText">
      <h1 class="text-center">Receta</h1> 
    </div>
      <b-container>
      <b-row>
          
        <b-col md="3" sm="6" cols="12" v-for="n in recetas.length" :key="n">
        <b-col  v-for="receta in recetas[n-1]" :key="receta.id_receta">
            <RecipeCard :receta="receta" />  
          </b-col>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>

import RecipeCard from "@/components/RecipeCard"
import axios from "axios"
export default {
   name: 'Recipes',
    components: {
      RecipeCard
    },
    data() {
      return {
          recetas: [],
          r:[]
      }   
    },
    mounted() {
      this.id_ingrediente = this.$route.params.id_ingrediente
      this.getReceta();
    },
    methods: {
      getReceta(){
         axios
            .get('http://localhost:8080/ingrediente/'+this.id_ingrediente+'/receta')
            .then(response => response.data.forEach(element => {
                    
                axios
                .get('http://localhost:8080/ingrediente/'+this.id_ingrediente+'/receta/'+element.id_receta)
                .then(res => this.recetas.push(res.data))
 
                }))
      }
    }
  }
  
</script>

<style scoped>

  #fondoText{
    background-color: rgb(156, 26, 109);;
    height: 4rem;
    padding:4px;
    text-shadow: 2px 2px 5px black;
  }

  h1{
    color:white;
  }

  

</style>