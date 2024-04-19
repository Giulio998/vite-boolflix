<script>
import { store } from "../../store.js"
import { itTexts } from "../i18n/it.js"
import {getTitle} from "../Api.js"
export default {
    data() {
        return {
            store,
            getTitle,
            itTexts,
            
        }
    },
    methods: {
        
    }
}



</script>

<template>
    <div class="navBar flex align-items-center space-between">
        <div class="flex align-items-center space-between links">
            <h1>BOOLFLIX</h1>
            <p class="mb-0">{{ itTexts.header.home }}</p>
            <p class="mb-0">{{ itTexts.header.movie }}</p>
            <p class="mb-0">{{ itTexts.header.tvSeries }}</p>
        </div>
        <div id="queryInput" class="flex">
            <button class="btn btn-outline-light me-2" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">{{ itTexts.ui.filters }}</button>
            <input class="form-control" v-model="store.query" type="text" @keyup.enter="getTitle()">
            <button class="btn btn-outline-light ms-2" @click="getTitle()">{{ itTexts.ui.search }}</button>
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


input {
    padding: 4px;
    width: 300px;
    font-size: 14px;
}
</style>