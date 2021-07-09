import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import CategoryItem from '../views/CategoryItem.vue'
import Recipes from '../views/Recipes.vue'
import Ingredients from '../views/Ingredients.vue'
import IngredientsItem from '../views/IngredientsItem.vue'


Vue.use(VueRouter)

/*
Home -> todas las recetas
RecetaItem -> item de receta
Categoria -> todas las categorias
*/

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/receta/:id_receta',
    name: 'Recetas',
    component: Recipes
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Category
  },
  {
    path: '/categorias/receta/:id_receta',
    name: 'Receta-Categoria',
    component: Recipes
  },
  {
    path: '/categorias/:id_categoria',
    name: 'CategoriasReceta',
    component: CategoryItem
  },
  {
    path: '/ingredientes',
    name: 'Ingredientes',
    component: Ingredients
  },
  {
    path: '/ingredientes/:id_ingrediente',
    name: 'IngredientesItem',
    component: IngredientsItem
  },
  {
    path: '/ingredientes/receta/:id_receta',
    name: 'Receta-Ingrediente',
    component: Recipes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router