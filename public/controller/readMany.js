(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context, next){

		$.getJSON('/readMany.json', function(data){
			context.render('/view/readMany.template', {
				notes: data,
			}, function(output){
				$('#content').html(output);

				// TODO: Complete the delete a note.
				// As of now, this is broken.

				// Delete a note from the database.

				// $('#delete').click(function(event){

				// 	console.log('1');

				// 	var action = '/delete.json';

				// 	var deleteNote = {
				// 		id: $('#id').val(),
				// 		_method: 'delete',
				// 	}

				// 	$.ajax({
				// 		url: action,
				// 		method: 'post',
				// 		data: deleteNote,
				// 		error: function(result){
				// 			console.log(result);
				// 		}
				// 	})
				// 	.done(function(context){
				// 		window.location = '#/'
				// 	});

				// });
			});
		});
		
	});

})();