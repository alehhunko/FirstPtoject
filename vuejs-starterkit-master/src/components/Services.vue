<template>
  <div class="develop">
    <div v-for="element in info" v-bind:key="element.id">{{ element.description }} : {{ element.rate }}</div>
    <br/>
    <mopo/>
  </div>
</template>

<script>
import axios from 'axios';
import service from '@/components/posts';

export default {
  name: "develop",
  components: {
    'mopo': service,
  },
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
  computed: {
   
  }
};
</script>