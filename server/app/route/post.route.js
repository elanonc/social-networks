const controller = require("../controller/post.controller");
const controllerComentarios = require("../controller/comentario.controller")

const auth = require("../controller/auth.controller.js");

module.exports = function(app){
    app.post("/post", controller.inserirPost);

    app.use("/post", auth.checar);

    app.get("/post", controller.listarPosts);
    app.get("/post/:id/comentarios", controllerComentarios.obterComentariosDoPost);
    app.get("/post/:id", controller.obterPost);
    app.delete("/post/:id", controller.deletarPost);
}