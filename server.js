var http = require("http");
var url = require("url");

function start() {
		
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}
	
	http.createServer(onRequest).listen(process.env.PORT || 8888)
	console.log("Server Running");
	
}

exports.start = start;	
