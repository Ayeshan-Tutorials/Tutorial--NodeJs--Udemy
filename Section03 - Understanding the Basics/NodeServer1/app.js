const http = require('http')  // include a file path or core module



const server = http.createServer((req, res) => {

    const url = req.url;
    if (url === "/") {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST><input type="text"><button type="submit">Send</button></body>')
        res.write('</html>')
        return res.end();  // return used to exit the function. Because after res.end, we should not call any other res.write etc.
    }

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