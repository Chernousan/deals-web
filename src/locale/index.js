import * as EnLocale from './lang-en';
import * as UkLocale from './lang-uk';
import * as RuLocale from './lang-ru';

export default {
	initLogin: function () {
		var lang = localStorage.getItem('dealsLang');
		switch (lang) {
			case 'uk': UkLocale.login(); break;
			case 'ru': RuLocale.login(); break;
			default: EnLocale.login(); break;
		}
	},
	en: EnLocale.application,
	uk: UkLocale.application,
	ru: RuLocale.application
};
