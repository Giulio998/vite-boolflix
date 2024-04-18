<script>
import { store } from "../../store.js"
import axios from "axios"
import {getTitle,getGenres} from "../Api.js"
export default {
    data(){
        return{
            store,
            getTitle,
            getGenres,

        }
    },

    methods: {
        
    },

    mounted() {
        this.getGenres()
    },
    
}
</script>

<template>
    <div class="offcanvas bg-dark offcanvas-end text-white" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Seleziona il genere</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <input class="form-control mb-3" v-model="store.query" type="text" placeholder="Inserisci il titolo" @keyup.enter="getTitle()">
            <div class="selectMovie mb-3">
                <select v-model="store.filter.movieGenre" class="form-select" aria-label="Default select example">
                    <option value="" selected>Seleziona genere film</option>
                    <template v-for="genre in store.movieGenreArray">
                        <option :value="genre.id">{{ genre.name }}</option>
                    </template>
                </select>
                
             
            </div>
            <div class="selectSeries mb-3">
                <select v-model="store.filter.tvGenre" class="form-select" aria-label="Default select example">
                    <option value="" selected>Seleziona genere serie tv</option>
                    <template v-for="genre in store.tvGenreArray">
                        <option :value="genre.id">{{ genre.name }}</option>
                    </template>
                </select>
            </div>
            <div class="buttons d-flex mt-5 justify-content-end">
                

            </div>
        </div>
    </div>
</template>

<style scoped>

</style>