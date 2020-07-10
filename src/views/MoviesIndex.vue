<template>
  <div class="movies-index">
    Search by title: <input v-model="titleFilter" />
    <div v-for="movie in filterBy(movies, titleFilter, 'title')">
      Search by name: <input v-model="titleFilter" list="titles" />
      <datalist id="titles">
        <option v-for="movie in movies">{{ movie.title }}</option>
      </datalist>
      <div>
        <button>Sort Alphabetically</button>
        <div v-for="movie in orderBy(movies, 'title')"></div>
        <div
          v-for="movie in orderBy(
            filterBy(movies, titleFilter, 'title'),
            'title'
          )"
        >
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.plot }}</p>
          <p>Director: {{ movie.director }}</p>
          <p>{{ movie.year }}</p>
          <router-link v-bind:to="`/movies/${movie.id}`">More Info</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      movies: [],
      titleFilter: "",
    };
  },
  created: function() {
    axios.get("/api/movies").then((response) => {
      console.log("All Movies:", response.data);
      this.movies = response.data;
    });
  },
  methods: {},
};
</script>
