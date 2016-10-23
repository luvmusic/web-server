var express = require('express');
var app = express();
const PORT = 3000;

var middleware = require("./middleware.js");

app.use(middleware.authenticator);
app.use(middleware.logger);

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