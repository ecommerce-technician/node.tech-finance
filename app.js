var express = require('express');
var app = express();
var http = require('http');
var request = require('request');
var Twitter = require('twitter');
var env = require('./env.json');

var twitterClient = new Twitter({
    consumer_key: env.TWITTER_CONSUMER_KEY,
    consumer_secret: env.TWITTER_CONSUMER_SECRET,
    access_token_key: env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET
});

app.use(express.static('public')); //todo nginx in production

app.use(function(request, response, next) {
	next();
});

app.get('/', function(request, response){
	//loads index file + angular app
	response.sendFile(__dirname + '/public/index.html');
});

app.get('/api/v1/markit/search/:ticker', function(req, res){

    var url = 'http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=' + req.params.ticker;
    request(url).pipe(res);

});

app.get('/api/v1/markit/search/interactive/:ticker', function(req, res){

    var url = 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22' + req.params.ticker + '%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22ohlc%22%5D%7D%5D%7D';

    request(url).pipe(res);

});

app.get('/api/v1/markit/search/quote/:ticker', function(req, res){

    var url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=' + req.params.ticker;
    request(url).pipe(res);

});

app.get('/api/v1/google-news/search/:ticker', function(req, res){

    var url='http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=' + req.params.ticker;
    request(url).pipe(res);
});

app.get('/api/v1/twitter/search/:ticker', function(req, res){
    twitterClient.get('search/tweets', {q:req.params.ticker,result_type:'mixed',count:50,lang:'en'}, function(error, tweets, res){
        shipIt(tweets)
    });

    function shipIt(tweets) {
        res.send(tweets);
    }
});

app.listen(5000, function(){
	console.log('listening on port 5000');
});