// deberia tener lo mismo q en home
<template>
  <div class="category">

    <div id="fondoCategorias">
      <h1>Categorias</h1> 
    </div>

    <div id="fondoItems">
      <b-col v-if="categorias" cols="11" class="justify-content-end d-flex mt-3">
        <input type="text" v-model="search"  placeholder="Buscar categoria">
      </b-col>
      <b-container>
        <b-row v-if="categoriasFiltradas.length">
          <b-col md="3" sm="6" cols="12" v-for="categoria in categoriasFiltradas" :key="categoria.id_categoria">
            <CategoryCard :categoria="categoria" />  
          </b-col>
        </b-row>
        <b-row v-else>
          <EmptySection />
        </b-row>
      </b-container>
    </div>

  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard"
import EmptySection from "@/components/EmptySection"
import axios from "axios"

export default {
    name: 'Home',
    components: {
      CategoryCard,
      EmptySection
    },
    data() {
      return {
          categorias: null,
           search: ''
      }   
    },
    computed: {
      categoriasFiltradas: function(){
        if(!(this.categorias === null)){
         return this.categorias.filter((categoria) => {
              return categoria.nombre.toUpperCase().match(this.search.toUpperCase());
          });
        }
        return []
      }
    },
    mounted() {
      this.getCategorias()
      
    },
    methods: {
      getCategorias(){
          axios
            .get('https://iawek-servicio-web.herokuapp.com/categorias')
            .then(response => (this.categorias = response.data))
      },

     
    },
  }
</script>


<style scoped>
  #fondoCategorias {
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