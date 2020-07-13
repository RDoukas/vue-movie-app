<template>

  <div class="home">
    <div class="col s12 m7">
      <h2 class="header">All Actors</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="images/billy.jpg">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>Here's a list of all actors.</p>
          </div>
          <div class="card-action">
            <a href="/actors">Click here!</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m7">
      <h2 class="header">All Movies</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="images/dazed-and-confused.jpeg">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>Here's a list of all actors.</p>
          </div>
          <div class="card-action">
            <a href="/movies">Click here!</a>
          </div>
      </div>
    </div>
  </div>
    <!-- <h1>New Movie</h1>
    <ul>
      <li v-for="error in createErrors">{{ error }}</li>
    </ul>

    <div>
      Title: <input type="text" v-model="newTitle" /> <br />
      Year: <input type="text" v-model="newYear" /> <br />
      Plot: <input type="text" v-model="newPlot" /> <br />
      Director: <input type="text" v-model="newDirector" /> <br />
      <button v-on:click="createMovie()">Create</button>
    </div> -->

    <!-- <h1>New Actor</h1>
    <ul>
      <li v-for="error in createErrors">{{ error }}</li>
    </ul>

    <div>
      First Name: <input type="text" v-model="newFirstName" /> <br />
      Last Name: <input type="text" v-model="newLastName" /> <br />
      Known for: <input type="text" v-model="newKnownFor" /> <br />
      Gender: <input type="text" v-model="newGender" /> <br />
      Age: <input type="text" v-model="newAge" /> <br />
      <button v-on:click="createActor()">Create</button>
    </div> -->
  </div>
</template>

<style>
img {
  width: 250px;
}
.home {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  width: 320px;
  /* background-color: #f1f1f1; */
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      movies: [],
      createErrors: [],
      updateErrors: [],
      // errors: [],
      newTitle: "",
      newYear: "",
      newPlot: "",
      newDirector: "",
      currentMovie: {},
      newFirstName: "",
      newLastName: "",
      newKnownFor: "",
      newGender: "",
      newAge: "",
      currentActor: {}
    };
  },
  created: function() {
    this.indexMovies();
  },
  methods: {
    indexMovies: function() {
      axios.get("/api/movies").then(response => {
        console.log("All Movies:", response.data);
        this.movies = response.data;
      });
    },
    createMovie: function() {
      var params = {
        title: this.newTitle,
        year: this.newYear,
        plot: this.newPlot,
        director: this.newDirector
      };
      axios
        .post("/api/movies", params)
        .then(response => {
          console.log("Success", response.data);
          this.movies.push(response.data);
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.createErrors = error.response.data.errors;
        });
    },
    showMovie: function(movie) {
      console.log(movie);
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function(movie) {
      var params = {
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        director: movie.director
      };
      axios
        .patch(`/api/movies/${movie.id}`, params)
        .then(response => {
          console.log("Successfully Updated", response.data);
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    },
    destroyMovie: function(movie) {
      axios.delete(`/api/movies/${movie.id}`).then(response => {
        console.log("Successfully destroyed", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    }
  }
};
</script>
