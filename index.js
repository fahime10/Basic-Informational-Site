const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(
    (req, res) => {
        if (req.url === '/') {
            fs.readFile('public/index.html', function (err, data) {
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text-plain');
                res.write(data);
                return res.end();
            });   
        } else if (req.url === '/about') {
            fs.readFile('public/about.html', function (err, data) {
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text-plain');
                res.write(data);
                return res.end();
            }); 
        } else if (req.url === '/contact') {
            fs.readFile('public/contact.html', function (err, data) {
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text-plain');
                res.write(data);
                return res.end();
            });   
        } else {
            fs.readFile('public/404.html', function (err, data) {
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text-plain');
                res.write(data);
                return res.end();
            });   
        }
    }
);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});