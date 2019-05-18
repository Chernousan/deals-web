import Vue from 'vue';
import Vuex from 'vuex';
import navigation from './modules/navigation';
import deal from './modules/deal';
import task from './modules/task';
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vuex);
Vue.use(Vue2TouchEvents, {
    touchClass: '',
    tapTolerance: 10,
    swipeTolerance: 30,
    longTapTimeInterval: 400
})

export default new Vuex.Store({
	modules: {
		navigation,
    deal,
    task
	},
	strict: true
});
