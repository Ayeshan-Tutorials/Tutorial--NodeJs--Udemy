const http = require('http')  // include a file path or core module



const server = http.createServer((req,res) => {
    console.log(req.url , req.method, req.headers);
    //process.exit - to end the server
    res.setHeader('Contenet-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Web Page</title></head>')
    res.write('<body><h1>Hello World</h1></body>')
    res.write('</html>')
    res.end();
})



server.listen(3000)




// Extra Methods

///Methos 1
    // http.createServer(function(req,res))

///Methos 2
    // http.createServer(requestListner)
    // function requestListner(req,res) {
    // }