<template>

  <b-card :title="receta.nombre.toUpperCase().charAt(0) + receta.nombre.toLowerCase().slice(1)" body-class="text-center" header-tag="nav">
    
      <b-tabs card>
        <b-tab title="Pasos" active  >
          
          <b-card-text align="left">
               <strong>Paso a Paso  </strong>{{ receta.descripcion }}<br>
                <strong>Recomendación  </strong>{{ receta.recomendacion }}<br>
                <strong>Comensales  </strong>{{ receta.comensales }}<br>
                <strong>Tiempo de Cocción  </strong>{{ receta.tiempo_coccion }}<br>
                <strong>Dificultad  </strong>{{ receta.dificultad }}<br>
                <strong>Categorías  </strong>
                <span v-for="n in categorias.length" :key="n">
                    <li v-for="categoria in categorias[n-1]"  :key="categoria.nombre">
                    {{categoria.nombre}}
                    </li>
                </span>
          </b-card-text>
        </b-tab>
        <b-tab title="Ingredientes">
          <b-card-text align="left">
               <span v-for="n in ingredientes.length" :key="n-1">
                    <li v-for="ingrediente in ingredientes[n-1]"  :key="ingrediente.nombre">
                    {{ingrediente.nombre}} - {{cantidades[n-1]}}
                    </li>
                </span>
          </b-card-text>
        </b-tab>
      </b-tabs>
      <ShareNetwork
          network="whatsapp"
          :url="
            'https://frozensea-recipe.herokuapp.com/receta/' + receta.id_receta
          "
          :title="receta.nombre"
          class="whatsapp"
        >
         <i class="fa fa-whatsapp whatsapp-icon" ></i>
        </ShareNetwork>

  </b-card>
</template>

<script>
export default {
  name: "RecipeItemCard",
  props: ["receta", "categorias", "ingredientes", "cantidades"],
};
</script>


<style scoped>
.card:hover {
  box-shadow: 0px 0px 5px white;
}

.card {
  border-style: none;
  background-color: rgb(226, 149, 198);
}

#line {
  border: 1px rgb(97, 18, 112) solid;
}

.whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
}

.whatsapp-icon {
  margin-top:13px;
}
</style>
