middleware =
{
	authenticator: function(request, response, next)
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

module.exports = middleware;
