var express = require('express');
var app = express();
const PORT = 3000;

var intercepts =
{
	requireAuthentication: function(request, response, next)
	{
		console.log("Authentication intercept.");
		next();
	},
	logger: function(request, response, next)
	{
		var theRequest = request.method + " " + request.originalUrl
		
		console.log("Enter(" + new Date().toString() + ") " + theRequest);
		next();
		console.log("Exit(" + new Date().toString() + ") " + theRequest);
	}
};

app.use(intercepts.requireAuthentication);
app.use(intercepts.logger);

app.get("/about", function (request, response)
{
	console.log("get about");
	response.send("This is the about page!");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function()
{
	console.log("Express server started.");
	console.log("Listening to port " + PORT + ".");
});