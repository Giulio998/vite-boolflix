<script>
import AppHeader from './components/AppHeader.vue'
import { store } from "../store.js"
import AppCard from './components/AppCard.vue';
export default {
  components: {
    AppCard,
    AppHeader,
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
    <div class="mainContainer">
      <template v-if="store.movies.length > 0">
        <h1 class="marginBottom paddingTop">Film</h1>
        <ul class="flex overflow nowrap cardContainer">
          <template v-for="(movie, index) in store.movies">
            <AppCard :title="movie.title" :original_title="movie.original_title " :overview="movie.overview" :id="movie.id"
              :original_language="movie.original_language" :vote="movie.vote" :image="movie.image" :cast="store.movieCast" :type="movie.type" :genre_ids="movie.genre_ids"  />
          </template>
        </ul>
      </template>
      <template v-if="store.tvs.length > 0">
        <h1 class="marginBottom marginTop">Serie tv</h1>
        <ul class="flex overflow nowrap cardContainer">
          <template v-for="tv in store.tvs">
            <AppCard :title="tv.title" :original_title="tv.original_title" :original_language="tv.original_language" :overview="tv.overview" :id="tv.id"
              :vote="tv.vote" :image="tv.image" :cast="store.tvCast" :type="tv.type"  :genre_ids="tv.genre_ids"/>
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
  padding-left: 15px;
}

.marginBottom{
  margin-bottom: 10px;
}

.marginTop{
  margin-top: 10px;
}

.paddingTop{
  padding-top: 10px;
}
</style>
