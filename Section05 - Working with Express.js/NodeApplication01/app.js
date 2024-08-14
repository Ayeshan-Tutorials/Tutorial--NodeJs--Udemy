const http = require('http');

const express = require('express')

const app=express();

app.use((req, res, next) => {
    console.log("In the  middlewear!");
    next(); // allowa the request to continue to the next middlewear in line
})

app.use((req, res, next) => {
    console.log("In the other  middlewear!")
})

const server = http.createServer(app);

server.listen(3000);