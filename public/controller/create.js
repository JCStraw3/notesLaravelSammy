(function(){

	var app = Sammy.apps.body;

	app.get('#/create', function(context){
		
		context.render('/view/nav.template', {
			//
		}, function(output){
			$('#header').html(output);
		});

		context.render('/view/create.template', {
			//
		}, function(output){
			$('#content').html(output);

			// Create a note in the database.

			$('#create').click(function(event){

				var action = '/create.json';

				var newNote = {
					title: $('#title').val(),
					body: $('#body').val(),
				}

				$.ajax({
					url: action,
					method: 'post',
					data: newNote,
					dataType: 'json',
					error: function(result){
						console.log(result);
					}
				})
				.done(function(context){
					window.location = '#/';
				});

			});
		});

	});

})();