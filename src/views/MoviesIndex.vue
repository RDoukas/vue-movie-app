<template>
  <div class="movies-index">
    <div v-for="movie in movies">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.plot }}</p>
      <p>Director: {{ movie.director }}</p>
      <p>{{ movie.year }}</p>
      <router-link v-bind:to="`/movies/${movie.id}`">More Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      movies: [],
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
