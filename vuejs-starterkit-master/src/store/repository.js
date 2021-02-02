import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

 const repository = new Vuex.Store ({
   state:{
      all: [],
      newpost: ''

   },
   mutations: {
      SET_MAIL (state, mail) {
         state.all = mail;},
      SET_POST  (state, coment) {
         state.newpost = coment;}
   },
   actions: {
      getMail (context) {
         axios
             .get('https://jsonplaceholder.typicode.com/comments?_limit=4')
             .then(response => {context.commit('SET_MAIL', response.data)});
     }
   },
   getters: {
      
   }
})
export default repository