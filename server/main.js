const http = require("http");
const express_app = require("./config/express");
const db = require('./config/database');

let app = express_app();
http.createServer(app).listen(app.get("port"), function(){
    console.log("Servidor express está rodando na porta: " + app.get("port"));
});

db('mongodb://localhost/socialmedia');