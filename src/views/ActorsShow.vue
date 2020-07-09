<template>
  <div class="actors-show">
    <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
    <p>Known for: {{ actor.known_for }}</p>
    <p>Age: {{ actor.age }}</p>
    <p>Gender: {{ actor.gender }}</p>

    <router-link :to="`/actors/${actor.id}/edit`">Edit</router-link> <br />
    <button v-on:click="destroyActor()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      actor: {},
    };
  },
  created: function() {
    axios.get(`/api/actors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.actor = response.data;
    });
  },
  methods: {},
};
</script>
