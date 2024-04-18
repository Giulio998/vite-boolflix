import axios from "axios"
import { store } from "../store.js"


export function getTitle() {
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
            if (store.filter.movieGenre != "" && store.filter.movieGenre == newMovie.genre_ids) {
                store.movies.push(newMovie)
            } else if(store.filter.movieGenre == ""){
                store.movies.push(newMovie)
            }

        
           
        });
        

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
            if (store.filter.tvGenre != "" && store.filter.tvGenre == newTv.genre_ids) {
                store.tvs.push(newTv)
            } else if(store.filter.tvGenre == ""){
                store.tvs.push(newTv)
            }

        });
    })
}

export function getGenres(){
    axios.get(store.movieGenreEndPoint + "?api_key=" + store.api_key).then((res) => {
        store.movieGenreArray = res.data.genres
        
    })

    axios.get(store.tvGenreEndPoint + "?api_key=" + store.api_key).then((res) => {
        store.tvGenreArray = res.data.genres
        
    })
}
    

