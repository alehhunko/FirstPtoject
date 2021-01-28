import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

 const repository = new Vuex.Store ({
   state:{
      all: []
   },
   mutations: {
      SET_MAIL (state, mail) {
         state.all = mail;
     }
   },
   actions: {
      getMail (context) {
         axios
             .get('https://jsonplaceholder.typicode.com/comments?_limit=6')
             .then(response => {context.commit('SET_MAIL', response.data)});
     }
   },
   getters: {
      
   }
})
export default repository