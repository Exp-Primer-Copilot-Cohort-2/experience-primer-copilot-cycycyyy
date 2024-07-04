// Create web server
const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello World</h1>');
    res.end();
});

// Listen on port 3000
server.listen(3000);

console.log('Listening on port 3000...');