<template>
  <div class="develop">
    <div v-for="element in info" v-bind:key="element.id">{{ element.description }} : {{ element.rate }}</div>
    <br/>
    <div v-for="post in categories" v-bind:key="post.id">{{ post.email }} : <br/>{{ post.body }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "develop",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios 
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi));
      this.$store.dispatch('getMail');
  },
  computed: {
    categories () {
      return this.$store.state.all;
    }
  }
};
</script>