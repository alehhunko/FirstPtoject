import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

 const repository = new Vuex.Store ({
   state:{
      all: [],
      newpost: {
         name: 'new name',
         post: 'new post',
      }
   },
   mutations: {
      SET_ALL (state, all) {
         state.all = all;},
      SET_POST  (state, coment) {
         state.newpost.post = coment;},
      SET_NAME  (state, name) {
         state.newpost.name = name;},
      SET_DEL  (state) {
         Vue.delete(state.newpost, 'post');}
   },
   actions: {
      getMail (context) {
         axios
             .get('https://jsonplaceholder.typicode.com/comments?_limit=4')
             .then(response => {context.commit('SET_ALL', response.data)});
     }
   },
   getters: {
      
   }
})
export default repository