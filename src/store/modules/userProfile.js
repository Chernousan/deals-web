import store from 'store';

export default {
	namespaced: true,
	state: {
		languages: [
			{ id: 'en', name: 'common_english' },
			{ id: 'uk', name: 'common_ukrainian' },
			{ id: 'ru', name: 'common_russian' }
		],
		currentLanguageId: 'en',
		firstName: null,
		lastName: null,
		email: null,
		phone: null,
		mi_modifyDate: null
	},
	mutations: {
		setUser(state, value) {
			const properties = ['firstName', 'lastName', 'phone', 'email', 'mi_modifyDate'];
			for (const p of properties) {
				if (value.hasOwnProperty(p)) {
					state[p] = value[p];
				}
			}
		},
		setCurrentLanguage(state, value) {
			state.currentLanguageId = value;
		}
	}
};
