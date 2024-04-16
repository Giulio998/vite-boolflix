import { reactive } from "vue";

export const store = reactive({
        api_key: "221ddfa5fda3be6026dfe32e023f2d36",
        movies: [],
        query: "",
        movieEndPoint: `https://api.themoviedb.org/3/search/movie?query=`

  
});