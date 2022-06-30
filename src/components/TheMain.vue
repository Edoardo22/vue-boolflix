<template>
    <div class="container">
        <ul class="list-unstyled" v-for="(film, i) in filmDataOn" :key="i">
            <img :src="`https://image.tmdb.org/t/p/w342` + film.poster_path" alt="" />
            <li>Titolo originale film {{ film.original_title }}</li>
            <li>Titolo {{ film.title }}</li>
            <li>Lingua {{ film.original_language }}
                <lang-flag :iso="film.original_language" />
            </li>
            <li>Voto {{ film.vote_average }}
                <span v-for="i in 5" :key="i">
                    <template v-if="i <= Math.ceil(film.vote_average / 2)">
                        <i class="fa-solid fa-star text-warning"></i>
                    </template>

                    <template v-else>
                        <i class="fa-regular fa-star"></i>
                    </template>
                </span>
            </li>

        </ul>
        <ul class="list-unstyled" v-for="(serie, i) in tvDataOn" :key="i">
            <img :src="`https://image.tmdb.org/t/p/w342` + serie.poster_path" alt="" />
            <li>Titolo originale serie {{ serie.original_name }}</li>
            <li>Titolo {{ serie.name }}</li>
            <li>Lingua {{ serie.original_language }}
                <lang-flag :iso="serie.original_language" />
            </li>
            <li>Voto {{ serie.vote_average }}
                <span v-for="i in 5" :key="i">
                    <template v-if="i <= Math.ceil(serie.vote_average / 2)">
                        <i class="fa-solid fa-star text-warning"></i>
                    </template>

                    <template v-else>
                        <i class="fa-regular fa-star"></i>
                    </template>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { state } from "../store"

import Vue from 'vue';
import LangFlag from 'vue-lang-code-flags';

new Vue({
    components: {

        LangFlag,
    }
})
export default {
    computed:
    {
        filmDataOn() {
            return state.moviesList;
        },
        tvDataOn() {
            return state.seriesList;
        },
    }
}


</script>

<style lang="scss" scoped>
</style>