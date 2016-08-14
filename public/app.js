(function(){

	var app = Sammy('body');

	app.use(Sammy.Template);

	app.around(function(next){
		var context = this;

		if(window.user){
			next();
			return;
		}

		$.getJSON('/user.json')
			.done(function(data){
				window.user = data;
				context.render('/view/nav.template', {
					user: data,
				}, function(output){
					$('#header').html(output);
				});
				next();
			});
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