$(function(){
	$(document).on('click', '#clonq-register .login-link', function() {
		revo.load({component:"clonq_user/login"});
	});
	// $('#test').on('submit', function() {
	// 	alert('...');
	// });
	// $(document).on('submit', '#clonq-register', function() {
	// 	console.log('submitting form...')
	// });
	// $(document).on('click', '#clonq-register .btn-signup', function() {
	// 	revo.emit({
	// 		model: 'user',
	// 		action: 'register',
	// 		data: {
	// 			name: $('#clonq-register form .name').val(),
	// 			email: $('#clonq-register form .email').val(),
	// 			password: $('#clonq-register form .password').val(),
	// 			inviteCode: $('#clonq-register form .invite-code').val()
	// 		}
	// 	});
	// });
	// $(document).on('click', '#clonq-register .linkedin-signin', function() {
	// 	revo.emit({
	// 		model: 'user',
	// 		action: 'authenticate',
	// 		data: {
	// 			strategy: 'linkedin',
	// 			username: $('#linkedin-login-modal .username').val(),
	// 			password: $('#linkedin-login-modal .password').val()
	// 		}
	// 	});
	// });
})
