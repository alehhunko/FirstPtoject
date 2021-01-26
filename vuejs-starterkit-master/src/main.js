import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import store from './store/repository';

Vue.config.productionTip = false;
Vue.config.devtools = true;

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#learnOleh',
  functional: true,
  router,
  store,
  render(h) {
    return h(App);
  },
});
