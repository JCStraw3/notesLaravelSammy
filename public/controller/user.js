(function(){

	var app = Sammy.apps.body;

	app.get('#/user/:id', function(context){

		console.log(context.params);

		// var id = context.params.id;

		// $.getJSON('/user.json/' + id)
		// 	.done(function(data){
				
		// 		context.render('/view/nav.template', {
		// 			//
		// 		}, function(output){
		// 			$('#header').html(output);
		// 		});

		// 		context.render('/view/user.template', {
		// 			user: data,
		// 		}, function(output){
		// 			$('#content').html(output);
		// 		});
		// 	});
		
	});

})();