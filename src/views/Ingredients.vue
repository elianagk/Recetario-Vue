<template>
  <div class="ingredients">

    <div id="fondoIngredientes">
      <h1>Ingredientes</h1> 
    </div>

    <div id="fondoItems">
      <b-col v-if="ingredientes" cols="11" class="justify-content-end d-flex mt-3">
        <input type="text" v-model="search"  placeholder="Buscar ingrediente">
      </b-col>
      <b-container>
        <b-row>
          <b-col md="3" sm="6" cols="12" v-for="ingrediente in ingredientesFiltrados" :key="ingrediente.id_ingrediente">
            <IngredientsCard :ingrediente="ingrediente" />  
          </b-col>
        </b-row>
      </b-container>
    </div>

  </div>
</template>

<script>
import IngredientsCard from "@/components/IngredientsCard"
import axios from "axios"

export default {
    name: 'Home',
    components: {
      IngredientsCard
    },
    data() {
      return {
          ingredientes: null,
           search: ''
      }   
    },
    computed: {
      ingredientesFiltrados: function(){
         return this.ingredientes.filter((ingrediente) => {
              return ingrediente.nombre.toUpperCase().match(this.search.toUpperCase());
          });
      }
    },
    mounted() {
      this.getIngredientes()
      
    },
    methods: {
      getIngredientes(){
          axios
            .get('http://localhost:8080/ingredientes')
            .then(response => (this.ingredientes = response.data))
      },

     
    },
  }
</script>


<style scoped>
  #fondoIngredientes {
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