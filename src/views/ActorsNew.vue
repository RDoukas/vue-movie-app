<template>
  <div class="actors-new">
    <form v-on:submit.prevent="createActor()">
      <h1>New Actor</h1>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="actor.first_name" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="actor.last_name" />
      </div>
      <div class="form-group">
        <label>Known For:</label>
        <input type="text" class="form-control" v-model="actor.known_for" />
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input type="text" class="form-control" v-model="actor.age" />
      </div>
      <div class="form-group">
        <label>Gender:</label>
        <input type="text" class="form-control" v-model="actor.gender" />
      </div>
      <!-- <div class="form-group">
        <label>Movie:</label>
        <input type="text" class="form-control" v-model="actor.movie_id" />
      </div> -->
      <input type="submit" class="btn btn-primary" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      first_name: "",
      last_name: "",
      known_for: "",
      age: "",
      gender: "",
    };
  },
  created: function() {},
  methods: {
    createActor: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        known_for: this.known_for,
        age: this.age,
        gender: this.gender,
      };
      axios
        .post("/api/actors", params)
        .then((response) => {
          // redirect to actors show
          this.$router.push(`/actors/${reponse.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
