import { reactive } from "vue";

export const store = reactive({
        api_key: "221ddfa5fda3be6026dfe32e023f2d36",
        movies: [],
        tvs: [],
        query: "",
        movieEndPoint: `https://api.themoviedb.org/3/search/movie?query=`,
        tvEndPoint: `https://api.themoviedb.org/3/search/tv?query=`,
        movieCastEndPoint: `https://api.themoviedb.org/3/movie/`,
        movieGenreEndPoint: `https://api.themoviedb.org/3/genre/movie/list`,
        tvGenreEndPoint: `https://api.themoviedb.org/3/genre/tv/list`,
        movieGenreArray: [],
        tvGenreArray: [],
        filter: {
                movieGenre: "",
                tvGenre: "",
        },
        movieCast: [],
        tvCast: [],


});