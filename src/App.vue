<script>
import AppHeader from './components/AppHeader.vue'
import { store } from "../store.js"
import AppCard from './components/AppCard.vue';
import AppOffCanvas from './components/AppOffCanvas.vue'
export default {
  components: {
    AppCard,
    AppHeader,
    AppOffCanvas,
  },
  data() {
    return {
      store
    }
  },

}


</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppOffCanvas/>
    <div class="mainContainer p-4">
      <template v-if="store.movies.length > 0">
        <h1 class="mb-3 ms-1">Film</h1>
        <ul class="flex overflow nowrap cardContainer">
          <template v-for="(movie, index) in store.movies">
            <AppCard :title="movie.title" :original_title="movie.original_title " :overview="movie.overview" :id="movie.id"
              :original_language="movie.original_language" :vote="movie.vote" :image="movie.image"  :type="movie.type" :genre_ids="movie.genre_ids"  />
          </template>
        </ul>
      </template>
      <template v-if="store.tvs.length > 0">
        <h1 class="mb-3 ms-1">Serie tv</h1>
        <ul class="flex overflow nowrap cardContainer">
          <template v-for="tv in store.tvs">
            <AppCard :title="tv.title" :original_title="tv.original_title" :original_language="tv.original_language" :overview="tv.overview" :id="tv.id"
              :vote="tv.vote" :image="tv.image"  :type="tv.type"  :genre_ids="tv.genre_ids"/>
          </template>
        </ul>



      </template>

    </div>
  </main>


</template>

<style scoped>
.mainContainer {
  background-color: black;
  min-height: calc(100vh - 100px);
  
 
  
}

.cardContainer{
  height: 322px;
  padding-left: 5px;

}

h1{
  color: white;
  
}

</style>
