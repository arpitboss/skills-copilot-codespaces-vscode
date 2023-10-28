// Create web server
// 1. handle request
// 2. handle response
// 3. response data
// 4. response end
// 5. start server

// 1. handle request
// 1.1 require http module
var http = require('http');
// 1.2 create server
var server = http.createServer();
// 1.3 listen request event
server.on('request', function (req, res) {
  // 2. handle response
  // 2.1 set content-type
  // 2.2 set charset
  // 2.3 write data
  // 2.4 end response
  // 2.5 set status code
  // 2.6 set status message
  // 2.7 set header
  // 2.8 set cookie
  // 2.9 redirect
  // 3. response data
  // 4. response end
  // 5. start server
  // 5.1 listen port
  // 5.2 listen host
  // 5.3 listen callback
  // 5.4 listen backlog
  // 5.5 listen callback
  // 5.6 listen error
  // 5.7 listen close
  // 5.8 close server
});
// 5.9 listen close
server.on('close', function () {
    console.log('server closed');
});
// 5.5 listen callback
server.listen(3000, 'localhost', function () {
    console.log('server listening on port 3000');
});
