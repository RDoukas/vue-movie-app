<template>
  <div class="actors-index">
    <div v-for="actor in actors">
      <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
      <p>{{ actor.known_for }}</p>
      <router-link v-bind:to="`/actors/${actor.id}`">More Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      actors: [],
    };
  },
  created: function() {
    axios.get("/api/actors").then((response) => {
      console.log("All Actors:", response.data);
      this.actors = response.data;
    });
  },
  methods: {},
};
</script>
