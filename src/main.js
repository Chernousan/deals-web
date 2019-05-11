import Vue from 'vue';
import Shell from './components/shell';
import router from './router';
import store from './store';
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(Shell)
}).$mount('#app');
