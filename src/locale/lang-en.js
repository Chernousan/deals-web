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
		security_new_events_caption: 'new events'
	});
}
