import UB from '@unitybase/ub-pub';

export function login() {
	UB.i18nExtend({
		login_email: 'Логін / Електронна пошта',
		login: 'Логін',
		password: 'Пароль',
		action_caption: 'УВІЙТИ',
		validation_login_required: 'Введіть логін',
		validation_required_field: 'Поле обов’язкове для заповнення',
		validation_authFailed: 'Невірний логін або пароль',
		validation_password_template: 'Пароль не відповідає шаблону',
		forgot_password: 'Забули пароль?',
		reset_password: 'Скинути пароль',
		back_to_login: 'Повернутись на логін',
		tooltip_input_password: 'Довжина пароля повинна бути 6-20 символів. Ви можете використовувати цифри. латинські літери та символи: ! @ # $ % ^ & * ( ) _ - + = | ` ~ '
	});
}

export function application() {
	UB.i18nExtend({
		menu_title_myTask: 'Мої задачі',
		menu_title_myDeal: 'Мої угоди',
		menu_approval_button: 'Підписати',
		menu_reject_button: 'Відхилити',
		bottom_menu_title_myTask: 'Мої задачі',
		bottom_menu_title_myDeal: 'Угоди',
		bottom_menu_title_myInvite: 'Запрошення',
		bottom_menu_title_myFile: 'Файли',
		bottom_menu_title_myArchive: 'Архів',
		bottom_menu_title_myWallet: 'Наявні ресурси',
		bottom_menu_title_mySettings: 'Налаштування',
		bottom_menu_title_myAddUser: 'Запросити нового користувача',
		bottom_menu_title_mySupport: 'Технічна підтримка'
	});
}
