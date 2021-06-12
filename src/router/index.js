import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import CategoryItem from '../views/CategoryItem.vue'
import RecipesItem from '../views/Recipes.vue'
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
    component: Home
  },
  {
    path: '/receta/:id_receta',
    name: 'Recetas',
    component: RecipesItem
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Category
  },
  {
    path: '/categorias/id_categoria',
    name: 'CategoriasItem',
    component: CategoryItem
  },
  {
    path: '/ingredientes',
    name: 'Ingredientes',
    component: Ingredients
  },
  {
    path: '/ingredientes/id_ingrediente',
    name: 'IngredientesItem',
    component: IngredientsItem
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router