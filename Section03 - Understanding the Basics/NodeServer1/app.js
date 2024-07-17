const http = require('http')  // include a file path or core module
const routes = require('./routes')


const server = http.createServer(routes)

// const server = http.createServer(routes.handler)
// console.log(routes.someText);

server.listen(3000)


