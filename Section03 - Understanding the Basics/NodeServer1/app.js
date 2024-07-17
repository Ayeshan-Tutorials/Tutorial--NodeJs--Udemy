const http = require('http')  // include a file path or core module



const server = http.createServer((req,res) => {
    console.log(req);
    //process.exit - to end the server
})



server.listen(3000)




// Extra Methods

///Methos 1
    // http.createServer(function(req,res))

///Methos 2
    // http.createServer(requestListner)
    // function requestListner(req,res) {
    // }