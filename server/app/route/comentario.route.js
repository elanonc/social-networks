const controller = require("../controller/comentario.controller");

const auth = require("../controller/auth.controller.js");

module.exports = function(app){

    app.post("/comentarios", controller.inserirComentario);

    app.use("/post", auth.checar);
    
    app.get("/comentarios", controller.obterComentarios);
    app.delete("/comentarios/:id", controller.deletarComentario);
}