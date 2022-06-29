<template>
    <header>
        <div class="container">
            <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    v-model="searchText" v-on:keyup.enter="onSearchData">
                <button class="btn btn-primary" @click="onSearchData">Ricerca</button>
            </div>
        </div>
    </header>
</template>

<script>
import { filmData } from "../store"
import { tvData } from "../store"

export default {
    data() {
        return {
            searchText: "",

        }
    },
    methods:
    {
        onSearchData() {
            filmData(this.searchText);
            tvData(this.searchText);

        }
    }
}
</script>

<style lang="scss" scoped>
</style>