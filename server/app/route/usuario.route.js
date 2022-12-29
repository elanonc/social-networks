const controller = require("../controller/usuario.controller");
const auth = require("../controller/auth.controller.js");

module.exports = function(app){
    app.post("/usuarios", controller.inserirUsuario);

    app.post("/usuarios/login", auth.logar);
    app.use("/usuarios", auth.checar);

    app.get("/usuarios", controller.listarUsuarios);
    app.get("/usuarios/:id", controller.obterUsuario);
    app.get("/usuarios/:id/post", controller.obterPostsDoUsuario);
    app.delete("/usuarios/:id", controller.deletarUsuario);
}