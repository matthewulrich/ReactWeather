var express = require('express');

// Create our app
var app = express();

// This is so the app will work on Hiroku or the local server.
const PORT = process.env.PORT || 3000;

// This causes the app to break locally
app.use(function (req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function () {
	console.log('Express server is up on port ' + PORT);
});