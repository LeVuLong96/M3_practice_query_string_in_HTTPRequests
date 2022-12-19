const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let parseUrl = url.parse(req.url, true);
        let queryStringObject = parseUrl.query;

        res.end('Hello Node Js');
        console.log(queryStringObject);
        console.log(1)
    }

})
server.listen(8080, 'localhost', function() {
    console.log('Server running at http://localhost:8080');
})
