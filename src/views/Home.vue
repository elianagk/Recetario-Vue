<template>
  <div class="home">

    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      :interval="4000"
      fade
      indicators
      img-width="50%"
      img-height="50%"
    >
    <span v-for="receta in recetas" :key="receta.id_receta">
      <b-carousel-slide
        :caption="receta.nombre"
        :img-src="receta.image"
        :img-alt="receta.nombre"
      ></b-carousel-slide>
    </span>
      
  </b-carousel>
    
    <div id="fondoRecetas">
      <h1>Recetas</h1> 
    </div>

    <div id="searchInput" >
        
    </div>

    <div id="fondoItems">
      
      <b-col cols="11" class="justify-content-end d-flex mt-3">
        <input type="text" v-model="search"  placeholder="Buscar receta">
      </b-col>
      <b-container>
        <b-row>
            <b-col md="3" sm="6" cols="12" v-for="receta in recetasFiltradas" :key="receta.id_receta" >
              <RecipeCard :receta="receta" />  
            </b-col>
        </b-row>
      </b-container>
    </div>

  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard"
import axios from "axios"


export default {
    name: 'Home',
    components: {
      RecipeCard,
      
    },
    data() {
      return {
          recetas: null,
          search: ''
          
      }   
    },
    computed: {
      recetasFiltradas: function(){
         return this.recetas.filter((receta) => {
              return receta.nombre.toUpperCase().match(this.search.toUpperCase());
          });
      }
    },
    
    mounted() {
      this.getRecetas()
      
    },
    methods: {
      getRecetas(){
          axios
            .get('https://iawek-servicio-web.herokuapp.com/recetas')
            .then(response => (this.recetas = response.data))
      }
       
    }
  }
</script>


<style scoped>
  #fondoRecetas {
    background-color: rgb(156, 26, 109);
    height: 4rem;
  }  

  h1{
    color:white;
    text-shadow: 2px 2px 5px black;    
    padding: 4px;
    text-align: center;
    
    
  }

 
  
</style>