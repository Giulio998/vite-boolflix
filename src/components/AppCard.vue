<script>
import { store } from "../../store.js"
export default {
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote: Number,
    image: String,
    overview: String,
  },
  data() {
    return {
      store,
      hovered: false
    }
  },
  computed: {
    setStars() {
      let stars = Math.ceil(this.vote / 2);
      return stars
    }

  },
  methods: {
    truncate(str, maxlength) {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
  },
  },

};

</script>

<template>

  <li class="card" @mouseover="hovered = true" @mouseleave="hovered = false">
    <template v-if="hovered == false">
      <img v-if="image == null" class="placeholder" :src="'src/assets/image-solid.svg'" alt="" srcset="">
      <img v-else class="cardImage" :src="'https://image.tmdb.org/t/p/w342' + image" alt="" srcset="">
    </template>

    <template v-if="hovered == true">
      <div class="cardInfo">
        <h4 class="marginBottom">Titolo: {{ title }}</h4>
        <h4 class="marginBottom">Titolo originale: {{ original_title }}</h4>
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
        <p ><span>Overview: </span>{{truncate(overview,55)  }}</p>
        

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
  font-size: 15p4;
}

.marginBottom {
  margin-bottom: 5px
}

.marginRight{
  margin-right: 5px;
}
</style>
