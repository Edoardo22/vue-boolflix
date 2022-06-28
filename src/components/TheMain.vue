<template>
    <div class="container">
        <ul class="list-unstyled" v-for="(film, i) in filmDataOn" :key="i">
            <li>Titolo originale {{ film.original_title }}</li>
            <li>Titolo {{ film.title }}</li>
            <li>Lingua {{ film.original_language }}</li>
            <li>Voto {{ film.vote_average }}</li>
        </ul>
    </div>
</template>

<script>
import { state } from "../store"
export default {
    computed:
    {
        filmDataOn() {
            return state.moviesList;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>