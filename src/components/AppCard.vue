<script>
import axios from "axios"
import { store } from "../../store.js"
export default {
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote: Number,
    image: String,
    overview: String,
    id: Number,
    cast: Array,
    type: String,
    genre_ids: Array,

  },
  data() {
    return {
      store,
      hovered: false,
      limit: 5,
      madeCastCallTrueFalse: 0
    }
  },
  computed: {
    setStars() {
      let stars = Math.ceil(this.vote / 2);
      return stars
    },

    computedArray() {
      return this.limit ? this.cast.slice(0, this.limit) : this.cast;
    },


  },
  methods: {
    truncate(str, maxlength) {
      return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    },

    getCast(id, type) {

      id = this.id
      type = this.type
      if (this.madeCastCallTrueFalse == 0) {
        this.madeCastCallTrueFalse++
        if (type == "movie") {
          store.movieCast = []
          axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=221ddfa5fda3be6026dfe32e023f2d36`).then((res) => {
            store.movieCast = res.data.cast

          })
        }
        if (type == "tv") {
          store.tvCast = []
          axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=221ddfa5fda3be6026dfe32e023f2d36`).then((res) => {
            store.tvCast = res.data.cast

          })
        }
      }


    }
  },
  mounted() {

  },


};

</script>

<template>

  <li class="card" @mouseover="hovered = true, getCast()" @mouseleave="hovered = false">
    <template v-if="hovered == false">
      <img v-if="image == null" class="placeholder" :src="'src/assets/image-solid.svg'" alt="" srcset="">
      <img v-else class="cardImage" :src="'https://image.tmdb.org/t/p/w342' + image" alt="" srcset="">
    </template>

    <template v-if="hovered == true">
      <div class="cardInfo">
        <h5 class="marginBottom">Titolo: {{ title }}</h5>
        <h5 class="marginBottom">Titolo originale: {{ original_title }}</h5>
        <div class="language marginBottom flex">
          <p class="marginRight">Lingua:</p>
          <img
            v-if="original_language == 'it' | original_language == 'en' | original_language == 'de' | original_language == 'es' | original_language == 'fr'"
            class="flag" :src="'src/assets/' + original_language + '.png'" alt="" srcset="">
          <p v-else class="marginBottom">{{ original_language.toUpperCase() }}</p>
        </div>
        <div class="rating flex">
          <p class="marginRight">Voto:</p>
          <template v-for="i in 5" :key="i">
            <img class="starIcon" v-if="i <= setStars" :src="'src/assets/star.png'" alt="" srcset="">
            <img class="starIcon" v-else :src="'src/assets/emptyStar.png'" alt="">
          </template>
        </div>
        <div>
          <p>Genere: </p>
          <template v-for="genre in genre_ids" :key="index">
            <span v-if="genre == 18">Drama</span>
            <span v-else-if="genre == 12"> Adventure</span>
            <span v-else-if="genre == 14"> Fantasy</span>
            <span v-else-if="genre == 16"> Animation</span>
            <span v-else-if="genre == 27"> Horror</span>
            <span v-else-if="genre == 28"> Action</span>
            <span v-else-if="genre == 35"> Comedy</span>
            <span v-else-if="genre == 36"> History</span>
            <span v-else-if="genre == 37"> Western</span>
            <span v-else-if="genre == 53"> Thriller</span>
            <span v-else-if="genre == 80"> Crime</span>
            <span v-else-if="genre == 99"> Documentary</span>
            <span v-else-if="genre == 878"> Science Fiction</span>
            <span v-else-if="genre == 9648"> Mystery</span>
            <span v-else-if="genre == 10402"> Music</span>
            <span v-else-if="genre == 10749"> Romance</span>
            <span v-else-if="genre == 10751"> Family</span>
            <span v-else-if="genre == 10759"> Action & Adventure</span>
            <span v-else-if="genre == 10762"> Kids</span>
            <span v-else-if="genre == 10763"> News</span>
            <span v-else-if="genre == 10764"> Reality</span>
            <span v-else-if="genre == 10765"> Sci-Fi & Fantasy</span>
            <span v-else-if="genre == 10766"> Soaspan</span>
            <span v-else-if="genre == 10767"> Talk</span>
            <span v-else-if="genre == 10768"> War & spanolitics</span>
            <span v-else-if="genre == 10770"> TV Movie</span>
          </template>
        </div>
        <p>Cast:</p>
        <template v-for="actor in computedArray">
          <span>{{ actor.name }}</span>
        </template>
        <p>Overview:</p>
        <span>{{ truncate(overview, 40) }}</span>


      </div>
    </template>

  </li>

</template>

<style scoped>
.flag {
  height: 20px;
}

.card {
  border: 1px solid black;
  height: 300px;
  min-width: 200px;
  max-width: 200px;
  background-color: rgb(67, 67, 67);
  color: white;

}

.cardImage {
  height: 300px;
  width: 200px;
}

.cardInfo {
  padding: 10px;
}

.placeholder {
  width: 200px;
  padding-top: 60px;


}

.starIcon {
  height: 20px;
}

li {
  margin-right: 10px;
}

p {
  font-size: 13px;
}

.marginBottom {
  margin-bottom: 5px
}

.marginRight {
  margin-right: 5px;
}

span{
  font-size: 13px;
}
</style>
