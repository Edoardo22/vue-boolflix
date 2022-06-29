<template>
    <div class="container">
        <ul class="list-unstyled" v-for="(film, i) in filmDataOn" :key="i">
            <li>Titolo originale film {{ film.original_title }}</li>
            <li>Titolo {{ film.title }}</li>
            <li>Lingua {{ film.original_language }}
                <lang-flag :iso="film.original_language" />
            </li>
            <li>Voto {{ film.vote_average }}</li>



        </ul>
        <ul class="list-unstyled" v-for="(serie, i) in tvDataOn" :key="i">
            <li>Titolo originale serie {{ serie.original_name }}</li>
            <li>Titolo {{ serie.name }}</li>
            <li>Lingua {{ serie.original_language }}
                <lang-flag :iso="serie.original_language" />
            </li>
            <li>Voto {{ serie.vote_average }}</li>
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


    },

}


</script>

<style lang="scss" scoped>
</style>