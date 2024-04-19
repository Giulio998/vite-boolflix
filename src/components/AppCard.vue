<script>
import axios from "axios"
import { store } from "../../store.js"
import { itTexts } from "../i18n/it.js"
export default {
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote: Number,
    image: String,
    overview: String,
    id: Number,
    type: String,
    genre_ids: Array,

  },
  data() {
    return {
      store,
      hovered: false,
      limit: 5,
      itTexts,


    }
  },
  computed: {
    setStars() {
      let stars = Math.ceil(this.vote / 2);
      return stars
    },

    computedArray() {
      return this.limit ? store.movieCast.slice(0, this.limit) : store.movieCast;
    },

  },
  methods: {
    truncate(str, maxlength) {
      return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    },
    getCast(id, type) {
      id = this.id;
      type = this.type;
      if (type == "movie" && store.hoveredId != id) {
        store.movieCast = []
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=221ddfa5fda3be6026dfe32e023f2d36`).then((res) => {
          store.movieCast = res.data.cast
          store.hoveredId = id


        })
      }
      if (type == "tv" && store.hoveredId != id) {
        store.tvCast = []
        axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=221ddfa5fda3be6026dfe32e023f2d36`).then((res) => {
          store.tvCast = res.data.cast
          store.hoveredId = id
        })
      }

    },
    getGenre(genre_ids, type, id) {
      id = this.id
      type = this.type;
      genre_ids = this.genre_ids
      if ( type == "movie" && store.hoveredId != id) {
        store.genreNames = [],
          genre_ids.forEach(element => {
            store.movieGenreArray.forEach(genre => {
              if (element == genre.id) {
                store.genreNames.push(genre.name)
                store.hoveredId = id
              }
            });
          });
      }

      if (type == "tv" && store.hoveredId != id) {
        store.genreNames = [],
          genre_ids.forEach(element => {
            store.tvGenreArray.forEach(genre => {
              if (element == genre.id) {
                store.genreNames.push(genre.name)
                store.hoveredId = id
              }
            });
          });
      }
    }
  },
};

</script>

<template>

  <li class="card overflowHidden" @mouseover="hovered = true, getCast(), getGenre()" @mouseleave="hovered = false">
    <template v-if="hovered == false">
      <img v-if="image == null" class="placeholderImage" :src="'src/assets/image-solid.svg'" alt="" srcset="">
      <img v-else class="cardImage" :src="'https://image.tmdb.org/t/p/w342' + image" alt="" srcset="">
    </template>

    <template v-if="hovered == true">
      <div class="cardInfo">
        <p class="mb-0 title">{{ itTexts.card.title }} : {{ truncate(title, 20) }}</p>
        <p class="mb-0 title">{{ itTexts.card.original_title }} : {{ truncate(original_title, 10) }}</p>
        <div class="language  flex">
          <p class="marginRight mb-0">{{ itTexts.card.language }} :</p>
          <img
            v-if="original_language == 'it' | original_language == 'en' | original_language == 'de' | original_language == 'es' | original_language == 'fr'"
            class="flag" :src="'src/assets/' + original_language + '.png'" alt="" srcset="">
          <span v-else class="mb-0">{{ original_language.toUpperCase() }}</span>
        </div>
        <div class="genre">
          <span class="marginRight mb-0">{{ itTexts.card.genre }} :</span>
          <template v-for="genreNames in store.genreNames">
            <span class="me-1">{{ genreNames }}</span>
          </template>

        </div>
        <div class="rating flex mb-0">
          <span class="marginRight mb-0">{{ itTexts.card.vote }} :</span>
          <template v-for="i in 5" :key="i">
            <img class="starIcon" v-if="i <= setStars" :src="'src/assets/star.png'" alt="" srcset="">
            <img class="starIcon" v-else :src="'src/assets/emptyStar.png'" alt="">
          </template>
        </div>
        <span class="mb-0">{{ itTexts.card.cast }}: </span>
        <template v-for="actor in computedArray">
          <span>{{ actor.name }}</span>
        </template>
        <div>
          <span class="mb-0"> {{ itTexts.card.overview }}: </span>
          <span>{{ truncate(overview, 40) }}</span>
        </div>

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

.placeholderImage {
  width: 200px;
  padding-top: 60px;


}

.overflowHidden {
  overflow: hidden;
}

.starIcon {
  height: 13px;
}

li {
  margin-right: 10px;
}

p {
  font-size: 11px;
}

.marginBottom {
  margin-bottom: 5px
}

.marginRight {
  margin-right: 5px;
}

span {
  font-size: 11px;
}

.title {
  font-size: 13px;
}
</style>
