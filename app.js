var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(function(request, response, next) {
	next();
});

app.get('/', function(request, response){
	//loads index file + angular app
	response.sendFile(__dirname + '/public/index.html');
}); 

app.get('/api/v1/read/tickers', function(request, response){
	var tickers = [
		{
			id : 1,
			ticker: 'immy'

		},
		{
			id : 2,
			ticker: 'sbux'
		},
		{
			id : 3,
			ticker: 'bzr'
		},
		{
			id : 4,
			ticker: 'rad'
		}
	]
	response.send(products);
	response.end();
});

app.listen(5000, function(){
	console.log('listening on port 8888');	
});