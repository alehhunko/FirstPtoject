<template>
  <div class="develop">
  <div v-for="element in info" v-bind:key="element.id">{{ element.description }} : {{ element.rate }}</div>
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
  },
};
</script>