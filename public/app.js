(function(){

	var app = Sammy('body');

	app.use(Sammy.Template);

	app.around(function(next){
		next();
	});

	$(document).ready(function(){

		app.get('(.*)', function(context){
			context.render('/view/404.template', function(output){
				$('#content').html(output);
			});
		});

		app.run('#/');

	});
	
})();