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
				});
			});
		
	});

})();