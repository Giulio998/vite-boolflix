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
        getTitle() {
            store.movies = []
            axios.get(store.movieEndPoint + store.query + "&api_key=" + store.api_key).then((res) => {
                res.data.results.forEach(element => {
                    const newMovie = {
                        id: element.id,
                        title: element.title,
                        original_title: element.original_title,
                        original_language: element.original_language,
                        vote: element.vote_average,
                        image: element.poster_path,
                        overview: element.overview,
                        type: "movie",
                        genre_ids: element.genre_ids,
                    }
                    store.movies.push(newMovie)
                });
                console.log(store.movies);

            })
            store.tvs = []
            axios.get(store.tvEndPoint + store.query + "&api_key=" + store.api_key).then((res) => {
                res.data.results.forEach(element => {
                    const newTv = {
                        id: element.id,
                        title: element.name,
                        original_title: element.original_name,
                        original_language: element.original_language,
                        vote: element.vote_average,
                        image: element.poster_path,
                        overview: element.overview,
                        type: "tv",
                        genre_ids: element.genre_ids,


                    }
                    store.tvs.push(newTv)
                });
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
.navBar {
    height: 100px;
    background-color: rgb(60, 60, 60);
    padding: 0 30px;
}

h1 {
    color: red;
}

p {
    color: white;
}

.links {
    width: 400px;
}

button {
    background-color: inherit;
    border-color: white;
    color: white;
    padding: 4px;
}

input {
    padding: 4px;
    width: 300px;
    font-size: 14px;
}
</style>