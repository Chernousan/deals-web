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
		security_new_events_caption: 'нових подій'
	});
}
