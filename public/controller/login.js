(function(){

	var app = Sammy.apps.body;

	app.get('#/login', function(context){
		
		context.render('/view/nav.template', {
			//
		}, function(output){
			$('#header').html(output);
		});

		context.render('/view/login.template', {
			//
		}, function(output){
			$('#content').html(output);

			$('#login').click(function(event){

				var action = '/login.json';

				var loginUser = {
					email: $('#email').val(),
					password: $('#password').val(),
				}

				$.ajax({
					url: action,
					method: 'post',
					data: loginUser,
					dataType: 'json',
					error: function(result){
						console.log(result);
					}
				})
				.done(function(context){
					console.log('Successful login.');
					alert('You have logged in.');
				});

			});

		});

	});

})();