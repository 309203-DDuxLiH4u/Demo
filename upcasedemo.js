var http = require('http');

http.createServer(function (req, res) {
  import('upper-case').then(uc => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
  });
}).listen(8080);