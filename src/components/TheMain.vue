<template>
    <div class="container">
        <ul class="list-unstyled" v-for="(film, i) in filmDataOn" :key="i">
            <li>Titolo originale film {{ film.original_title }}</li>
            <li>Titolo {{ film.title }}</li>
            <li>Lingua {{ film.original_language }}</li>
            <li>Voto {{ film.vote_average }}</li>
            <country-flag country='it' size='big' />
            <country-flag country='hr' size='normal' />
            <country-flag country='fr' size='small' />
            <country-flag country='rus' />
        </ul>
        <ul class="list-unstyled" v-for="(serie, i) in tvDataOn" :key="i">
            <li>Titolo originale serie {{ serie.original_name }}</li>
            <li>Titolo {{ serie.name }}</li>
            <li>Lingua {{ serie.original_language }}</li>
            <li>Voto {{ serie.vote_average }}</li>
        </ul>
    </div>
</template>

<script>
import { state } from "../store"
import CountryFlag from 'vue-country-flag'
import Vue from 'vue';
new Vue({
    components: {
        CountryFlag
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
        }
    }
}
</script>

<style lang="scss" scoped>
</style>