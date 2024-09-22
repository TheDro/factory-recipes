<template>
  <div class="container">
    <h2>Satisfactory Recipes</h2>
    <input type="checkbox" v-model="state.consolidate" />
    <label>consolidate ingredients</label>
    <input type="checkbox" v-model="state.alternates" />
    <label>include alternates</label>
    <div>
      <label for="search">Ingredient Search</label>
      <input id="search" type="text" v-model="state.searchString" @input="debouncedRefresh()" />
    </div>

    <table class="condensed">
      <tr>
        <th>Material</th>
        <th>Starting Recipe</th>
        <th>Converted Recipe</th>
      </tr>
      <tr :class="{alternative: !!recipe.altName}" v-for="(recipe, index) in state.recipes" :key="index" 
        v-show="(!recipe.altName || state.alternates) && recipe.ingredients.length > 0">
        <td>
          <input type="checkbox" :checked="recipe.active" @change="onCheckRecipe($event, recipe)"/>
          <span>{{formatName(recipe.name)}}</span>
          <div style="padding: 0 2rem">{{recipe.altName}}</div>
        </td>
        <td>
          <ul class="m-0">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
              {{round(ingredient.quantity, 2)}} x {{formatName(ingredient.name)}}
            </li>
          </ul>
        </td>
        <td>
          <ul class="m-0">
            <li :class="{error: !!baseIngredient.warning}"
              v-for="(baseIngredient, index) in recipe.baseIngredients" :key="index">
              {{round(baseIngredient.quantity, 2)}} x {{formatName(baseIngredient.name)}}
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {reactive, watch} from 'vue'
import _ from 'lodash'
import Fuse from 'fuse.js'

export default {
  props: {
    name: String,
    recipes: Array,
  },
  setup(props) {

    let recipes = _.cloneDeep(props.recipes)
    recipes.forEach((recipe) => {
      recipe.active = !recipe.altName
      recipe.baseIngredients = []
    })

    let state = reactive({
      recipes: recipes,
      consolidate: true,
      alternates: false,
      searchString: "",
      allSearchTerms: new Set(),
      fuse: new Fuse(),
    })

    refresh(true)

    watch(() => [state.consolidate, state.alternates], refresh)

    function refresh(init = false) {
      state.recipes.forEach((recipe) => {
        let oldIngredients = _.cloneDeep(recipe.ingredients)
        recipe.searchTerms = {[recipe.name]: -1}
        if (init) {
          state.allSearchTerms.add(recipe.name)
        }
        for (let i=0; i<10; i++) {

          let newIngredients = oldIngredients.map((ingredient) => {
            if (_.isNil(recipe.searchTerms[ingredient.name])) {
              recipe.searchTerms[ingredient.name] = i
            }
            let nextRecipe = _.find(recipes, {name: ingredient.name, active: true})
            if (!nextRecipe) {
              ingredient.warning = "Couldn't find match"
              return ingredient
            }
            if (nextRecipe.ingredients.length === 0 || ingredient.quantity < 0 ) { 
              return ingredient
            }
            return nextRecipe.ingredients.map((ing) => {
              return {name: ing.name, quantity: ingredient.quantity*ing.quantity}
            })
          })

          newIngredients = _.flatMap(newIngredients)

          oldIngredients = newIngredients

          if (state.consolidate) {
            oldIngredients = consolidate(oldIngredients)
          }

        }
        recipe.baseIngredients = oldIngredients
      })

      let searchIngredient;
      if (state.searchString.length > 1) {
        searchIngredient = state.fuse.search(state.searchString)[0]?.item
      }
      state.recipes = state.recipes.sort((a,b) => {
        if (searchIngredient) {
          let result = _.defaultTo(a.searchTerms[searchIngredient], 10) - _.defaultTo(b.searchTerms[searchIngredient], 10)
          if (result !== 0) return result
        }
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        if ((a.altName || "") < (b.altName || "")) return -1
        if ((a.altName || "") > (b.altName || "")) return 1
        return 0
      })

      if (init) {
        state.fuse = new Fuse(Array.from(state.allSearchTerms), {
          includeScore: true,
        })
      }

    }


    function consolidate(ingredients) {
      let newIngredients = []
      ingredients.forEach((ingredient) => {
        let index = _.findIndex(newIngredients, {name: ingredient.name})
        if (index === -1) {
          newIngredients.push(ingredient)
        } else {
          newIngredients[index].quantity += ingredient.quantity
        }
      })
      return newIngredients
    }


    function formatName(name) {
      return _.capitalize(_.lowerCase(name))
    }

    function round(value, digits = 0) {
      return Math.round(value*10**digits)/10**digits
    }

    function onCheckRecipe(e, targetRecipe) {
      targetRecipe.active = e.target.checked
      if (targetRecipe.active) {
        state.recipes.forEach((recipe) => {
          if (recipe.name === targetRecipe.name && recipe !== targetRecipe) {
            recipe.active = false
          }
        })
      }
      refresh()
    }
    window.state = state

    let debouncedRefresh = _.debounce(refresh, 150)
    return {state, round, formatName, onCheckRecipe, refresh, debouncedRefresh}
  }
}
</script>

<style>
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.m-0 {
  margin: 0;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.condensed th,
.condensed td {
  padding: 0.25rem;
}

.error {
  color: #f66;
}

body {
  background-color: #333;
  color: #eee;
}

th, td {
  border-bottom: 1px solid #ccc;
}

input[type="checkbox"] {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.container {
  margin: auto;
  max-width: 768px; /*md*/
}

tr.alternative {
  color: #ffa
}

input[type="text"],
input[type="text"]:focus {
  background-color: #222;
  color: white;
}

</style>
