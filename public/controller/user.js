(function(){

	var app = Sammy.apps.body;

	app.get('#/user', function(context){

		var id = context.params.id;

		$.getJSON('/user.json', {id})
			.done(function(data){
				context.render('/view/user.template', {
					user: data,
				}, function(output){
					$('#content').html(output);

					// Update the user in the database.
					
					$('#update').click(function(event){

						var action = '/userUpdate.json';

						var updateUser = {
							id: $('#id').val(),
							name: $('#name').val(),
							email: $('#email').val(),
							_method: 'put',
						}

						$.ajax({
							url: action,
							method: 'post',
							data: updateUser,
							error: function(result){
								console.log(result);
							}
						})
						.done(function(context){
							alert('Saved.');
						});

					});
				});
			});
		
	});

})();