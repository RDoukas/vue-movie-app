<template>
  <div class="home">
    <h1>New Movie</h1>
    <ul>
      <li v-for="error in createErrors">{{ error }}</li>
    </ul>

    <div>
      Title: <input type="text" v-model="newTitle" /> <br />
      Year: <input type="text" v-model="newYear" /> <br />
      Plot: <input type="text" v-model="newPlot" /> <br />
      Director: <input type="text" v-model="newDirector" /> <br />
      <button v-on:click="createMovie()">Create</button>
    </div>

    <div v-for="movie in movies">
      <h2>{{ movie.title }}</h2>
      <p>Year: {{ movie.year }}</p>
      <p>Plot: {{ movie.plot }}</p>
      <p>Director: {{ movie.director }}</p>
      <router-link v-bind:to="`/movies/${movie.id}`">More info</router-link>
    </div>

    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Info</h1>
        <ul>
          <li v-for="error in updateErrors">{{ error }}</li>
        </ul>
        <p>Title: <input type="text" v-model="currentMovie.title" /></p>
        <p>Year: <input type="text" v-model="currentMovie.year" /></p>
        <p>Plot: <input type="text" v-model="currentMovie.plot" /></p>
        <p>Director : <input type="text" v-model="currentMovie.director" /></p>
        <button v-on:click="updateMovie(currentMovie)">Update</button>
        <button v-on:click="destroyMovie(currentMovie)">Delete</button>
        <button>Close</button>
      </form>
    </dialog>

    <h1>New Actor</h1>
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
    </div>

    <div v-for="actor in actors">
      <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
      <p>{{ actor.known_for }}</p>
      <router-link v-bind:to="`/actors/${movie.id}`">More info</router-link>
    </div>

    <dialog id="actor-details">
      <form method="dialog">
        <h1>Actor Info</h1>
        <ul>
          <li v-for="error in updateErrors">{{ error }}</li>
        </ul>
        <p>
          First Name: <input type="text" v-model="currentActor.first_name" />
        </p>
        <p>Last Name: <input type="text" v-model="currentActor.last_name" /></p>
        <p>Known For: <input type="text" v-model="currentActor.known_for" /></p>
        <p>Age: <input type="text" v-model="currentActor.age" /></p>
        <p>Gender: <input type="text" v-model="currentActor.gender" /></p>
        <button v-on:click="updateActor(currentActor)">Update</button>
        <button v-on:click="destroyActor(currentActor)">Delete</button>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style>
img {
  width: 250px;
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
    };
  },
  created: function() {
    this.indexMovies();
  },
  methods: {
    indexMovies: function() {
      axios.get("/api/movies").then((response) => {
        console.log("All Movies:", response.data);
        this.movies = response.data;
      });
    },
    createMovie: function() {
      var params = {
        title: this.newTitle,
        year: this.newYear,
        plot: this.newPlot,
        director: this.newDirector,
      };
      axios
        .post("/api/movies", params)
        .then((response) => {
          console.log("Success", response.data);
          this.movies.push(response.data);
        })
        .catch((error) => {
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
        director: movie.director,
      };
      axios
        .patch(`/api/movies/${movie.id}`, params)
        .then((response) => {
          console.log("Successfully Updated", response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    destroyMovie: function(movie) {
      axios.delete(`/api/movies/${movie.id}`).then((response) => {
        console.log("Successfully destroyed", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>
