var http = require('http');
var url = require('url');

var store = {};

http.createServer(function (req, res) {
    if (req.url == '/set') { //check the URL of the current request

    const parsedUrl = url.parse(req.url, true).query;

    for(key in parsedUrl){
    	store[key] = parsedUrl[key];
    }
        
    // set response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(store);
        
    }
}).listen(4000);