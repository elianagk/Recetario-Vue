<template>
  <div id="fondoCards" class="Recipes">

    <div id="fondoText">
      <h1 class="text-center">Receta</h1> 
    </div>
      <b-container>
      <b-row>
        <b-col cols="12" v-for="receta in recetas" :key="receta.id_receta">
          
          <RecipeItemCard :receta="receta" :categorias="categorias" :ingredientes="ingredientes" :cantidades="cantidades" />  
          
        </b-col>
        
      </b-row>
    </b-container>

  </div>
</template>

<script>

import RecipeItemCard from "@/components/RecipeItemCard"
import axios from "axios"
export default {
   name: 'Recipes',
    components: {
      RecipeItemCard
    },
    data() {
      return {
          recetas: null,
          imagen: null,
          cate: [],
          ingre: [],
          categorias: [],
          ingredientes: [],
          cantidades: []
      }   
    },
    mounted() {
      this.id_receta = this.$route.params.id_receta;
      this.getReceta();
      this.getCategorias();
      this.getIngredientes();
    },
    methods: {
      getReceta(){
         axios
            .get('https://frozensea-vue.herokuapp.com/receta/'+ this.id_receta)
            .then(response => (this.recetas = response.data))
            
      },
      getCategorias(){
        axios
          .get('https://frozensea-vue.herokuapp.com/receta/'+ this.id_receta + '/categorias')
          .then(response => response.data.forEach(element => { 
             axios
              .get('https://frozensea-vue.herokuapp.com/receta/'+ this.id_receta + '/categorias/'+ element.id_categoria)
              .then(res => this.categorias.push(res.data))
          }))
         
      },
      getIngredientes(){
        axios
          .get('https://frozensea-vue.herokuapp.com/receta/'+ this.id_receta + '/ingredientes')
          .then(response => response.data.forEach(element => { 
             axios
              .get('https://frozensea-vue.herokuapp.com/receta/'+ this.id_receta + '/ingredientes/'+ element.id_ingrediente)
              .then(res => (this.ingredientes.push(res.data)))
              .then(this.cantidades.push(element.cantidad))
          
          }))
         
      },
    }
  }
  
</script>

<style scoped>

  #fondoText{
    background-color: rgb(156, 26, 109);
    height: 4rem;
    padding:4px;
    text-shadow: 2px 2px 5px black;
  }

  h1{
    color:white;
  }

  


</style>