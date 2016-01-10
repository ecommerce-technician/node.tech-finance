var express = require('express');
var app = express();

app.use(express.static('public')); //todo nginx in production
app.use(function(request, response, next) {
	next();
});

app.get('/', function(request, response){
	//loads index file + angular app
	response.sendFile(__dirname + '/public/index.html');
}); 

app.get('/api/v1/read/options', function(request, response){
	var options = [
		{
			id : 1,
			option: 'Build'

		},
		{
			id : 2,
			option: 'Learn'
		}
	];
	response.send(options);
	response.end();
});

app.listen(5000, function(){
	console.log('listening on port 5000');	
});