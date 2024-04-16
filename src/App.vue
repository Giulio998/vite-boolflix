<script>
import axios from "axios"
import { store } from "../store"
export default {
  data(){
  return{
    store,
  
  }
},
methods: {
  getTitle(){
      axios.get(store.movieEndPoint + store.query + "&api_key=" + store.api_key).then((res) => {
      store.movies = res.data.results;  
      console.log(store.movies);
      
    })  
  }
},

};

</script>

<template>
  
<input v-model="store.query" type="text">
<button @click="getTitle()">Cerca</button>
 <ul>
  <template v-for="(movie, index) in store.movies" :key="index">


    <li >
    <h2>Titolo: {{ movie.title }}</h2>
    <h2>Titolo originale: {{ movie.original_title }}</h2>
    <h2>Lingua originale: {{ movie.original_language }}</h2>
    <h2>Voto: {{ movie.vote_average }}</h2>
  </li>
      
    
  </template>
  
</ul> 
</template>

<style scoped>

</style>
