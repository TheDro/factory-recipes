<template>
  <Recipes :recipes="recipes" />
</template>

<script>
import 'marx-css/css/marx.css'
import Recipes from './Recipes.vue'
import {recipes} from './recipes'
import './dyson'

export default {
  components: {
    Recipes
  },
  setup() {
    return {recipes}
  }
}
</script>
