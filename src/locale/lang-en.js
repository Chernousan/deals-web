import UB from '@unitybase/ub-pub';

export function login() {
	UB.i18nExtend({
		login_email: 'Login / Email',
		login: 'Login',
		password: 'Password',
		action_caption: 'ENTER',
		validation_login_required: 'Please, enter login',
		validation_required_field: 'Required field',
		validation_authFailed: 'Invalid login or password',
		validation_password_template: 'Password template failed',
		forgot_password: 'Forgot password?',
		reset_password: 'Reset password',
		back_to_login: 'Back to login',
		tooltip_input_password: 'Password length should be 6-20 characters. You can use digits. latin characters and simbols: ! @ # $ % ^ & * ( ) _ - + = | ` ~ '
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
