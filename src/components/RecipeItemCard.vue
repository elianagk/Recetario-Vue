<template>
  <!-- <b-card
            :title="receta.nombre.toUpperCase().charAt(0) + receta.nombre.toLowerCase().slice(1)"
            :img-src="receta.image"
            img-alt="Imagen"
            img-height="40%"
            img-width="20%"
            img-top
            class="mt-3 "
          >
            <div id="line" class="mb-3"></div>

            <b-card-text>
                <strong>Paso a Paso  </strong>{{ receta.descripcion }}<br>
                <strong>Recomendacion  </strong>{{ receta.recomendacion }}<br>
                <strong>Comensales  </strong>{{ receta.comensales }}<br>
                <strong>Tiempo de Coccion  </strong>{{ receta.tiempo_coccion }}<br>
                <strong>Dificultad  </strong>{{ receta.dificultad }}<br>
                <strong>Categorias  </strong>
                <span v-for="n in categorias.length" :key="n">
                    <li v-for="categoria in categorias[n-1]"  :key="categoria.nombre">
                    {{categoria.nombre}}
                    </li>
                </span>
                <strong>Ingredientes </strong>
                <span v-for="n in ingredientes.length" :key="n-1">
                    <li v-for="ingrediente in ingredientes[n-1]"  :key="ingrediente.nombre">
                    {{ingrediente.nombre}} - {{cantidades[n-1]}}
                    </li>
                </span>
            </b-card-text>
        </b-card> -->

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
</style>
