const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.get('/', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').end('Hello, World!\n'));
app.get('/good-evening', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').end('Good evening\n'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
