import UB from '@unitybase/ub-pub';

export default class VueUb {
	static install(Vue) {
		Vue.prototype.$ub = {
			i18n: UB.i18n
		};
	}
}
