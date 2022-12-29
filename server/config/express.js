const express = require("express");
const cors = require("cors");
const routes_usuario = require("../app/route/usuario.route");
const router_comentarios = require("../app/route/comentario.route");
const router_post = require("../app/route/post.route");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); 
    routes_usuario(app);
    router_comentarios(app);
    router_post(app);
    app.use(express.static("./public"))
    return app;
}