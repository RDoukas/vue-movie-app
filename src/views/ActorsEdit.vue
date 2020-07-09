<template>
  <div class="actors-edit">
    <form v-on:submit.prevent="editActor()">
      <h1>Edit Actor</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
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
      <input type="submit" class="btn btn-primary" value="Update" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      actor: {}
    };
  },
  created: function() {
    axios.get(`/api/actors/${this.$route.params.id}`).then(response => {
      this.actor = response.data;
      console.log(this.actor);
    });
  },
  methods: {
    editActor: function() {
      var params = {
        title: this.actor.title,
        plot: this.actor.plot,
        year: this.actor.year,
        director: this.actor.director
      };
      axios
        .patch(`/api/actors/${this.actor.id}`, params)
        .then(response => {
          // redirect to actors show
          this.$router.push(`/actors/${response.data.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destroyActor: function() {
      if (confirm("Are you sure you want to delete this actor?")) {
        axios.delete(`/api/actors/${this.actor.id}`).then(response => {
          console.log("Successfully destroyed", response.data);
          this.$router.push("/actors");
        });
      }
    }
  }
};
</script>
