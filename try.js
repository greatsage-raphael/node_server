var http = require('http');
http.createServer(function (req, res) {
    if (req.url == '/set') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('set');
        res.end();
    }

    if (req.url == '/get') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('get');
        res.end();
    }


}).listen(8080);