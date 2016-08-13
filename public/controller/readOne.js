(function(){

	var app = Sammy.apps.body;

	app.get('#/note/:id', function(context){

		var id = context.params.id;

		$.getJSON('/readOne.json/' + id)
			.done(function(data){
				
				context.render('/view/nav.template', {
					//
				}, function(output){
					$('#header').html(output);
				});

				context.render('/view/readOne.template', {
					note: data,
				}, function(output){
					$('#content').html(output);

					// Update a note in the database.

					$('#update').click(function(event){

						var action = '/update.json';

						var updateNote = {
							id: $('#id').val(),
							title: $('#title').val(),
							body: $('#body').val(),
							_method: 'put',
						}

						$.ajax({
							url: action,
							method: 'post',
							data: updateNote,
							error: function(result){
								console.log(result);
							}
						})
						.done(function(context){
							alert('You have updated this note.');
						});

					});

					// Delete a note from the database.

					$('#delete').click(function(event){

						var action = '/delete.json';

						var deleteNote = {
							id: $('#id').val(),
							_method: 'delete',
						}

						$.ajax({
							url: action,
							method: 'post',
							data: deleteNote,
							error: function(result){
								console.log(result);
							}
						})
						.done(function(context){
							window.location = '#/'
						});

					});
				});
			});
		
	});

})();