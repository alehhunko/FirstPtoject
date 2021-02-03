<template>
  <div class="develop">
    <div v-for="element in info" v-bind:key="element.id">{{ element.description }} : {{ element.rate }}</div>
    <br/>
    <mopo/>
    <br/>Имя
     <p><input type="text" v-model="name" style="width: 500px"></p>
    <br/>Коментарий 
     <p><input type="text" v-model="coment" style="width: 500px"></p>
     <div><a-button type="danger" @click="addcoment(); addname();">Добавить</a-button></div>
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
      coment: '',
      name: '',
    };
  },
  mounted() {
    axios 
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi));
  },
  methods: {
    addcoment() {
      this.$store.commit('SET_POST', this.coment);
    },
    addname() {
      this.$store.commit('SET_NAME', this.name);
    },
  },
};
</script>