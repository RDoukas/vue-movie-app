<template>
  <div class="movies-new">
    
    <form v-on:submit.prevent="createMovie()">
      <h1>New Movie</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label>Plot:</label>
        <input type="text" class="form-control" v-model="plot">
        <small
          class="text-danger"
          v-if="plot.length > 10">Must be less than 200 characters</small>
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input type="text" class="form-control" v-model="director">
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input type="text" class="form-control" v-model="year">
      </div>
      <input type="submit" class="btn btn-primary" value="Create">
    </form>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      title: "",
      plot: "",
      year: "",
      director: ""
    };
  },
  created: function() {},
  methods: {
    createMovie: function() {
      var params = {
        title: this.title,
        plot: this.plot,
        year: this.year,
        director: this.director
      };
      axios
        .post("/api/movies", params)
        .then(response => {
          // redirect to movies show
          this.$router.push(`/movies/${reponse.data.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>