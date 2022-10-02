var http = require('http'); // Import Node.js core module
var url = require('url');

var server = http.createServer(function (req, res) {   //create web server
    if (req.url === '/set') { //check the URL of the current request

        const parsedUrl = url.parse(req.url, true);

        const urlObject = parsedUrl.query

    

    console.log(urlObject)
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is set Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/get") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is get Page.</p></body></html>');
        res.end();
    
    }


});

server.listen(4000); //6 - listen for any incoming requests

console.log('Node.js web server at port 4000 is running..')