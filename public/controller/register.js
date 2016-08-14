(function(){

	var app = Sammy.apps.body;

	app.get('#/register', function(context){
		context.render('/view/register.template', {
			//
		}, function(output){
			$('#content').html(output);

			$('#register').click(function(event){

				var action = '/register.json';

				var newUser = {
					name: $('#name').val(),
					email: $('#email').val(),
					password: $('#password').val(),
					password_confirmation: $('#password_confirmation').val(),
				}

				$.ajax({
					url: action,
					method: 'post',
					data: newUser,
					dataType: 'json',
					error: function(result){
						console.log(result);
					}
				})
				.done(function(context){
					console.log('Successful user creation.');
				});

			});
		});

	});

})();