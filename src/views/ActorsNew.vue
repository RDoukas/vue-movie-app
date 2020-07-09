<template>
  <div class="actors-new">
    <form v-on:submit.prevent="createActor()">
      <h1>New Actor</h1>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="firstName" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="lastName" />
      </div>
      <div class="form-group">
        <label>Known For:</label>
        <input type="text" class="form-control" v-model="knownFor" />
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input type="text" class="form-control" v-model="age" />
      </div>
      <div class="form-group">
        <label>Gender:</label>
        <input type="text" class="form-control" v-model="gender" />
      </div>
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
      firstName: "",
      lastName: "",
      knownFor: "",
      age: "",
      gender: ""
    };
  },
  created: function() {},
  methods: {
    createActor: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        known_for: this.knownFor,
        age: this.age,
        gender: this.gender
      };
      axios
        .post("/api/actors", params)
        .then(response => {
          // redirect to actors show
          this.$router.push(`/actors/${reponse.data.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
