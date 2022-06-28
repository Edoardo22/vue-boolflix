import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
    moviesList: [],
    seriesList: []
})

export function filmData(textQuery) {
    axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: "813b958f866bf1a02a39855e70093c7d",
            query: textQuery,
            language: "it-IT",
        }
    })
        .then((resp) => {
            state.moviesList = resp.data.results;
        })
}