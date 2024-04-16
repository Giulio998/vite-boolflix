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
      
    })  

    axios.get(store.tvEndPoint + store.query + "&api_key=" + store.api_key).then((res) => {
      store.tvs = res.data.results;  
      
  })
},
}
};

</script>

<template>
  
<input v-model="store.query" type="text">
<button @click="getTitle()">Cerca</button>
 <ul>
  <h1>Film</h1>
  <template v-for="(movie, index) in store.movies" :key="index">
    <li >
    <h2>Titolo: {{ movie.title }}</h2>
    <h2>Titolo originale: {{ movie.original_title }}</h2>
   <img v-if="original_language == 'it' | original_language == 'en' | original_language == 'de' | original_language =='es' | original_language == 'fr'" class="flag" :src="'src/assets/'+ movie.original_language + '.png' " alt="" srcset="">
   <h2 v-else>{{ movie.original_language.toUpperCase() }}</h2>
    <h2>Voto: {{ movie.vote_average }}</h2>
  </li>
  </template>
</ul> 
<ul>
  <h1>Serie tv</h1>
  <template v-for="(tv, index) in store.tvs" :key="index">
    <li >
    <h2>Titolo: {{ tv.name }}</h2>
    <h2>Titolo originale: {{ tv.original_name }}</h2>
    <img v-if="original_language == 'it' | original_language == 'en' | original_language == 'de' | original_language =='es' | original_language == 'fr'" class="flag" :src="'src/assets/'+ movie.original_language + '.png' " alt="" srcset="">
    <h2 v-else>{{ tv.original_language.toUpperCase() }}</h2>
    <h2>Voto: {{ tv.vote_average }}</h2>
  </li>
  </template>
</ul> 
</template>

<style scoped>
.flag{
  height: 20px;
}
</style>
