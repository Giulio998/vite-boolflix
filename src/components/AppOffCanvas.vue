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
        resetFilters(){
            this.store.query = "";
            this.store.filter.movieGenre = "";
            this.store.filter.tvGenre = "";
        }
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
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Select genre</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <input class="form-control mb-3" v-model="store.query" type="text" placeholder="Insert title" @keyup.enter="getTitle()">
            <div class="selectMovie mb-3">
                <select v-model="store.filter.movieGenre" class="form-select" aria-label="Default select example">
                    <option value="" selected>Select movie genre</option>
                    <template v-for="genre in store.movieGenreArray">
                        <option :value="genre.id">{{ genre.name }}</option>
                    </template>
                </select>
                
             
            </div>
            <div class="selectSeries mb-3">
                <select v-model="store.filter.tvGenre" class="form-select" aria-label="Default select example">
                    <option value="" selected>Select tv genre</option>
                    <template v-for="genre in store.tvGenreArray">
                        <option :value="genre.id">{{ genre.name }}</option>
                    </template>
                </select>
            </div>
            <div class="buttons d-flex justify-content-end">
                <button class="btn btn-outline-light ms-2" @click="resetFilters()">Reset</button>     
                <button class="btn btn-outline-light ms-2" @click="getTitle()">Search</button>     


            </div>
        </div>
    </div>
</template>

<style scoped>

</style>