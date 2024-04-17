<script>
import { store } from "../../store.js"
import axios from "axios"
export default {
  data() {
    return {
      store
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
}



</script>

<template>
<div class="navBar flex align-items-center space-between">
    <div class="flex align-items-center space-between links">
        <h1>BOOLFLIX</h1>
        <p>Home</p>
        <p>SerieTv</p>
        <p>Film</p>
    </div>
    <div id="queryInput">
        <input v-model="store.query" type="text">
        <button @click="getTitle()">Search</button>
    </div>
    
</div>    

        
    
</template>

<style scoped>
.navBar{
    height: 100px;
    background-color: rgb(60, 60, 60);
    padding: 0 30px;
}

h1{
    color: red;
}
p{
    color: white;
}
.links{
    width: 400px;
}

button{
    background-color: inherit;
    border-color: white;
    color: white;
    padding: 4px;
}

input{
    padding: 4px;
    width: 300px;
    font-size: 14px;
}
</style>