var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var store = {};

    if (req.url == '/set') {
        var parsedUrl = url.parse(req.url, true).query;
       

        for(key in parsedUrl){
            store[key] = parsedUrl[key];
        }
    
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Data saved!");
    }

    if (req.url == '/get') {
        var reqKeys = url.parse(req.url, true).query;
	var response = {};

	for(key in reqKeys){
		if(reqKeys[key] in store){
			response[reqKeys[key]] = store[reqKeys[key]];
		}
	}

	var json = JSON.stringify(response);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(json);
    }


}).listen(8080);