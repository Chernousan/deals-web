import Vue from 'vue';
import Shell from './layout';
import router from './router';
import store from './store';
import locale from './locale';
import ub from './vue-ub';

locale.initLogin();
localStorage.setItem('dealsLang', 'uk');
locale.uk();

Vue.config.productionTip = false;
Vue.use(ub);

new Vue({
  router,
  store,
  render: h => h(Shell)
}).$mount('#app');
