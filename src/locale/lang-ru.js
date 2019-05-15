import UB from '@unitybase/ub-pub';

export function login() {
	UB.i18nExtend({
		login_email: 'Логин / Электронная почта',
		login: 'Логин',
		password: 'Пароль',
		action_caption: 'ВОЙТИ',
		validation_login_required: 'Пожалуйста, укажите логин',
		validation_required_field: 'Поле обязательное для заполнения',
		validation_authFailed: 'Неправльный логин или пароль',
		validation_password_template: 'Пароль не соответствует шаблону',
		forgot_password: 'Забыли пароль?',
		reset_password: 'Сбросить пароль',
		back_to_login: 'Вернуться на логин',
		tooltip_input_password: 'Длина пароля должна быть 6-20 символов. Вы можете использовать цифры. латинские буквы и символы: ! @ # $ % ^ & * ( ) _ - + = | ` ~ '
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
	});
}
