var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("<h1>Hello World!</h1>");
    res.end();
});

server.listen(3000, function() {
    console.log("Servidor rodando na porta 3000");
});