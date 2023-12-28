<template>
  <Recipes :recipes="recipes" />
</template>

<script>
import 'marx-css/css/marx.css'
import Recipes from './Recipes.vue'
import {recipes as satisfactoryRecipes} from './satisfactory-recipes.js'
import dysonRecipes from './exported-dyson-recipes.js'

export default {
  components: {
    Recipes
  },
  setup() {
    let game = new URLSearchParams(window.location.search).get('game')
    let recipes;
    if (game === 'dyson') {
      recipes = dysonRecipes
    } else {
      recipes = satisfactoryRecipes
    }
    return {recipes}
  }
}
</script>
